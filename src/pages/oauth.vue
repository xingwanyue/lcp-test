<script setup lang="ts">
import { saveToken } from '@/utils';
import { oauthLogin } from '@/utils/googleAuth';
import { useStore } from '@/store';

const store = useStore();

onMounted(async () => {
  const {
    data: { token, isNew },
    err,
  } = await oauthLogin();
  if (!err) {
    await saveToken(token, true);
    store.dispatch('app/getUserInfo');
  }
});
</script>

<template>
  <div />
</template>
