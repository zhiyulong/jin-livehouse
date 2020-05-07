<template>
  <div class="home">
      
    <HomePage />

    <br><br>
    <swiper class="swiper" :options="swiperOption">
   
      <swiper-slide>
        <div class="events">
          <div class="upcoming-event1">
            <OneEvent 
                    title="deca joins"
                    snapshot="2020/09/02"
                    link="https://mp.weixin.qq.com/s/VrQu-lfaQf0i7znVKBrneA"
                    picSrc="event/2020deca.jpeg"
                />
          </div>
          <div class="upcoming-event2">
            <OneEvent
              title="Second Event"
              snapshot="This is the second event"
              link="https://www.google.com"
              picSrc="logo.png"
            />
          </div>
          <div class="upcoming-event3">
            <OneEvent
              title="third Event"
              snapshot="This is the second event"
              link="https://www.google.com"
              picSrc="logo.png"
            />
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="events">
            <div class="upcoming-event1">
            <OneEvent
                title="4 Event"
                snapshot="This is the second event"
                link="https://mp.weixin.qq.com/s?__biz=MzI3NDY1OTAyMw==&mid=2247484148&idx=1&sn=fa391659c67fb7d0061d8e90e132be4f&chksm=eb11e154dc666842bcb719d510ec936f35b8471d697c6249b21a78efe8e4e4629a335df9862e&token=397261265&lang=zh_CN#rd"
                picSrc="logo.png"
            />
            </div>
            <div class="upcoming-event2">
            <OneEvent
                title="5 Event"
                snapshot="This is the second event"
                link="https://www.google.com"
                picSrc="logo.png"
            />
            </div>
            <div class="upcoming-event3">
            <OneEvent
                title="6 Event"
                snapshot="This is the second event"
                link="https://www.google.com"
                picSrc="logo.png"
            />
            </div>
        </div>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <br><br>
    <TailInfo />
  </div>

</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";
import OneEvent from "@/components/OneEvent.vue";
import TailInfo from "@/components/TailInfo.vue";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "Home",
  components: {
    HomePage,
    OneEvent,
    TailInfo,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
};
</script>

<style>
.events {
  width: 80%;
  margin: auto
}

.upcoming-event1 {
  /* float: left; */
  width: calc(100% / 3);
  float: left;
}

.upcoming-event2 {
  /* float: left;   */
  width: calc(100% / 3);
  float: left;
}

.upcoming-event3 {
  /* float: left; */
  width: calc(100% / 3);
  float: left;
}
</style>

