<script setup lang="ts">
// TODO:
browser.runtime.onMessage.addListener((message) => {
  alert(message);
});
</script>

<template>
  <div text="base xl:xl" prose="~ gray dark:invert" font="[Lato,sans-serif]">
    <RouterView />
  </div>
</template>

<style scoped></style>
