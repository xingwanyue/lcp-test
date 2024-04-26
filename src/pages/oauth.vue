<script setup lang="ts">
import { saveToken, getStorage, saveStorage } from '@/utils';
import { useRouter } from 'vue-router';
import { oauthLogin } from '@/utils/googleAuth';
import { useStore } from '@/store';
import { sinupEvent } from '@/utils/gtag';

const router = useRouter();

const store = useStore();
definePageMeta({
  layout: 'noheaderfooter',
});
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
    const custom_url = getStorage('custom_url');
    saveStorage('custom_url', '');

    if (custom_url.startsWith('http')) {
      window.location.href = custom_url;
      return;
    }
    router.push(custom_url);
  }
});
</script>

<template>
  <div />
</template>
