(() => {
  const runOnce = () => {
    const body = document.body;
    if (!body) {
      return;
    }

    const enableHighlight = body.dataset.featureHighlight !== "false";
    const enableCopy = body.dataset.featureCopy !== "false";

    const codeBlocks = Array.from(document.querySelectorAll("pre code"));

    if (enableHighlight && window.hljs) {
      codeBlocks.forEach((block) => {
        window.hljs.highlightElement(block);
      });
    }

    if (enableCopy) {
      codeBlocks.forEach((block) => {
        enhanceCopy(block);
      });
    }
  };

  const enhanceCopy = (codeEl) => {
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
        button.classList.remove("is-success");
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
        setTimeout(reset, 2000);
      } catch (error) {
        console.error("Copy failed", error);
        button.classList.add("is-error");
        button.textContent = "复制失败";
        setTimeout(reset, 2000);
      }
    });

    pre.appendChild(button);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runOnce);
  } else {
    runOnce();
  }
})();
