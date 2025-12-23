(() => {
  function initSidebarPanels() {
    const body = document.body;
    const overlay = document.querySelector("[data-sidebar-overlay]");
    const panels = Array.from(document.querySelectorAll("[data-sidebar-panel]"));
    if (!body || !overlay || panels.length === 0) {
      return;
    }

    const closeAll = () => {
      panels.forEach((panel) => panel.classList.remove("is-open"));
      body.classList.remove("has-sidebar-open");
    };

    const openPanel = (panel) => {
      panels.forEach((item) => {
        if (item === panel) {
          item.classList.add("is-open");
        } else {
          item.classList.remove("is-open");
        }
      });
      body.classList.add("has-sidebar-open");
    };

    const togglePanel = (panel) => {
      if (!panel) {
        return;
      }
      if (panel.classList.contains("is-open")) {
        closeAll();
      } else {
        openPanel(panel);
      }
    };

    document.querySelectorAll("[data-sidebar-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-sidebar-toggle");
        if (!targetId) {
          return;
        }
        const panel = document.getElementById(targetId);
        togglePanel(panel);
      });
    });

    document.querySelectorAll("[data-sidebar-close]").forEach((button) => {
      button.addEventListener("click", () => closeAll());
    });

    overlay.addEventListener("click", () => closeAll());
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeAll();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        closeAll();
      }
    });
  }

  function enhanceCopy(codeEl) {
    const pre = codeEl.closest("pre");
    if (!pre || pre.dataset.copyReady === "true") {
      return;
    }

    pre.dataset.copyReady = "true";
    pre.classList.add("code-block");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "code-block__copy";
    button.setAttribute("aria-label", "复制代码");
    button.textContent = "复制";

    button.addEventListener("click", async () => {
      const text = codeEl.innerText;
      const reset = () => {
        button.classList.remove("is-success", "is-error");
        button.textContent = "复制";
      };

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const temp = document.createElement("textarea");
          temp.value = text;
          temp.setAttribute("readonly", "");
          temp.style.position = "absolute";
          temp.style.left = "-9999px";
          document.body.appendChild(temp);
          temp.select();
          document.execCommand("copy");
          document.body.removeChild(temp);
        }
        button.classList.add("is-success");
        button.textContent = "已复制";
        window.setTimeout(reset, 2000);
      } catch (error) {
        console.error("Copy failed", error);
        button.classList.add("is-error");
        button.textContent = "复制失败";
        window.setTimeout(reset, 2000);
      }
    });

    pre.appendChild(button);
  }

  function initActiveToc() {
    const tocLinks = Array.from(document.querySelectorAll(".context-panel__toc a[href^='#']"));
    if (tocLinks.length === 0) {
      return;
    }

    const sections = tocLinks
      .map((link) => {
        const id = decodeURIComponent(link.getAttribute("href").slice(1));
        const target = document.getElementById(id);
        if (!target) {
          return null;
        }
        return { link, target };
      })
      .filter(Boolean);

    if (sections.length === 0) {
      return;
    }

    const clearActiveState = () => {
      sections.forEach(({ link }) => {
        link.classList.remove("active");
        let item = link.closest("li");
        while (item) {
          item.classList.remove("has-active");
          const parentList = item.parentElement;
          item = parentList ? parentList.closest("li") : null;
        }
      });
    };

    const applyActiveState = (link) => {
      link.classList.add("active");
      let item = link.closest("li");
      while (item) {
        item.classList.add("has-active");
        const parentList = item.parentElement;
        item = parentList ? parentList.closest("li") : null;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearActiveState();
            const matched = sections.find(({ target }) => target === entry.target);
            if (matched) {
              applyActiveState(matched.link);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -70% 0px",
      }
    );

    sections.forEach(({ target }) => observer.observe(target));
  }

  function initCollapsibleToc() {
    const section = document.querySelector("[data-toc-section]");
    const toggle = document.querySelector("[data-toc-toggle]");
    if (!section || !toggle) {
      return;
    }

    const applyState = () => {
      const collapsed = section.classList.contains("is-collapsed");
      toggle.setAttribute("aria-expanded", String(!collapsed));
    };

    toggle.addEventListener("click", () => {
      section.classList.toggle("is-collapsed");
      applyState();
    });

    applyState();
  }

  function initEnhancements() {
    const body = document.body;
    if (!body) {
      return;
    }

    const enableHighlight = body.dataset.featureHighlight !== "false";
    const enableCopy = body.dataset.featureCopy !== "false";

    initSidebarPanels();
    initCollapsibleToc();
    initActiveToc();

    const codeBlocks = Array.from(document.querySelectorAll("pre code"));

    if (enableHighlight && window.hljs) {
      codeBlocks.forEach((block) => window.hljs.highlightElement(block));
    }

    if (enableCopy) {
      codeBlocks.forEach(enhanceCopy);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEnhancements);
  } else {
    initEnhancements();
  }
})();
