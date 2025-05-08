(require 'ox-publish)

(setq org-html-head-include-default-style nil)
(setq my-org-publish-root "C:\\Users\\pilrymage\\scoop\\apps\\cwrsync\\6.3.0\\rsyncfiles\\blog")
(defconst my-html-head "
<link rel=\"stylesheet\" href=\"./static/style.css\" type=\"text/css\"/>
<link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\">
"
  "`:html-head' for `org-publish'.")

(defconst my-html-preamble "
 <nav>
  <ul>
    <li><a href=\"./index.html\">Home</a></li>
    <li><a href=\"./about.html\">About</a></li>
    <!-- <li><a href=\"./rss.xml\">RSS</a></li> -->
    <li><a href=\"https://github.com/Pilrymage/\">GitHub</a></li>
  </ul>
</nav>
"
  "`:html-preamble' for `org-publish'." )
(defconst my-html-postamble "
<p class=\"author\">Author: <a href=\"mailto:pilrymage@gmail.com\">%a</a></p>
<p class=\"date\">Date: %d</p>
<p class=\"license\">License: <a href=\"https://www.creativecommons.org/licenses/by-nc/4.0/deed.zh-hans\">CC BY-NC 4.0</a></p>
<!--<script src=\"https://utteranc.es/client.js\" repo=\"Spike-Leung/taxodium\" issue-term=\"pathname\" theme=\"github-light\" crossorigin=\"anonymous\" async></script>-->
"
  "`:html-postamble' for `org-publish'.")
(setq org-publish-project-alist
      `(
        ("my-blog"
         ;; :force t
         :base-directory ,(concat my-org-publish-root "\\src")        ; 文件目录
         :base-extension "org"
         :publishing-directory ,(concat my-org-publish-root "\\docs") ; 存放目录
         :section-numbers nil                          ;显示章节编号
         :with-toc t
         :with-tags t
         :time-stamp-file nil
         :recursive t                          ;递归处理 org 文件
         :publishing-function org-html-publish-to-html ;使用org-html生成HTML
         :headline-levels 2                            ; HTML标题级别限制
         :html-head ,my-html-head ; 自定义 HTML head 内容
         :html-preamble ,my-html-preamble
         :html-postamble ,my-html-postamble
         :html-html5-fancy t
         :auto-sitemap t
         :sitemap-filename "index.org"
         :sitemap-title "Pilrymage"
         :sitemap-sort-files anti-chronologically
         :author "Pilrymage"
         :email "pilrymage@gmail.com"
         )
        ("my-blog-static"
         :base-directory ,(concat my-org-publish-root "\\src")
         :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf"
         :recursive t
         :publishing-function org-publish-attachment
         :publishing-directory ,(concat my-org-publish-root "\\docs")
         )
        ("sitemap"
         :base-directory ,(concat my-org-publish-root "\\src")
         :base-extension "org"
         :publishing-directory ,(concat my-org-publish-root "\\docs") ; 存放目录
         :publishing-function org-html-publish-to-html ;使用org-html生成HTML
         :time-stamp-file nil
         :include ("index.org")
         :exclude ".*"
         :html-head ,my-html-head
         :html-preamble nil
         :html-postamble nil
         )
        ("my-blog-all" :components ("sitemap" "my-blog" "my-blog-static" ))
        ))
(org-publish-project "my-blog-all")
;; (browse-url-default-browser (concat "file://" (concat "./public_html" my-org-publish-root)))
