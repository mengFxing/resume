import { spawnSync } from 'child_process'
import path from 'path'
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import findChrome from 'chrome-finder'

let outputPath = './'
const buildPdf = ()=>{
  return {
    name:'buildPdf',
    closeBundle:()=>{
      const chromePath = findChrome();
      spawnSync(chromePath, ['--headless', '--disable-gpu', `--print-to-pdf=${path.resolve(outputPath, 'resume.pdf')}`,
        'https://mengfxing.github.io/resume/' // 这里注意改成你的在线简历的网站
      ]);
      
    }
  }
}

// https://vitejs.dev/config/
export default ({ command,mode }) =>{
  const {
    VITE_APP_PUBLIC_PATH,
  } = loadEnv(mode, process.cwd())

  const VITE_APP_IS_SERVE = command === 'serve' ? true : false;
  outputPath = VITE_APP_IS_SERVE ? './' : VITE_APP_PUBLIC_PATH
  return defineConfig({
    base: outputPath,
    plugins: [
      vue(),
      svgLoader(),
      // buildPdf(),
    ],
    define:{
      VITE_APP_TIME: Date.now()
    },
    build:{
      outDir:'docs'
    }
  })
}
