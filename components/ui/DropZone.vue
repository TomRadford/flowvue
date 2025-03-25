<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{ fileSelected: [file: File] }>();

const isDraggingOver = ref(false);

const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement)?.files?.[0];

  if (file) {
    emit("fileSelected", file);
  }
};
</script>

<template>
  <div
    class="w-full h-[350px] hover:cursor-pointer relative flex flex-col items-center justify-center rounded-3xl bg-white/4 hover:bg-white/10 transition-colors outline-dashed outline-2 outline-white/30"
    :class="{ 'bg-white/10': isDraggingOver }"
  >
    <div class="flex flex-col items-center gap-3.5">
      <img
        src="/icons/upload.svg"
        class="w-[60px] h-[60px]"
        alt="Upload icon"
      />
      <p class="text-sm font-light">Upload a CSV of your bank statement</p>
    </div>
    <input
      accept=".csv"
      type="file"
      class="absolute inset-0 opacity-0 cursor-pointer"
      @change="handleFileUpload"
      @dragover="
        () => {
          isDraggingOver = true;
        }
      "
      @dragleave="
        () => {
          isDraggingOver = false;
        }
      "
    />
  </div>
</template>
