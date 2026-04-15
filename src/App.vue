<template>
  <div class="noise-overlay bg-grid bg-mesh min-h-screen">
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.page-enter-active {
  animation: fade-in-up 0.4s ease-out;
}
.page-leave-active {
  animation: fade-in 0.2s ease-in reverse;
}
</style>
