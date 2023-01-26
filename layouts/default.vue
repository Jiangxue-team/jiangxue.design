<template>
  <div class="layout-container">
    <header>
      <LayoutHeader />
    </header>
    <main class="layout-main">
      <slot />
    </main>
    <footer class="layout-footer">
      <LayoutBottom />
    </footer>
  </div>
</template>

<script setup>
  import LayoutHeader from "./common/header";
  import LayoutBottom from "./common/bottom";
</script>
