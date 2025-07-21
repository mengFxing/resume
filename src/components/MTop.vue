<template>
  <p class="last-modified">
    {{ lang == "en" ? "Last updated on" : "最后更新于" }} {{ buildTime }}
  </p>
  <a
    class="download-pdf"
    :href="
      lang == 'en'
        ? 'https://mengfxing.github.io/resume/resume-en.pdf'
        : 'https://mengfxing.github.io/resume/resume.pdf'
    "
  >
    {{ lang == "en" ? "Download" : "下载" }} PDF</a
  >
</template>

<script setup>
import dayjs from "dayjs";
const buildTime = dayjs(VITE_APP_TIME).format("YYYY-MM-DD");
defineProps({
  lang: {
    type: String,
    default: "ch",
  },
});
</script>
