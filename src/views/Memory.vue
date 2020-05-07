<template>
  <div class="memory">

    <div class="nav-mem">
        <a href="#article"><font color="white"><h3>{{ $t("memory.article") }}</h3></font></a>
        <a href="#videos"><font color="white"><h3>{{ $t("memory.video") }}</h3></font></a>
        <a href="#photos"><font color="white"><h3>{{ $t("memory.photo") }}</h3></font></a>       
    </div>

    <br />
    <h1 id="article" style="text-align:center">{{ $t("memory.article") }}</h1>
    <div class="memory-item">
        <MemoryItem
          title="Our Livehouse under the Coronavirus"
          snapshot="//我“失”业了//在停业两个月的劲livehouse 我们进行了一次谈话"
          link="https://mp.weixin.qq.com/s/CJdyLB5JQsRtRmmfsbOo6A"
          picSrc="mem-photo/m1.jpg"
        />
     
      
        <MemoryItem
          title="Interview with Jin during the Coronavirus"
          snapshot="This is the second memory"
          link="https://mp.weixin.qq.com/s/lGVOAVWebDZAcIHJRR3_IA"
          picSrc="mem-photo/m2.jpg"
        />
     
        <MemoryItem
          title="Third memory"
          snapshot="This is the third memory"
          link="https://www.google.com"
          picSrc="logo.png"
        />

        <MemoryItem
          title="Third memory"
          snapshot="This is the third memory"
          link="https://www.google.com"
          picSrc="logo.png"
        />
    </div>

    <br />
    <h1 style="text-align:center; padding-top:1em">{{ $t("memory.video") }}</h1>
    <div id="videos">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
                <p>{{ $t("video.v2") }}</p>
                <video controls>
                    <source src="../assets/mem-video/video2.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <p>Dance Battle 2019 at Jin</p>
                <video controls>
                    <source src="../assets/mem-video/2019dancebattle.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <p>Swamp 2019 at Jin</p>
                <video controls>
                    <source src="../assets/mem-video/zhaozhe.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <p>Xu Zhenzhen 2019 at Jin</p>
                <video controls>
                    <source src="../assets/mem-video/2019xzz.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>

    <br />
    <h1 style="text-align:center">{{ $t("memory.photo") }}</h1>
    <div id="photos">
        <img class="image" v-for="(image, i) in images" :src="image" @click="index = i" :key="i" />
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>
  


    <br><br>
    <TailInfo />
  </div>

</template>

<script>
// @ is an alias to /src
import MemoryItem from "@/components/MemoryItem.vue";
import TailInfo from "@/components/TailInfo.vue";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
  name: "Memory",
  components: {
    MemoryItem,
    TailInfo,
    Swiper,
    SwiperSlide,
    VueGallerySlideshow
  },
  methods: {
    onClick(i) {
      this.index = i;
    } 
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },

      images: [
          require(`../assets/mem-photo/p3.jpeg`),
          require(`../assets/mem-photo/p2.jpeg`),
          require(`../assets/mem-photo/p1.jpeg`),
          require(`../assets/mem-photo/p4.jpeg`),
          
      ],
      index: null
    }
  }
};
</script>

<style>

h3 {
  margin: 20px;
  display: inline; 
}

.nav-mem {
    margin-top: 2%;
    text-align: center;
}

video {
    width: 100%;
}

#videos {
    font-family: "Comic sans MS";
    margin-left: 10%;
    margin-right: 10%;
}

#photos {
    padding: 2em;
    display: flex;
    flex-direction: row;
}

.memory-item {
  display: flex;
  flex-wrap: wrap;
}
</style>