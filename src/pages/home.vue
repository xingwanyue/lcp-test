<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  {{ $t('test') }}
  <NuxtLink :to="localePath('home')">{{ $t('home') }}</NuxtLink>
</template>

<style lang="scss" scoped></style>
