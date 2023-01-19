<template>
  <div class="container-fluid cu-header">
    <nav class="navbar navbar-expand-xxl" aria-label="Offcanvas navbar large">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/logo.svg" alt="Jiangxue Design" />
        </a>
        <!--      面包屑-->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--      抽屉导航-->
        <div class="offcanvas offcanvas-end" tabindex="1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">
              <img src="/logo.svg" alt="Jiangxue Design" />
            </h5>
            <button type="button" class="btn-close btn-close-back" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <!--        链接-->
          <div class="offcanvas-body">
            <!--
              navbar-nav： 定义一个导航元素
              justify-content-end：将元素放到容器的末尾
              flex-grow-1：元素占用剩余空间
              pe-3：左右都增加 3px 的边距
              mx-5: 设置边距为 5px
            -->
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 mx-5">
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page" href="#">首页</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#">关于</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#">对话</a>
              </li>
              <li class="nav-item dropdown mx-2">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  作品
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" aria-current="page" href="#">对话</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" aria-current="page" href="#">话题</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" aria-current="page" href="#">联系</a>
              </li>
            </ul>
            <form class="d-flex mt-3 mt-lg-0" role="search">
              <button class="btn" type="submit">中文</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'test-header',
  mounted() {
    if (process.client) {
      import('bootstrap')
          .then(() => import('bootstrap'))
    }
  }
}
</script>
