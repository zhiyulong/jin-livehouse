<template>
  <div class="event">

    <div class="nav-event">
        <a href="#upcoming-event"><font color="white"><h3>{{ $t("event.upcoming") }}</h3></font></a>
        <a href="#past-event"><font color="white"><h3>{{ $t("event.past") }}</h3></font></a>
    </div>

    <div class="open-mic">
        <p>Open Mic, Freestyle, Friends are Alway Here!</p><br />
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
                <video controls>
                    <source src="../assets/openmic/nowoman.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <video controls>
                    <source src="../assets/openmic/open9.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <video controls>
                    <source src="../assets/openmic/open8.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <video controls>
                    <source src="../assets/openmic/open4.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <video controls>
                    <source src="../assets/openmic/open6.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <video controls>
                    <source src="../assets/openmic/open3.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <video controls>
                    <source src="../assets/openmic/open1.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <swiper-slide>
                <video controls>
                    <source src="../assets/openmic/open2.mp4" type="video/mp4">
                </video>
            </swiper-slide>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>

    <br /><br />
    <h1 style="text-align:center" id="upcoming-event">{{ $t("event.upcoming") }}</h1>
    <div class="upcoming-event">
        <div class="element">
            <OneEvent title="deca joins"
                      snapshot="2020/09/02"
                      link="https://mp.weixin.qq.com/s/VrQu-lfaQf0i7znVKBrneA"
                      picSrc="event/2020deca.jpeg" />
        </div>

        <div class="element">
            <OneEvent title="Long Shen Dao"
                      snapshot="TBD"
                      link="https://mp.weixin.qq.com/s/DJwji8fZ3d-k9SOlG25P9g"
                      picSrc="event/longshendao.jpg" />
        </div>
    </div>

    <br /><br />
    <h1 style="text-align:center" id="past-event">{{ $t("event.past") }}</h1>
    <div class="past-event">
        <div class="element">
            <OneEvent title="Hip-Hop Open Mic"
                      snapshot="2020/04/29"
                      link="https://mp.weixin.qq.com/s/CtYao_W65BOVh9PcIC5u6g"
                      picSrc="event/2020-05openmic.jpg" />
        </div>

        <div class="element">
            <OneEvent title="My Bro Sunday"
                      snapshot="2020/03/06"
                      link="https://mp.weixin.qq.com/s/HW4ITQuywOtq5EY7BZTGLA"
                      picSrc="event/mybrosunday.jpg" />
        </div>

        <div class="element">
            <OneEvent title="Everything is New"
                      snapshot="2020/01/17"
                      link="https://mp.weixin.qq.com/s/RiWmNmTXwV_m5RSinkKf4A"
                      picSrc="event/20200117.jpeg" />
        </div>

        <div class="element">
            <OneEvent title="New Year Night"
                      snapshot="2019/12/31"
                      link="https://mp.weixin.qq.com/s/9c2Ava7eM5R-5DBBO14Lvg"
                      picSrc="event/2019newyear.jpg" />
        </div>

        <div class="element">
            <OneEvent title="Dancing Party"
                      snapshot="2019/12/24"
                      link="https://mp.weixin.qq.com/s/bx25X8bvHXktXEaWjqwjFQ"
                      picSrc="event/dancing.jpg" />
        </div>

        <div class="element">
            <OneEvent title="Dancing Party"
                      snapshot="2019/12/15"
                      link="https://mp.weixin.qq.com/s/VtIa4GViyH38Y18Jv1oT3g"
                      picSrc="event/zhaoze.jpg" />
        </div>

        <div class="element">
            <OneEvent title="Sleeping Party"
                      snapshot="2019/10/26"
                      link="https://mp.weixin.qq.com/s/KmgXP3YJzXvAntM8yBa_Uw"
                      picSrc="event/shuiyi.jpg" />
        </div>
    </div>

    <br><br>
    <TailInfo />
  </div>

</template>

<script>
// @ is an alias to /src
import OneEvent from "@/components/OneEvent.vue";
import TailInfo from "@/components/TailInfo.vue";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: "Event",
  components: {
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

<style scoped>

h3 {
  margin: 20px;
  display: inline; 
}

video {
    margin-left:25%;
    width:50%;
}

.open-mic{
    padding-top: 3%;
    font-size: large;
    font-family: "Comic sans MS";
}

.element {
    width: calc(100% / 4);
    padding: 1em;
}

.nav-event {
    margin-top: 5%;
    text-align: center;
}

.upcoming-event {
  display: flex;
  flex-wrap: wrap;
}

.past-event {
  display: flex;
  flex-wrap: wrap;
}

</style>