<template>

<MTop />
<main class="content">

  <!--基本信息-->
  <header class="content-hd">
    <section class="title">
      <div class="name">
        <h1>{{baseInfo.name}}</h1>
      </div>
      <div class="job">
        <h2>{{baseInfo.job}}</h2>
      </div>
    </section>
    <section class="info">
      <ul>
        <li v-for="item in baseInfo.infoLeft" :key="item">{{item}}</li>
      </ul>
    </section>
    <section class="contact">
      <ul>
        <li v-for="item in baseInfo.infoRight" :key="item.title">
          <a :href="item.href">
            <span class="contact-link">{{item.title}}</span>
            <span class="iconfont">
              <component  :is="item.svg"></component >
            </span>
          </a>
        </li>
      </ul>
    </section>
  </header>

  <div class="content-bd">

    <div class="content-left">
      <section class="practice">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">当前工作</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <!--经历:当前工作-->
          <div class="item" v-for="item in nowWorkInfo" :key="item.time">
            <header class="item-hd">
              <h3 class="item-name">{{item.name}}</h3>
              <span class="item-time">{{item.time}}</span>
            </header>
            <div class="item-bd">
              <MInfo v-for="info in item.infoList" :key="info.toString()" :info="info"></MInfo>
            </div>
          </div>

        </div>
      </section>
    </div>

    <div class="content-right">
      <section class="practice">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">以往工作</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <!--经历:以往工作-->
          <div class="item" v-for="item in historyWorks" :key="item.time">
            <header class="item-hd">
              <h3 class="item-name">{{item.name}}</h3>
              <span class="item-time">{{item.time}}</span>
            </header>
            <div class="item-bd">
              <MInfo v-for="info in item.infoList" :key="info.toString()" :info="info"></MInfo>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="skill">
      <header class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">掌握技能</h2>
        <span class="section-title-r"></span>
      </header>
      <div class="content-left">
        <section class="section-bd">
          <div class="item" v-for="skill in skillObj.left" :key="skill.name">
            <header class="item-hd">
              <span class="item-time">{{skill.name}}</span>
            </header>
            <div class="item-bd">
              <MInfo :info="skill.infoList"></MInfo>
            </div>
          </div>
        </section>
      </div>
      <div class="content-right">
        <section class="section-bd">
          <div class="item" v-for="skill in skillObj.right" :key="skill.name">
            <header class="item-hd">
              <span class="item-time">{{skill.name}}</span>
            </header>
            <div class="item-bd">
              <MInfo :info="skill.infoList"></MInfo>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</main>

<MFooter />
</template>

<script>
import MTop from './components/MTop.vue'
import MFooter from './components/MFooter.vue'
import MInfo from './components/MInfo.vue'
import { defineComponent, reactive } from 'vue'
import mailSvg from './assets/svg/mail.svg'
import telSvg from './assets/svg/tel.svg'
export default defineComponent({
  components:{
    MTop,
    MFooter,
    MInfo,
    mailSvg,
    telSvg,
  },
  setup(){
    const baseInfo = reactive({
      name: '孟凡兴',
      job: 'Web前端开发工程师',
      infoLeft: [
        '男 / 1990.08',
        '中国地质大学(北京) · 海洋科学',
        '本科 / 2013年毕业'
      ],
      infoRight:[
        {
          title: '13682194009@163.com',
          href:'mailto:13682194009@163.com',
          svg: 'mailSvg'
        },
        {
          title: '13682194009',
          href:'tel:13682194009',
          svg: 'telSvg'
        },
      ]
    })
    const nowWorkInfo = reactive([{
      name:'天津星云时代科技有限公司',
      time:'2018.6 - 至今',
      infoList:[
        '前端开发工程师',
        '参与项目有公司官网、网页版直播(tcplayer)、后台管理系统×N、微信小程序×N、nodejs项目×N，具体如下：',
        [
          '微信小程序(公司主要项目)',
          [
            '负责开发环境的构建和优化,整体开发流程的优化、项目底层逻辑的编写、难点功能的预研和初稿实现。',
            '项目特色：',
            [
              '状态树：内置mp-vuex，api和vuex完全一致。',
              '使用iconfont字体和svg替换大部分图标,大幅减轻小程序主包大小。',
              '公用组件由构建工具分发到有需要的分包,减轻小程序主包大小。'
            ],
          ],
          '后台管理系统',
          [
            '负责项目的搭建和整体流程研发。统一使用的eslint作为代码格式规范，使用git提供钩子pre-commit做上传前代码规范检查。项目不是同一时期构建所以技术栈会有差异。',
            '现存技术栈有以下几种：',
            [
              'Webpack4+Vue2(全家桶)+sass',
              '@vue/cli+Vue2(全家桶)+sass',
              'Vite+Vue3(全家桶)+sass',
            ],
          ],
          '资源上传服务(图床)',
          [
            '技术栈：egg.js + @vue/cli + Vue2',
            '无数据库支持，直接使用nodejs和文件交互，支持增、改、查，为了安全不进行删除支持。',
          ],
          '日志收集系统',
          [
            '技术栈：deno + oak + vite + Vue3(全家桶) + sass + mongodb',
            '暂未使用，需要等待deno打包成单个可执行文件稳定后投入使用。api采用restfull设计风格。',
          ],
          '绘图微服务',
          [
            '技术栈：egg.js + canvas + @antv/f2 + mongodb',
            '起因是小程序canvas绘制分享图不理想，后扩展成了更加通用的绘图微服务，支持简单绘图get传参和复杂绘图post传参。',
          ],
          'Wkhtmltopdf项目',
          [
            '技术栈：html + js + css + Wkhtmltopdf',
            '起因是公司有动态制作pdf需求，基于绘制pdf将会交由前端组小伙伴，于是采用了这套技术栈。',
          ],
          '公司内部工具集',
          [
            '技术栈：deno + typescript',
            '包含下列功能：',
            [
              'Svg生成iconfont样式文件，替代线上iconfont带来的版本维护困难问题。',
              '创建新页面/组件。支持同时创建多个页面/组件。',
              'Mock数据。本地起一个服务器，支持指定接口模拟回包数据和代理线上服务。',
              '小程序代码构建。替代nodejs的工具gulp，作为小程序本地的开发环境。开发时编译速度提升了N倍(N: 同类型文件个数)，做到了真正的最小化改动。(ps:内部公测阶段，等待deno打包成单个可执行文件稳定后gitlab中ci/cd 投入使用)'
            ]
          ],
        ]
      ]
    }])
    const historyWorks = reactive([
      {
        name:'网路(天津)电子商务有限公司',
        time:'2017.06 - 2018.05',
        infoList:[
          '前端工程师',
          [
            '工作内容:',
            [
              '官网',
              [
                '经过两次重构，均使用html+css+js/jquery'
              ],
              '微信公众号网站',
              [
                '使用Vue2+高德地图API编写的微信公众号叫车网页应用。',
                '后来因为服务器重点放在了app,接口不在对其兼容项目终止。'
              ],
              '后端接口',
              [
                '会被分配一些简单的接口，使用Thinkphp编写。'
              ]
            ],
            '涉及技术栈:',
            [
              'bootstrap',
              'jquery',
              'Vue2',
              'webpack',
              'Thinkphp3.2',
              'Thinkphp5.0',
              '高德地图API',
              'Echarts'
            ]
          ],
        ]
      },
      {
        name:'天津乐园集团',
        time:'2016.04 - 2017.05',
        infoList:[
          'web前端',
          '期间出现过集团解散，从集团办公变成到医院办公和过年前解聘和过年后返聘。',
          [
            '工作内容:',
            [
              '根据策划要求按照美工设计psd效果图，写出织梦cms整站前端模板，如有特殊要求会对织梦进行简单的二次开发。',
              '有活动会写一些单独的专题页。'
            ],
            '涉及技术栈:',
            [
              'html',
              'js/jquery',
              'css',
              'php/织梦cms'
            ]
          ],
        ]
      }
    ])
    const skillList = [
      {
        name:'Web',
        infoList:[
          '熟悉JS基础语法和知识',
          '掌握最新的ES6+语法',
          '有TypeScript研发经验',
          '掌握CSS以及预编译语言SCSS',
        ]
      },
      {
        name:'Webpack',
        infoList:[
          '熟知Webpack原理',
          '有过构建新项目和老项目webpack2升级到webpack4的经验'
        ]
      },
      {
        name:'Nodejs',
        infoList:[
          '掌握Nodejs常用api',
          '使用eggjs开发过多个服务',
        ]
      },
      {
        name:'Deno',
        infoList:[
          '掌握Deno常用api',
          '使用Deno+oak开发过服务端',
          '使用Deno作为脚本开发过内部工具集'
        ]
      },
      {
        name:'Gulp',
        infoList:[
          '熟悉gulp的api',
          '使用gulp编写脚本作为微信小程序开发和打包'
        ]
      },
      {
        name:'微信小程序',
        infoList:[
          '公司的主要产品',
          '熟悉微信小程序的api',
          '有分包研发经验',
          '部分小程序结构和流程由我设计完成'
        ]
      },
      {
        name:'git',
        infoList:[
          '公司由gitLab作为仓库',
          '熟练掌握git工作流'
        ]
      },
      {
        name:'Vite',
        infoList:[
          '内部项目在Vite1.x版本时开始使用',
          '公司最新web项目均使用vite2.x作为构建工具'
        ]
      },
      {
        name: 'Vue2/3',
        infoList:[
          '熟练使用vue2/3及其全家桶',
          '使用过elementUI和Ant-design-vue两个框架'
        ]
      },
      {
        name:'数据库',
        infoList:[
          '使用过mysql，写过简单的增删改查',
          '使用过mongodb, 公司nodejs写的服务均为mongodb'
        ]
      }
    ]
    const skillObj = {
      left:[],
      right:[]
    }
    const splitIndex = 5
    for(let i = 0; i < skillList.length; i++){
      if(i < splitIndex){
        skillObj.left.push(skillList[i]) 
      }else{
        skillObj.right.push(skillList[i]) 
      }
    }

    return {
      baseInfo,
      nowWorkInfo,
      historyWorks,
      skillObj,
    }
  }
})
</script>
