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
useHead({
  script: [{ src: 'https://accounts.google.com/gsi/client' }],
});
</script>
<template>
  <NuxtLink :to="localePath('home')">Go Home</NuxtLink>
  <div
    id="g_id_onload"
    data-client_id="1044858520955-9ua24gpj8m98avtbp030t6dp624fi689.apps.googleusercontent.com"
    data-login_uri="https://app.detpractice.com/weapp/api/common/login"
    data-auto_select
  ></div>
</template>
