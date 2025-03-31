<script setup lang="ts"></script>

<template>
  <NuxtRouteAnnouncer />
  <div class="bg-gradient-to-br from-black to-blue/50 relative min-h-screen pb-16">
    <div class="relative z-10">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
/* Font to be loaded by NuxtFonts */
div {
  font-family: Inter, sans-serif;
}
html {
  background-color: var(--color-black);
}
</style>
