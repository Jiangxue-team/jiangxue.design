<template>
  <nav class="navbar fixed-bottom navbar-expand-sm">
    <div class="container-fluid">
<!--      移动端标题-->
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarCollapse" style="">
        <ul class="navbar-nav">
          <div class="row h-100 mx-5">
            <NuxtExampleLayout example="queries/where" repo="nuxt/content">
              <main>
                <section>
                  <ul v-if="equalQuery">
                    <li v-for="movie in equalQuery" :key="movie.id">
                      {{ movie.title }}
                    </li>
                  </ul>
                </section>
              </main>
            </NuxtExampleLayout>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

// 使用 useAsyncData 函数发起异步请求
const { data: equalQuery } = await useAsyncData('equal', () => {
  // 返回数据，也可以（.where({ director: 'Hayao Miyazaki' }) 来进行过滤）
  return queryContent('/').find()
})
</script>

<style scoped>

</style>