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
    router.push('/');
  }
});
</script>

<template>
  <div />
</template>
