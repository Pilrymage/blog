+++
title = "Emacs，Hugo，Codex：2025年搭建个人博客的三位一体"
tags = ["emacs", "hugo", "ai"]
draft = true
+++

> 我看 Emacs-Hugo + Codex 搞得不错，静态网页生态极大丰富，迁移困难基本消灭，网站风格、程序员审美也受重视，
> 如果加上我的雄文，这就是我理想中的博客站点<sup>[21]</sup>。

我大一大二(2021年)时就开始研究搭建个人博客与md，
当时使用基于Hexo的博客工具，连命令行与npm都玩不转，部署起来十分痛苦。
现在过了四年，略通一点博客的搭建思路，分享出来，让更多人不走弯路。

1.  **这篇文章的目标用户？**

    主要是面向 Emacs 用户的一套搭建博客的技术栈—— Emacs 是在程序员中具有独特生态位的纯文本编辑器。
    对于没有 Emacs 经验的读者，也可以阅读其中有关纯文本的讨论，然后使用 VSCode 或其他 Markdown 编辑器。

2.  **阅读方式**

    本文各部分没有很大关联，不需要按顺序阅读。对于在 Windows 上写博客的初学者，推荐阅读“基础”部分，
    了解博客工具如何通过命令行运作。


## 基础：Markdown，命令行，git，以及 VSCode {#基础-markdown-命令行-git-以及-vscode}


### Markdown：最流行的纯文本格式 {#markdown-最流行的纯文本格式}


### Windows 命令行解说 {#windows-命令行解说}

> Linux 用户注释：这一段的“命令行”不止于 cmd.exe，相当于 shell 的中文名，两者可以通用。
> 实际上解释的是如何切换到 powershell 并准备好包管理器 scoop，从而下载 Hugo。

1.  打开 powershell：在这一步后你应该看到

    ```text
    Windows PowerShell
    Copyright (C) Microsoft Corporation. All rights reserved.

    Try the new cross-platform PowerShell https://aka.ms/pscore6

    PS C:\Users\pilrymage>
    ```

    搜索框或 Win+R 键调出。
2.  下载 scoop。如[官网](https://scoop.sh/)所说
    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
    ```


## Emacs-Orgmode：纯文本输出 {#emacs-orgmode-纯文本输出}


## Hugo：最快的静态网页生成器 {#hugo-最快的静态网页生成器}


## GPT Codex：个人主题定制 {#gpt-codex-个人主题定制}


## GitHub：部署托管个人网页 {#github-部署托管个人网页}
