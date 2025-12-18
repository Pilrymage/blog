+++
title = "chezmoi：全平臺配置文件管理"
tags = ["linux", "windows"]
draft = true
date = 2025-11-06 # 评分时间
# genres = ["historical"]
recommended = false
kicker = "Configure once, run anywhere"
[cover]
image = ""
hero = ""
+++

> 把自己的 .emacs.d 搞丟的人，以後再也用不了 Emacs 了。
> 不要學這種人

能夠以 Linux 作爲桌面系統的系統管理員們，手上一定少不了一套高度定制化的 Linux 配置。
但是對於發行版愛好者，弄壞系統并重裝各種版本的系統又時常發生（Archlinux：在想我的事？）。
因而必須想辦法管理這些配置以方便系統遷移，也是 Linux 運維的基本操作。

首先想到的當然是對純文本配置用 `git` 管理了吧，用一整個配置倉庫來管理。
然而 Linux 配置的特色便是各有各的放法，比如 XDG 規定放在 `$HOME/.config/<name>` 下面，
而 `.bashrc` ， `.profile` 等又是簡單放在 `$HOME` 下面。
還有如 `.emacs.d/` 或放在 `/etc` 下面的系統配置。
也有人想到用 `git` 的高階操作，可以讓倉庫添加文件而不必在倉庫的子目錄之內。
但是這還是相當的不穩健——我感覺我 `git branch` 都沒用明白呢，到時後忘了指令該怎麼辦。

升級版的配置方法是使用 [GNU Stow](https://www.gnu.org/software/stow/)，實質上是生成并管理符號鏈接的工具。
一個相當無腦的用法是 `cd ~/dotfile && stow .` ，
可以在家目錄下生成軟鏈接，指向配置文件與目錄。
而你所需要的，只是 `~/dotfile/.config` ， `~/dotfile/.emacs.d` ，等等。
然而還是有些缺陷：基於 Linux 符號鏈接的程序可能無法在 Windows 上面使用。
但是有時也會需要在 Windows 上使用配置，比如 Rime 中州韻/小狼毫。

`chezmoi` 可以解决各平臺的配置文件問題。
它真正地把 `git` 倉庫容納其中，倉庫中跟蹤的各文件情況對 `chezmoi` 可見，
你可以使用 `chezmoi` 命令與配置倉庫交互，添加編寫好的配置文件。
同時， `chezmoi` 支持 go 語言的模板，從而區分不同系統上的配置，其內部情況則封裝到 `chezmoi` 的倉庫裏。
