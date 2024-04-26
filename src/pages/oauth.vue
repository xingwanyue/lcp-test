<script setup lang="ts">
import { saveToken } from '@/utils';
import { useRouter } from 'vue-router';
import { oauthLogin } from '@/utils/googleAuth';
import { useStore } from '@/store';
import { sinupEvent } from '@/utils/gtag';

const router = useRouter();

const store = useStore();

onMounted(async () => {
  const {
    data: { token, isNew },
    err,
  } = await oauthLogin();
  if (!err) {
    if (isNew) {
      sinupEvent();
    }
    await saveToken(token);
    store.getUserInfo();
    let custom_url = '/';

    const hashString = window.location.hash.substring(1);
    hashString.split('&').forEach((str) => {
      const [k, v] = str.split('=');
      if (k === 'custom_url' && v) {
        custom_url = decodeURIComponent(v);
      }
    });
    if (custom_url.startsWith('http')) {
      window.location.href = custom_url;
      return;
    }
    router.push('/');
  }
});
</script>

<template>
  <div />
</template>
