# Watame揪勾錐

## 目的

透過GitHub.io架設靜態"音樂"網站，採用全前端，無後端
以GOOGLE雲端硬碟資料為例：

### step1. 將GOOGLE雲端的音樂URL處理成可以直接下載的URL
 - 音樂網址：https://drive.google.com/file/d/12uGuymEjRqvyFVAVLpjoe-IEkGq7i0WH/view?usp=sharing
 - 音樂網址的URL ID為：12uGuymEjRqvyFVAVLpjoe-IEkGq7i0WH
 - 透過 "https://drive.google.com/uc?export=download&id=" + "音樂URL"，重新導向
 - 例如：https://drive.google.com/uc?export=download&id=12uGuymEjRqvyFVAVLpjoe-IEkGq7i0WH  會直接下載.MP4，這樣就對了，之後我們要考慮如何讓音樂撥放器的SRC自動導向這段處理過的URL
 - 下面為HTML的audio音樂元件範例
```javascript
<audio
      id="myaudi"
      :src="https://drive.google.com/uc?export=download&id=12uGuymEjRqvyFVAVLpjoe-IEkGq7i0WH"
      controls
    />
```
### step2. 使用axios抓取HTML資料，cheerio篩選HTML元素，抓取GOOGLE雲端的檔案URL ID
這邊建議各位直接調用.js檔案測試，再把.js放到VUE的<script>執行即可
```javascript
// 匯入所需模塊
const axios = require('axios') // 撈API用，我想你懂得
const cheerio = require('cheerio') // 用於篩選HTML內的元素

// GOOGLE雲端硬碟資料夾網址
const url = 'https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr'

// 預存放暫存資料
const playlist = []

// 取得播放清單網頁原始碼，快速版(若該元素眾多，請查看cheerio使用說明，進階篩選)
axios.get('https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr').then((res) => {
  const $ = cheerio.load(res.data) // 本行res.data為HTML，使用cheerio.load來載入HTML資料
  $('.WYuW0e ').each((index, element) => {  // 直接找到你要抓的Class  
  // <div data-target="doc" draggable="true" jsaction="I6mUue:Ppnscc;Cej8pc:Krrt9b;Zhs91b:UNwd5e;dAEAFb:p4DfEc;MUmfBf:VWAsNe;u4juXc:E8sp8c;EV6U7c:crY0ee;rcuQ6b:uaW3He"jscontroller="LPQUTd" data-id="1OBNILLO2WOTQqhoKi0VnSnGC7ycQTFP6" class="WYuW0e">
    const myarrtemp = $(element).attr('data-id') // 若要抓1OBNILLO2WOTQqhoKi0VnSnGC7ycQTFP6，則$(element).attr('data-id')
    console.log(myarrtemp)
  })
})
```
以雲端硬碟為例：data-id=音樂分享連結，data-tooltip=檔名


因網站為靜態式，且使用GitHub.io架設，無法透過後端伺服器進行跨域，純前端若跨網域抓取，會出現CORS問題
憤而使用cors-anywhere組件，與申請heroku網址，代理跨域問題。

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
