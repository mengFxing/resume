import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import findChrome from 'chrome-finder'
// https://vitejs.dev/config/
export default ({ command,mode }) =>{
  const {
    VITE_APP_PUBLIC_PATH,
  } = loadEnv(mode, process.cwd())

  const VITE_APP_IS_SERVE = command === 'serve' ? true : false;
  return defineConfig({
    base: VITE_APP_IS_SERVE ? './' : VITE_APP_PUBLIC_PATH,
    plugins: [vue(),svgLoader()],
    define:{
      VITE_APP_TIME: Date.now()
    },
    build:{
      outDir:'docs'
    }
  })
}
