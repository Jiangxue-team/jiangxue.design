<template>
  <nav class="navbar fixed-bottom navbar-expand-sm cu-background_more">
    <div class="mx-4 w-100" style="display: block">
<!--      移动端标题-->
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarCollapse">
        <ul class="navbar-nav w-100" style="display: block;">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 w-100 cu-w-100" v-if="equalQuery">
            <div class="col mx-4 cu-mx-4" v-for="movie in equalQuery.slice(0, 5)" :key="movie.id">
              <div class="shadow-sm pe-md-5 cu-more_back" style="background: red;display: contents;">
                <svg class="bd-placeholder-img card-img-top cu-more_back" :style="{'background-image': `url(${movie.image})`,'background-position':'center', 'background-repeat':'no-repeat'}" width="100%" height="230" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>
                <div class="card-body w-100 my-3">
                  <p class="card-text">{{ movie.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </ul>
        <div class="-flex align-items-center col-1 cu-more">
          <img src="/show-more.svg" alt="Jiangxue Design" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// 使用 useAsyncData 函数发起异步请求
const { data: equalQuery } = await useAsyncData('equal', () => {
  // 返回 /more 目录下的数据，也可以（.where({ director: 'Hayao Miyazaki' }) 来进行过滤）
  return queryContent('more/').find()
})
</script>
