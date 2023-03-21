+++
title = "Emacs 搭配 Hugo 的个人博客创作"
author = ["Keara Coara"]
lastmod = "YYYY-MM-DD"
tags = ["Emacs"]
categories = ["Lisp与Emacs"]
draft = false
+++

参见：[子龙山人](https://zilongshanren.com/post/move-from-hexo-to-hugo/)，[Emacs 中文社区讨论串](https://emacs-china.org/t/topic/5427)

作为一款文本编辑器，Emacs 的上限是肉眼可见的极高：定制水平很大程度上影响了编辑器的外观及能力。

上一次 Emacs 让我为之惊叹的是即使是在终端的输入，而内置的输入法真的也能在其中运作！
当然是因为 Emacs 的 TUI（终端界面）是通过GUI渲染的，然而这就能给终端赋以超越 vim 的能量。
vim 并非不能使用内置输入法，然而 Emacs 才是为大而全的应用而生，在ipad的终端里写文章不再是梦。

或许这也让我这个 Emacs 新人对 Emacs 狂热粉多了一分感同身受吧。爱好 Emacs 的大多是非常看重自己工具流的定制化。
因而当我找到一套适用于 org mode 的博客生成方案时，我不禁再次对 Emacs 社区的大佬们肃然起敬。


## 什么是 Org mode? {#什么是-org-mode}

Org mode 是一个同 Emacs 绑定的软件包，也指这个软件包所操作的标记文本： org 文件。

可以用 markdown 文件来类比 org 文件， org 就是 organization （组织）。
markdown 文件有 Typora、 Notion 等等编辑器，将其渲染成网页上展示的形式。

而 org 文件主要跟 Emacs 一起使用，拜 Emacs 的海量文本编辑功能所赐，
org 的编辑器非市面上任何一款编辑器所能比拟。
比如直接从文本生成博客，敢问其它编辑器做得到吗？！


## 博客搭建 {#博客搭建}

参见：[Hugo quickstart](https://gohugo.io/getting-started/quick-start/)、and [Host on Github](//gohugo.io/hosting-and-deployment/hosting-on-github/)

Hugo 搭建非常快捷。上次尝试搭建博客还是在 Windows 上用 Hexo ，在 Github Pages 发布上要死要活。
这次跟着教程，花个 5 分钟就能开本地服务器了。 Github Page 也有适用于 Hugo 的 Action。

绑定个人域名有点麻烦，要在 DNS 提供商引导一个 CNAME 记录，
闲话一句，这也是我没用 Netlify 的原因，因为在应用里添加不上域名，显示已被占用，
它大概要让我把 DNS 记录全迁移到 Netlify 自己的服务器才行。（是我哪里弄错了吗？）

Github Actions 就是一个持续集成（CI），对新人而言最大的优势就是仓库也是 Github 的。
这之后只需 git push 就能更新博客，剩下的已经自动化。


## Emacs 与 Hugo 导出功能 {#emacs-与-hugo-导出功能}

参见：[ox-hugo quickstart](https://ox-hugo.scripter.co/doc/quick-start/).
Hugo 支持 org 格式作为博文，然而其渲染支持不比其 markdown 渲染器好。
更优的做法是让 Emacs 将 org 格式转化为 md 格式， 然后交给 hugo。
这里使用 Emacs 的 ox-hugo 包实现转化。


### 安装 {#安装}

doom emacs 的 package.el：

```emacs-lisp
(package! ox-hugo)
```


### 配置 {#配置}

用 <kbd>#+hugo_base_dir</kbd> 指定 hugo 的根目录
默认的主题，ox-hugo会直接把 md 文件生成在 content/posts 里，可以直接跳到下一节。
如果你用的主题使用了不同的目录以及 Hugo 的 [Page Bundle](https://gohugo.io/content-management/page-bundles/), 如[stack](https://stack.jimmycai.com/writing/markdown)主题，
可以用 <kbd>#+hugo_section: post</kbd> 指定博文放在 content/post 里，
用 <kbd>:EXPORT_HUGO_BUNDLE: my-first-blog</kbd> 与 <kbd>#+export_file_name: index</kbd>
形成一个名为 my-fist-blog 的文件夹，包含正文部分的 index.md 。


### 导出 {#导出}

使用 <kbd>org-hugo-export-wim-to-md</kbd> 函数导出。该函数有快捷键，但是与 doom emacs 不兼容。
因为 org 的 todo 对应 hugo 的 draft 状态，只有先将博文设为 done 才能导出。
然后就可以用 <kbd>hugo server</kbd> 检查输出了。


## 结语 {#结语}

写个五分钟，这篇博文就已经部署好了，咱充分享受到科技的便利。
其实这篇也没有什么自己的东西，只是不完整地总结了一边前人的知识。
然而比之以前用 Windows 的 Git 命令行强行部署 hexo ，半懂不懂，个人觉得算是巨大的进步了。

学计算机的，果然还是要有一个 Linux 系统，免去众多的闲杂烦恼。
而遇见 Emacs， 虽说是学 Linux 的附带收获，却实在是我的一大幸事，它能不断满足我的奇妙想法。
