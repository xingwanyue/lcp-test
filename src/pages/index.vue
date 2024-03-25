<script lang="ts" setup>
// definePageMeta({
//   layout: false,
// });
// onMounted(() => {
//   const token = localStorage.getItem('det_token');
//   if (token) {
//     window.location.href = '/app';
//   } else {
//     window.location.href = '/home';
//   }
// });

const localePath = useLocalePath();
</script>
<template>
  <NuxtLink :to="localePath('home')">Go Home</NuxtLink>
</template>
