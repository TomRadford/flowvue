<script setup lang="ts">
defineEmits<{ click: (payload: MouseEvent) => void }>();
defineProps<{
  label: string;
}>();
</script>

<template>
  <button
    class="bg-black/90 hover:cursor-pointer rounded-lg py-3 px-5 border-1 border-aqua/20 hover:border-aqua/40 transition-[border-color]"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
