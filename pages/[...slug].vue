<template>
  <div class="cu-banner d-flex align-items-center justify-content-center">
    <swiper class="mySwiper">
      <swiper-slide
        v-for="movie in equalQueryBanner.slice(0, 5)"
        :key="movie.id"
      >
        <div class="row h-100 mx-5">
          <div class="col-2 cu-swiper_info my-auto">
            <h1>{{ movie.title }}</h1>
            <p>{{ movie.description }}</p>
            <h2>Client</h2>
            <p>{{ movie.Client }}</p>
            <p2>Art Director</p2>
            <p>{{ movie.ArtDirector }}</p>
            <h2>Designer</h2>
            <p>{{ movie.Designer }}</p>
            <h2>Producer</h2>
            <p>{{ movie.Producer }}</p>
            <h2>{{ movie.state }}</h2>
          </div>
          <div class="col-8 cu-banner_img_main">
            <div
              style="
                display: block;
                height: 100%;
                width: 100%;
                background-size: contain;
              "
              :style="{
                'background-image': `url(${movie.image})`,
                'background-position': 'center',
                'background-repeat': 'no-repeat',
              }"
            ></div>
          </div>
          <div class="cu-banner_page_num d-flex">
            <p>{{ movie.id }}</p>
            <span>/ 7</span>
          </div>
          <div class="cu-banner_page_font d-flex"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  // 使用 useAsyncData 函数发起异步请求
  const { data: equalQueryBanner } = await useAsyncData("equal1", () => {
    // 返回数据，也可以（.where({ director: 'Hayao Miyazaki' }) 来进行过滤）
    return queryContent("banner/").find();
  });
</script>
