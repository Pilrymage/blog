+++
title = "Kindle 個人使用評測——這樣越獄，能讓二手 Kindle 多值 100 元！"
draft = true
kicker = ""
[cover]
image = ""
hero = ""
+++

你有沒有這樣一種經歷：在初高中十幾歲時夜半不睡覺，拿着一個 2 寸一點大屏幕的 mp3 看小說。
雖然 txt 排版的圖書格式很爛還有錯別字，但是真能讀上幾百來頁不帶停，讀完一個系列還意猶未盡。
如果有，那麼恭喜你，你也是一位愛書之人，而 Kindle 正是給喜歡讀書的人的好東西。


## 選購 Kindle 的想法 <span class="tag"><span class="ATTACH">ATTACH</span></span> {#選購-kindle-的想法}

作爲遠離手機的一步，我希望 Kindle 能夠承擔我的閱讀需求，專器專用也。
選購一個二手 Kindle，因爲 Kindle 耐用而二手實惠（ ~~相信很多 Kindle 都用來蓋泡面了~~ ），
而且正版 Kindle 很有可能限制越獄功能，否則商家不給保修。
我的選擇是購買 Kindle PaperWhite 4, 因爲墨水屏能防止屏幕傷眼，更方便閱讀。

本來以爲 KPW 有個 6 寸大，尺寸和我的 iPhone13 差不多也行。
此 95 新 KPW4 是 380 元入手，實際上拿到這個六寸却是一個小平板一樣，其大小遠超出我的預期。
雖然有明顯但不影響閱讀的劃痕，這價格要什麼自行車呢。

{{< figure src="/ox-hugo/_20251210-183556screenshot.png" >}}


## 越獄流：Adbreak 踩坑記錄 {#越獄流-adbreak-踩坑記錄}

Kindle 是基於 Linux 的系統，很多在 Linux 上找到的漏洞都可以套在 Kindle 上以提升權限。
越獄方法就是這麼來的。

推薦英文社區的越獄教程：[Kindle Modding Wiki](https://kindlemodding.org/) ，
以及中文社區的相關補充內容： [Kindle 为什么要越狱？Kindle 越狱有哪些风险和好处？ – 书伴](https://bookfere.com/post/412.html)，
或是[L站的翻譯](https://linux.do/t/topic/1058730)。
這裏只講一些個人的具體操作。

越獄與閱讀器的固件版本相關：低於 5.18.1 版本可以用 `WinterBreak` 越獄，
而再高一點點則需要 [AdBreak](https://kindlemodding.org/jailbreaking/AdBreak/) 。注意查看固件版本高低以選擇破解方式。
就以我的 Kindle Paperwhite 4 爲例，你需要一個 **不在中國** 的亞馬遜賬號，
因爲他們的電子書商場已經退出中國，不會給你推薦對應的廣告。

```text
如果你在英文社區的 Troubleshooting 看到有 CN，不要相信……用美國地區吧
```

給亞馬遜的賬號做到國外去，只需要提供國外地址（使用谷歌地圖），手機號都用國內的就可以。
雖然，還是建議用國外手機號（GV 等），親測國內運營商可能收不到短信。
如果已經注冊了國內賬號，則可以先注銷賬號（已購電子書清空，最後需要在短信裏確認注銷）。

剩下的就是改變賬戶地址，添加支付方式，然後打開廣告。
你需要在亞馬遜官網登錄，Account → Digital Services and Device Support →
Kindle Content → Manage Your Content and Devices → [Preferences](https://www.amazon.com/hz/mycd/preferences/myx#/home/settings/payment)
→ Country/Region Settings → Change 以修改賬戶地址（填一個真實地址）。
同頁面的 Digital Payment Settings 跳轉到 [Your Payments](https://www.amazon.com/cpe/yourpayments/settings/manageoneclick/ref=mycd_prefs) ，添加銀行卡（包括銀聯卡）；
然後回到 [Devices](https://www.amazon.com/hz/mycd/digital-console/alldevices)，打開 SPECIAL OFFERS。
如果你的地址和支付方式都是可用的，就不會出現報錯，成功打開廣告。
否則，回去再檢查一下地區和支付方式。

另外，當 Kindle 可以看到廣告後，電腦連接 Kindle，
你可能找不到其中的 system 文件夾，即使打開了文件管理器的“顯示隱藏文件”。
那麼，你可以用 PowerShell 命令行操作，或是手動輸入 `D:/system` 進行訪問。


## Koreader 體驗 &amp; FAQ {#koreader-體驗-and-faq}

總體而言，Koreader 的體驗是好於 Kindle 原生閱讀器的。


### 一贏：PDF 閱讀 <span class="tag"><span class="ATTACH">ATTACH</span></span> {#一贏-pdf-閱讀}

雖然屏幕比平板小，最令我驚艷的却不是讀文字，而是讀 PDF 的能力。
它有一個自動切屏的功能，去除兩邊的空白而只展現文字，
配合 PDF 橫放實在是閱讀器中的黑科技。

讀一些文學專著都夠用了


### 二贏：書架與歷史記錄 {#二贏-書架與歷史記錄}


### 三贏：自定義字體、插件等功能 {#三贏-自定義字體-插件等功能}

1.  profile 插件，美觀的
2.  assistant AI 插件，閱讀神器，就憑開源這個功能也能打過一票閉源閱讀器。
    配合免費大模型 api，就是最好的閱讀助手。


### Calibre 配合 KOReader 的一些細節 {#calibre-配合-koreader-的一些細節}

Calibre 是一個開源的圖書管理工具。自然，它也對最出名的閱讀器做了適配。
把 Kindle 直接連到電腦上，Calibre 會把 Kindle 當作設備并與之同步，發送圖書到設備。
但對於越獄後安裝的 KOReader，它默認跨平臺支持 epub，而對於 mobi 文件，不能展現其封面，
然而 Calibre 會在把圖書發送到 Kindle 時自動把 epub 圖書轉化爲 mobi 格式。
因此，KOReader 裏可能看不到這些圖書的封面。

解决方法是修改 Calibre 的插件在發送圖書到 Kindle 時的默認行爲。
打開首選項 → 高級選項 → 插件 → 設備接口 → Kindle Device Interface，
點擊“自定義插件”，在“可用格式”中找到 epub，并將其
