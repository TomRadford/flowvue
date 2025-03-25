<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import UploadIcon from "../icons/UploadIcon.vue";

const emit = defineEmits<{ fileSelected: [file: File] }>();

const isDraggingOver = ref(false);
const fileInput = useTemplateRef("file-input");

const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement)?.files?.[0];

  if (file) {
    emit("fileSelected", file);
    if (fileInput.value) {
      fileInput.value.value = "";
    }
  }
};
</script>

<template>
  <div
    class="w-full p-8 md:h-[350px] hover:cursor-pointer relative flex flex-col items-center justify-center rounded-3xl bg-white/4 hover:bg-white/10 transition-colors outline-dashed outline-2 outline-white/30"
    :class="{ 'bg-white/10': isDraggingOver }"
  >
    <div class="flex flex-col items-center gap-3.5">
      <UploadIcon />

      <p class="text-sm hidden sm:block font-light">
        {{ isDraggingOver ? "Drop" : "Upload" }} a CSV of your bank statement
      </p>
    </div>
    <input
      ref="file-input"
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
