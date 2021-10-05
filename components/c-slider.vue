<template>
    <div class="container">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for='date of date' :key="date.class" >
                <p>{{date.text}}</p>
                <img  :src="getImgUrl(date.src)" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
export default {
    name: 'swiper-example-navigation',
    title: 'Navigation',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            date: [
            {class: '1',  src: '1.jpg', text : 'Title 1'},
            {class: '2', src: '1.jpg',  text : 'Title 2'},
            {class: '3', src: '1.jpg',  text : 'Title 3'}
            ],
            swiperOption: {
                spaceBetween: 30,
                effect: 'fade',
            }
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../static/images/' + pic)
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
