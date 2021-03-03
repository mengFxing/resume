<template>
<p class="last-modified">最后更新于{{buildTime}}</p>
<a class="download-pdf" href="http://resume.wuhaolin.cn/resume.pdf">下载 PDF</a>
</template>

<script setup>
import dayjs from 'dayjs'
const buildTime = dayjs(VITE_APP_TIME).format('YYYY-MM-DD')
</script>