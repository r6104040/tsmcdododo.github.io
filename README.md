# Watame揪勾錐

## 目的

透過GitHub.io架設靜態"音樂"網站，採用全前端，無後端並用API撈GOOGLE雲端硬碟資料  
下面的代碼純技術討論。真心不懂就載下來，直跳到Step3吧

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
  $('.WYuW0e ').each((index, element) => {  // 直接找到你要抓的Class 雲端硬碟我想要的元素：data-id=音樂分享連結，data-tooltip=檔名
  // <div data-target="doc" draggable="true" jsaction="I6mUue:Ppnscc;Cej8pc:Krrt9b;Zhs91b:UNwd5e;dAEAFb:p4DfEc;MUmfBf:VWAsNe;u4juXc:E8sp8c;EV6U7c:crY0ee;rcuQ6b:uaW3He"jscontroller="LPQUTd" data-id="1OBNILLO2WOTQqhoKi0VnSnGC7ycQTFP6" class="WYuW0e">
    const myarrtemp = $(element).attr('data-id') // 若要抓1OBNILLO2WOTQqhoKi0VnSnGC7ycQTFP6，則$(element).attr('data-id')
    playlist.push(myarrtemp)// 每筆資料pusch進array
    console.log(myarrtemp)// 檢查每筆資料，隨便啦
  })
  console.log(playlist)// 檢查array輸出
})
```
  現在所有資料都存進playlist裡面，然後就是數據處理了，後面應該不用我交了吧XD  
  字串相加"https://drive.google.com/uc?export=download&id=" + playlist[0]，用for或while重新整理Array
  或者我的專案，用select組件，觸發function再相加，都可以。
  


### step3. 開發或實裝Github.io時，遇上CROS跨域問題
因網站為靜態式，且使用GitHub.io架設，無法透過後端伺服器進行跨域，純前端若跨網域抓取，會出現CORS問題  
基本上只能透過代理的方式，除非你想自己架設一台24hr工作的後端伺服器(線上免費的夠用就好)  
使用cors-anywhere組件，與申請heroku網址，代理跨域問題。  
  heroku安裝教學：https://smlpoints.com/guide-heroku-build-your-cors-proxy-server.html  
  我是看這篇，照做就ＯＫ，執行完git push heroku master之後，你會得到一段網址
```javascript
  //原本的API
  this.$axios.get('https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr'
  //替換後的API
  this.$axios.get('https://nameless-xxxxxx.herokuapp.com/https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr'
```
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
