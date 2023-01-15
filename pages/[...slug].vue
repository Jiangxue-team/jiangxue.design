<template>
  <swiper
      :pagination="{type: 'fraction',}"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide>
<!--
      <div class="row h-100 mx-5">
        <div class="col-4 cu-swiper_info my-auto" style="border: 1px solid red">
            <h1>江雪非营利网络报告（内刊）。</h1>
            <p>以项目的工程计划作为封面，完善了以项目为核心的技术发展体系的设计形象。</p>
            <h2>Client</h2>
            <p>江雪非营利网络</p>
            <p2>Art Director</p2>
            <p>
              水清 一色
            </p>
            <h2>Designer</h2>
            <p>清律、清铭酒</p>
            <h2>Producer</h2>
            <p>-</p>
        </div>
        <div class="col-8" style="border: 1px solid red">8</div>
      </div>
-->
    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
