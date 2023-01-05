<template>
  <span class="cursor-pointer">
    <span v-if="darkTheme">
      <img src="../../assets/images/sun.svg" alt="Set dark theme">
    </span>
    <span v-else>
      <img src="../../assets/images/moon.svg" alt="Set dark theme">
    </span>
  </span>
</template>

<script setup>
  defineProps({
    darkTheme: Boolean,
  })
</script>

<style lang="scss" scoped></style>
