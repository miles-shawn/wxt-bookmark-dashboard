<script setup lang="ts">
// TODO:

const links = reactive([
  {
    label: 'Bookmarks',
    to: '/',
  },
  {
    label: 'Options',
    to: '/options',
  },
  {
    label: 'Readme',
    to: '/readme',
  },
]);
</script>

<template>
  <div>
    <div v-for="(link, idx) of links" :key="idx">
      <RouterLink :to="link.to">
        {{ link.label }}
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
