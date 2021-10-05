<template>
  <div>
    <CSlider />
  </div>
</template>

<script>

import CSlider from '../components/c-slider.vue';

export default {
    name: 'Index',
    components: {
      CSlider
    },
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
