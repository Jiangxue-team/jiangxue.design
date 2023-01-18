<template>
  <!-- 创建导航栏并固定底部，在屏幕宽度小于 navbar-expand-sm 576px 时将导航栏切换成折叠模式。-->
    <nav class="navbar fixed-bottom navbar-expand-lg cu-background_more" aria-label="Offcanvas navbar large">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/logo.svg" class="cu-nav_bottom_more" alt="Jiangxue Design" />
        </a>
        <!--  面包屑-->
        <button class="navbar-toggler" @click="toggleOffcanvas"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar3" aria-controls="offcanvasNavbar3">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--      抽屉导航-->
        <div class="offcanvas offcanvas-end" :class="offcanvasClass" tabindex="-1" id="offcanvasNavbar3" aria-labelledby="offcanvasNavbar3Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar3Label">
              <img src="/logo.svg" alt="Jiangxue Design" />
            </h5>
            <button type="button" class="btn-close btn-close-back" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <!--        链接-->
          <div class="offcanvas-body">
            <div class="w-100 cu-more_nav">
                <div class="navbar-collapse collapse" id="navbarCollapse">
                  <ul class="navbar-nav w-100" style="display: block;">
                    <div class="row mb-5 text-center row row-cols-md-5 cu-more_list">
                      <div class="cu-more">
                        <img src="https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202301160219670.png">
                        <p>天演舆情项目</p>
                      </div>
                      <div class="cu-more">
                        <img src="https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202301160219670.png">
                        <p>天演舆情项目</p>
                      </div>
                      <div class="cu-more">
                        <img src="https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202301160219670.png">
                        <p>天演舆情项目</p>
                      </div>
                      <div class="cu-more">
                        <img src="https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202301160219670.png">
                        <p>天演舆情项目</p>
                      </div>
                      <div class="cu-more">
                        <img src="https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202301160219670.png">
                        <p>天演舆情项目</p>
                      </div>
                    </div>
                    <!--
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
                    -->
                  </ul>
                  <div class="d-flex align-items-center col-1 cu-more_button">
                    <img src="/show-more.svg" alt="Jiangxue Design" />
                  </div>
                </div>
            </div>
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

<style scoped lang="scss">

</style>
