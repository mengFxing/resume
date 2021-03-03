<template>
<p class="last-modified">最后更新于{{buildTime}}</p>
<a class="download-pdf" href="https://mengfxing.github.io/resume/resume.pdf">下载 PDF</a>
</template>

<script setup>
import dayjs from 'dayjs'
const buildTime = dayjs(VITE_APP_TIME).format('YYYY-MM-DD')
</script>