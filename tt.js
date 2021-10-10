// 匯入所需模塊
const axios = require('axios')
const cheerio = require('cheerio')

// Youtube播放清單網址
const url = 'https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr'

// 暫存單曲資料
const playlist = []

// 取得播放清單網頁原始碼
axios.get('https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr').then((res) => {
  const $ = cheerio.load(res.data) // PolqHc sd-ph
  $('.Q5txwe ').each((index, element) => {
    const myarrtemp = $(element).attr('data-tooltip')
    console.log(myarrtemp)
  })
})
