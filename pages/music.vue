<template>
  <div>
    <audio
      src="https://derekqaq.github.io/music/%E4%BD%A0%E7%9A%84%E8%A1%8C%E6%9D%8E.mp3"
      autoplay
      controls
    />
    <iframe
      width="1520"
      height="581"
      src="https://www.youtube.com/embed/N9yS6lll1rk?list=RDN9yS6lll1rk"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>

export default {
  data () {
    return {
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
