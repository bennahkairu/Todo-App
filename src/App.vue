<script setup>
import MainLayout from "./components/Layout/MainLayout.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div class="min-h-screen transition-colors bg-white dark:bg-blue-900">
    <MainLayout>
      <HomeView />
    </MainLayout>
  </div>
</template>
