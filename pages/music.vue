<template>
  <div>
    <audio
      id="myaudi"
      src="https://drive.google.com/uc?export=download&id=1zdkZRPx4Tq3XZ2oy17dZmWDG3dJaj0jk"
      controls
    />
  </div>
</template>

<script>
import cheerio from 'cheerio'
export default {
  async asyncData ({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    return { ip }
  },
  data () {
    return {
      mygogoro: '',
      table_tr: [],
      resilt: [],
      url: 'https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr'
    }
  },
  created () {
  },
  async mounted () {
    this.fetchUrl()
  },
  methods: {
    fetchUrl () {
      this.$axios
        .get('https://cors-anywhere.herokuapp.com/https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr')
        .then(res => {
          const $ = cheerio.load(res.data) // PolqHc sd-ph
          $('.WYuW0e ').each((index, element) => {
            // 將取得的標題與ID資料用二維陣列方式存至playlist
            const myarrtemp = $(element).attr('data-id')
            // https://drive.google.com/uc?export=download&id= (後面寫ID)
            this.resilt.push(myarrtemp)
          })
        })
    }
  }
}
</script>

<style scoped>
.container
  {margin-top: 30px}
.container h1 {
  text-align: center;
}
.container h2 {
  text-align: center;
  color: white;
  padding-top: 15%;
}
.swiper {
  height: 360px;
}
swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
