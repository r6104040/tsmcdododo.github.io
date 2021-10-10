<template>
  <div>
    <audio
      id="myaudi"
      :src="tempSRT"
      controls
    />
    <el-select
      v-model="myselectdada"
      placeholder="選你的音樂"
      @change="searccc()"
    >
      <el-option
        v-for="item in totalList"
        :key="item.id"
        :label="item.name"
        :value="item.url"
      />
    </el-select>
    <el-button @click="getmusicAPI()">
      刷新
    </el-button>
    <div>
      現有歌單(ㄏ)
    </div>
    <div
      v-for="(mpdata, index) of totalList"
      :key="index"
    >
      <p>{{ index+1 }} . {{ mpdata.name }} </p>
    </div>
  </div>
</template>

<script>
import cheerio from 'cheerio'
export default {
  data () {
    return {
      myselectdada: '',
      localdata: [],
      listArr: [],
      listName: [],
      totalList: [],
      tempSRT: ''
    }
  },
  mounted () {
    this.getmusicAPI()
  },
  methods: {
    importAll (r) {
      r.keys().forEach(key => (this.localdata.push({ pathShort: key.replaceAll('./', '') })))
      // r.keys().forEach(key => (this.localdata.push({ pathLong: r(key), pathShort: key.replaceAll("./","") })));
    },
    searccc () {
      this.tempSRT = 'https://drive.google.com/uc?export=download&id=' + this.myselectdada
      //  this.mysrc = require(`../static/images/${this.myselectdada}`) 本地用
      // mysrc: require('../static/images/sunsun.mp4'),
    },
    async getmusicAPI () {
      this.totalList = []
      this.listArr = []
      this.listName = []
      this.$axios
        .get('https://cors-anywhere.herokuapp.com/https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr')
        .then(res => {
          const $ = cheerio.load(res.data) // PolqHc sd-ph
          // 找到URL
          $('.WYuW0e ').each((index, element) => {
            const myarrtemp = $(element).attr('data-id')
            this.listArr.push(myarrtemp)
          })
          // 找到音樂名稱
          $('.Q5txwe ').each((index, element) => {
            const mynametemp = $(element).attr('data-tooltip')
            this.listName.push(mynametemp)
          })
          let i = 0
          while (i < this.listName.length) {
            this.totalList.push({ name: this.listName[i], url: this.listArr[i] })
            i++
          }
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
</style>
