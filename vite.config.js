import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import findChrome from 'chrome-finder'
// https://vitejs.dev/config/
export default ({ command,mode }) =>{
  return defineConfig({
    plugins: [vue(),svgLoader()],
    define:{
      VITE_APP_TIME: Date.now()
    },
    build:{
      outDir:'docs'
    }
  })
}
