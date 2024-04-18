<script setup lang="ts">
import { saveToken } from '@/utils';
import { useRouter } from 'vue-router';
import { oauthLogin } from '@/utils/googleAuth';
import { useStore } from '@/store';
const router = useRouter();

const store = useStore();

onMounted(async () => {
  const {
    data: { token, isNew },
    err,
  } = await oauthLogin();
  if (!err) {
    await saveToken(token, true);
    store.getUserInfo();
    router.push('/');
  }
});
</script>

<template>
  <div />
</template>
