<template>
  <div>
    <audio id="myaudi" :src="mysrc" controls></audio>
    <el-select v-model="myselectdada" placeholder="選你的音樂" @change="searccc()" >
    <el-option
      v-for="item in localdata"
      :key="item.id"
      :label="item.pathShort"
      :value="item.pathShort"
      >
    </el-option>
  </el-select>
  <div>
   現有歌單(ㄏ)

  </div>
  <div v-for='(mpdata, index) of localdata' :key="index" >
       <p>{{index+1 }} . {{ mpdata.pathShort}} </p>
   </div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
          myselectdada: '',
          localdata: [],
          mysrc: require(`../static/images/sunsun.mp4`)
        }
    },
    mounted() {
    this.importAll(require.context('../static/images/', true, /\.(mp4)$/));// png|svg|jpg|
    const gfg = document.getElementById("Test_Audio"); 

    

    },
    methods: {
      importAll(r) {
      r.keys().forEach(key => (this.localdata.push({ pathShort: key.replaceAll("./","") })));
      // r.keys().forEach(key => (this.localdata.push({ pathLong: r(key), pathShort: key.replaceAll("./","") })));
      },
      searccc () {
        this.mysrc = require(`../static/images/${this.myselectdada}`)

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
