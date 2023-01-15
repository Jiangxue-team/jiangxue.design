<template>
  <div class="test-layout">
    <header>
      <TestHeader />
    </header>
    <main>
      <slot />
    </main>
    <bottom>
      <TestBottom />
    </bottom>
  </div>
</template>

<script>
import TestHeader from "./common/header";
import TestBottom from "./common/bottom";

export default {
  name: "TestLayout",
  components: {
    TestBottom,
    TestHeader,
  }
}
</script>
