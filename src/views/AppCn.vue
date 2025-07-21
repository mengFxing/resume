<template>
  <MTop />
  <main class="content">
    <!--基本信息-->
    <header class="content-hd">
      <section class="title">
        <div class="name">
          <h1>{{ baseInfo.name }}</h1>
        </div>
        <div class="job">
          <h2>{{ baseInfo.job }}</h2>
        </div>
      </section>
      <section class="info">
        <ul>
          <li v-for="item in baseInfo.infoLeft" :key="item">{{ item }}</li>
        </ul>
      </section>
      <section class="contact">
        <ul>
          <li v-for="item in baseInfo.infoRight" :key="item.title">
            <a :href="item.href">
              <span class="contact-link">{{ item.title }}</span>
              <span class="iconfont">
                <component :is="item.svg"></component>
              </span>
            </a>
          </li>
        </ul>
      </section>
    </header>
    <div class="content-bd">
      <section>
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">个人优势</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd li-top-1">
          <div class="item">
            <header class="item-hd">
              <h3>{{ personalAdvantage.name }}</h3>
            </header>
            <div class="item-bd">
              <MInfo
                v-for="info in personalAdvantage.infoList"
                :key="info.toString()"
                :info="info"
              ></MInfo>
            </div>
          </div>
        </div>
      </section>
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
                <span class="item-name">{{ skill.name }}</span>
              </header>
              <div class="item-bd li-top-1">
                <MInfo :info="skill.infoList"></MInfo>
              </div>
            </div>
          </section>
        </div>
        <div class="content-right">
          <section class="section-bd">
            <div class="item" v-for="skill in skillObj.right" :key="skill.name">
              <header class="item-hd">
                <span class="item-name">{{ skill.name }}</span>
              </header>
              <div class="item-bd">
                <MInfo :info="skill.infoList"></MInfo>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div class="">
        <section class="practice">
          <header class="section-hd">
            <span class="section-title-l"></span>
            <h2 class="section-title">最近工作</h2>
            <span class="section-title-r"></span>
          </header>
          <div class="section-bd">
            <!--经历:当前工作-->
            <div class="item" v-for="item in nowWorkInfo" :key="item.time">
              <header class="item-hd">
                <h3 class="item-name">{{ item.name }}</h3>
                <span class="item-time">{{ item.time }}</span>
              </header>
              <div class="item-bd">
                <MInfo
                  v-for="info in item.infoList"
                  :key="info.toString()"
                  :info="info"
                ></MInfo>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="">
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
                <h3 class="item-name">{{ item.name }}</h3>
                <span class="item-time">{{ item.time }}</span>
              </header>
              <div class="item-bd">
                <MInfo
                  v-for="info in item.infoList"
                  :key="info.toString()"
                  :info="info"
                ></MInfo>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="skill">
        <!-- <header class="section-hd work2-title">
          <span class="section-title-l"></span>
          <h2 class="section-title">以往工作</h2>
          <span class="section-title-r"></span>
        </header> -->
        <div class="">
          <section class="section-bd">
            <div
              class="item"
              v-for="work in historyWorks2Obj.left"
              :key="work.name"
            >
              <header class="item-hd">
                <h3 class="item-name">{{ work.name }}</h3>
                <span class="item-time">{{ work.time }}</span>
              </header>
              <div class="item-bd">
                <MInfo :info="work.infoList"></MInfo>
              </div>
            </div>
          </section>
        </div>
        <div class="">
          <section class="section-bd">
            <div
              class="item"
              v-for="work in historyWorks2Obj.right"
              :key="work.name"
            >
              <header class="item-hd">
                <h3 class="item-name">{{ work.name }}</h3>
                <span class="item-time">{{ work.time }}</span>
              </header>
              <div class="item-bd">
                <MInfo :info="work.infoList"></MInfo>
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
import MTop from "#/components/MTop.vue";
import MFooter from "#/components/MFooter.vue";
import MInfo from "#/components/MInfo.vue";
import { defineComponent, reactive } from "vue";
import mailSvg from "#/assets/svg/mail.svg";
import telSvg from "#/assets/svg/tel.svg";
export default defineComponent({
  components: {
    MTop,
    MFooter,
    MInfo,
    mailSvg,
    telSvg,
  },
  setup() {
    const baseInfo = reactive({
      name: "孟凡兴",
      job: "前端开发工程师",
      infoLeft: [
        "男 / 1990.08",
        "中国地质大学（北京） · 海洋科学",
        "本科 / 统招全日制 / 2013年毕业",
      ],
      infoRight: [
        {
          title: "13682194009@163.com",
          href: "mailto:13682194009@163.com",
          svg: "mailSvg",
        },
        {
          title: "13682194009",
          href: "tel:13682194009",
          svg: "telSvg",
        },
      ],
    });
    const personalAdvantage = reactive({
      name: "您好！我是一名具有多年前端开发经验的专业工程师。在此，我向您简要介绍一下我的个人优势，希望能为贵公司带来价值。",
      infoList: [
        [
          "10年编程经验，6年带队经验。",
          "PC、H5、微信小程序，微信公众号等多端开发经验；项目包括toC、toB、服务化等方向，涉及社交、直播、出行、医疗大数据、devops、项目管理、财务管理、AI问答助手等产品。",
          "精通HTML、CSS、Javascript/Typescript、Vue2/3等前端技术，对前端工程化、模块化有深入了解；熟练使用Vite、Webpack、Gulp等构建工具，提高项目开发效率。",
          "具备一定的后端能力，编写过node服务、deno服务和php服务；使用deno编写的构建工具，使得开发热更新从原来的2s+缩减到10ms以内。",
          "改进前端架构，提出原子化编程，极大提高了代码的可复用性和扩展性；主导并参与多个重点、难点的技术攻坚工作和架构的改进；掌握前端性能优化、网络优化、SEO优化等技巧，提升用户体验。",
          "具备良好的项目管理能力，独当一面负责一个中大型项目的研发流程管理，拥有良好的产品思维，对产品进行业务抽象。",
        ],
      ],
    });
    const nowWorkInfo = reactive([
      {
        name: "儒虎智能科技（北京）有限公司",
        time: "2025.5 - 至今",
        infoList: [
          "前端架构师",
          "公司承接AI相关软件业务，目前承接的是某上市公司电话客服项目二期：由脑图配置智能客服修改成AI智能客服。",
          [
            "工作内容：",
            [
              "智能客服对话监控页面设计及编写，包含内容展示：监听对话、AI识别信息等，通话操作：开启监听，关闭监听，保存订单等。",
              "智能体管理平台功能开发，包含用户管理，角色管理，岗位管理等基础功能，以及核心智能体管理等功能",
            ],
          ],
        ],
      },
      {
        name: "能科科技股份有限公司",
        time: "2022.11 - 2024.10",
        infoList: [
          "资深前端工程师",
          "效能产品开发中心：前端负责人",
          "部门是基于BizDevOps的一站式研发效能平台，支撑软件交付全过程，内置可配置的研发模式最佳实践，全过程数字化、标准化、自动化，引领用户逐步接受最佳实践，提升研效，实现需求驱动的业务价值持续交付",
          "宣传官网：https://www.lexiao.biz",
          [
            "基础框架 Vue3 + Typescript + Vite + vue-router + Pinia + windicss + Less",
            "UI框架使用ant-design-vue@3.X的二次封装",
            "工作内容：",
            [
              "根据项目特点对前端架构改进，提升团队开发效率、支持业务需求的变化和新增。",
              "分析并解决前端的关键技术问题，提升项目性能，关注并处理兼容性问题。",
              "负责日常管理或项目中分配的重点开发任务。",
              "对相关业务进行抽象，封装前端组件，提高组件易用性、降低复用和扩展难度。",
              "和产品配合优化项目用户体验和交互操作流程。",
              "前端代码进行质量管控，进行代码评审（Code Review），对成员进行相应的技术指导。",
              "与团队成员分享经验和技术交流，营造良好的前端技术氛围，促进团队成长。",
            ],
            "项目贡献：",
            [
              "抽象常见页面，提出框架+原子化配置的组合来实现不同的页面。",
              "封装useXXX，针对不同场景进行抽象已简化或优化研发流程。",
              [
                "useFormBySchemes：支持各种复杂场景的灵活配置的一个表单解决方案",
                "useEvent：一个高效灵活的事件中心。",
                [
                  "可以作为各种场景的生命周期底层支持。",
                  "编写背景：市面上已有均为通知式，没有后续。实际操作中很多情况需要获取到反馈。",
                  "支持串行和并行两种与运行方式。",
                ],
                "useOpen：为各类打开关闭类型场景增加响应式数据和打开关闭的等生命周期",
                "useApi：使用useEvent为请求在不同的生命周期添加处理方法。",
                [
                  "开发者可以很容易的添加各种处理，以满足不同的请求。",
                  "得益于vue3的数据响应式，使得数据和渲染可以解耦。",
                  "useApi只关注数据和状态，配合不同的渲染组件可以适用于不同的场景。",
                ],
                "useTable：基于useApi针对表格场景进行的简化封装，使得表格数据渲染更加简便。",
                "useAuth： 针对项目内灵活多变的权限系统，进行的封装，增加作用隔离，确保不同场景下权限的互不影响。",
                "useCopy2Clipboard：复制文字到剪切板。",
                "useFull：适配三张常见全屏场景，屏幕全屏、窗口内全屏以及相对父级填充全屏。",
                "useRowSelect：针对选择框在表格分页时的不同需求做封装，使跨页面选中场景开发简化，只需关注数据。",
                "useLink：为dom布局添加连接线支持。支持@antv/x6 同款连接器（normal：简单连接器，smooth：平滑连接器，rounded：圆角连接器，arch：拱形连接器）",
              ],
              "对常用的组件（例如：表格-Table、对话框-Modal、操作项-Actions等）进行封装。",
            ],
          ],
        ],
      },
    ]);
    const historyWorks = reactive([
      {
        name: "零氪科技（天津）有限公司",
        time: "2021.4 - 2022.9",
        infoList: [
          "高级前端工程师",
          "大数据技术部: 研发转前端负责人",
          "部门主要业务是医疗大数据，数据从信息采集录入到最终为医疗相关人员使用等一系列处理，方便相关方进行筛查分析使用。",
          "工作内容主要是前端小伙伴相关需求的研发进行任务拆分，技术支持以及部分复杂需求研发。",
          [
            "基础架构 Vue3 + Less + @vue/cli + typescript + eslint",
            "UI框架使用的是ant-design-vue@2.X",
            "Echarts5",
            [
              "通过各种维度对数据进行形象的展示",
              "曾为弄清formatter而阅读过项目源码",
            ],
            "@antv/x6",
            [
              "需求中数据流类似流程图而选型使用",
              "曾带着好奇对其底层@antv/g进行过源码阅读，简单了解了其项目结构",
            ],
            "一些工具的封装",
            [
              "v-tooltip自定义指令",
              ["提供类似a-tooltip组件的能力", "内部对文字是否显示省略号做判断"],
              "v-throttle自定义指令",
              ["防止用户连击导致事件多次触发"],
              "handle-window页面离开关闭拦截",
              [
                "原理是利用window.onbeforeunload",
                "结合vue-router进行路由级别拦截",
              ],
              "fetchRequest",
              [
                "是模仿axios的封装对fetch进行了封装",
                "api设计参考了axios",
                "typescript编写，使用泛型，方便定义发包和回包结构类型",
                "不支持上传进度(fetch的原因)",
              ],
              "tree 组件封装",
              [
                "由于业务需求经常用到tree的定制化",
                "antdv的组件不在满足使用需求",
                "借鉴antdv设计",
                "从零开始进行了设计封装, 预留足够自定义能力",
              ],
            ],
            "Docker",
            ["掌握Docker基本操作", "公司使用docker部署研发测试等环境"],
            "涉及技术栈:",
            ["Vue3", "vite", "@vue/cli", "webpack", "Echarts", "antv", "antdv"],
          ],
        ],
      },
    ]);
    const historyWorks2 = reactive([
      {
        name: "天津星云时代科技有限公司",
        time: "2018.6 - 2021.4",
        infoList: [
          "前端开发工程师",
          "大前端技术部: 研发转前端负责人",
          "参与项目有公司官网、网页版直播(tcplayer)、后台管理系统×N、微信小程序×N、nodejs项目×N，具体如下：",
          [
            "微信小程序(公司主要项目)",
            [
              "负责开发环境的构建和优化,整体开发流程的优化、项目底层逻辑的编写、难点功能的预研和初稿实现。",
              "项目特色：",
              [
                "状态树：内置mp-vuex，api和vuex完全一致。",
                "使用iconfont字体和svg替换大部分图标,大幅减轻小程序主包大小。",
                "公用组件由构建工具分发到有需要的分包,减轻小程序主包大小。",
              ],
            ],
            "后台管理系统",
            [
              "负责项目的搭建和整体流程研发。统一使用的eslint作为代码格式规范，使用git提供钩子pre-commit做上传前代码规范检查。项目不是同一时期构建所以技术栈会有差异。",
              "现存技术栈有以下几种：",
              [
                "Webpack4+Vue2(全家桶)+sass",
                "@vue/cli+Vue2(全家桶)+sass",
                "Vite+Vue3(全家桶)+sass",
              ],
            ],
            "资源上传服务(图床)",
            [
              "技术栈：egg.js + @vue/cli + Vue2",
              "无数据库支持，直接使用nodejs和文件交互，支持增、改、查，为了安全不进行删除支持。",
            ],
            "日志收集系统",
            [
              "技术栈：deno + oak + vite + Vue3(全家桶) + sass + mongodb",
              "暂未使用，需要等待deno打包成单个可执行文件稳定后投入使用。api采用restfull设计风格。",
            ],
            "绘图微服务",
            [
              "技术栈：egg.js + canvas + @antv/f2 + mongodb",
              "起因是小程序canvas绘制分享图不理想，后扩展成了更加通用的绘图微服务，支持简单绘图get传参和复杂绘图post传参。",
            ],
            "Wkhtmltopdf项目",
            [
              "技术栈：html + js + css + Wkhtmltopdf",
              "起因是公司有动态制作pdf需求，基于绘制pdf将会交由前端组小伙伴，经过调研对比采用了这套技术栈。",
            ],
            "公司内部工具集 / tbox",
            [
              "技术栈：deno + typescript",
              "包含下列功能：",
              [
                "Svg生成iconfont样式文件，替代线上iconfont带来的版本维护困难问题。",
                "创建新页面/组件。支持同时创建多个页面/组件。",
                "Mock数据。本地起一个服务器，支持指定接口模拟回包数据和代理线上服务。",
                "小程序代码构建。替代nodejs的工具gulp，作为小程序本地的开发环境。开发时编译速度提升了N倍(N: 同类型文件个数)，做到了真正的最小化改动。(ps:内部公测阶段，等待deno打包成单个可执行文件稳定后gitlab中ci/cd 投入使用)",
              ],
            ],
          ],
        ],
      },
      {
        name: "网路(天津)电子商务有限公司",
        time: "2017.06 - 2018.05",
        infoList: [
          "前端工程师",
          [
            "工作内容:",
            [
              "官网",
              ["经过两次重构，均使用html+css+js/jquery"],
              "微信公众号网站",
              [
                "使用Vue2+高德地图API编写的微信公众号叫车网页应用。",
                "后来因为服务器重点放在了app,接口不在对其兼容项目终止。",
              ],
              "后端接口",
              ["会被分配一些简单的接口，使用Thinkphp编写。"],
            ],
            "涉及技术栈:",
            [
              "bootstrap",
              "jquery",
              "Vue2",
              "webpack",
              "Thinkphp3.2",
              "Thinkphp5.0",
              "高德地图API",
              "Echarts",
            ],
          ],
        ],
      },
      {
        name: "天津乐园集团",
        time: "2016.04 - 2017.05",
        infoList: [
          "web前端",
          "期间出现过集团解散，从集团办公变成到医院办公和过年前解聘和过年后返聘。",
          [
            "工作内容:",
            [
              "根据策划要求按照美工设计psd效果图，写出织梦cms整站前端模板，如有特殊要求会对织梦进行简单的二次开发。",
              "有活动会写一些单独的专题页。",
            ],
            "涉及技术栈:",
            ["html", "js/jquery", "css", "php/织梦cms"],
          ],
        ],
      },
      {
        name: "非程序员工作",
        time: "2013.07 - 2016.04",
        infoList: [
          "从事的网络运营，推广相关工作，接触到了公司外包的网络项目，能看到源码，对编程产生了兴趣，期间自学了ps，html，javascript，css，php，Thinkphp",
        ],
      },
    ]);
    const historyWorks2Obj = {
      left: [],
      right: [],
    };
    let splitIndex = 1;
    for (let i = 0; i < historyWorks2.length; i++) {
      if (i < splitIndex) {
        historyWorks2Obj.left.push(historyWorks2[i]);
      } else {
        historyWorks2Obj.right.push(historyWorks2[i]);
      }
    }
    const skillList = [
      {
        name: "Web",
        infoList: [
          "熟悉JS基础语法和知识",
          "掌握最新的ES6+语法",
          "有TypeScript研发经验",
          "掌握CSS以及预编译语言SCSS,Less",
        ],
      },
      {
        name: "Webpack",
        infoList: [
          "熟知Webpack原理",
          "有过构建新项目和老项目webpack2升级到webpack4的经验",
        ],
      },
      {
        name: "Nodejs",
        infoList: ["掌握Nodejs常用api", "使用eggjs开发过多个服务"],
      },
      {
        name: "Deno",
        infoList: [
          "掌握Deno常用api",
          "使用Deno+oak开发过服务端",
          "使用Deno作为脚本开发过内部工具集",
        ],
      },
      {
        name: "Gulp",
        infoList: ["熟悉gulp的api", "使用gulp编写脚本作为微信小程序开发和打包"],
      },
      {
        name: "rust",
        infoList: [
          "令我反复入门的一门语言",
          "看完语法后由于缺乏项目实操，仅是能够进行阅读",
        ],
      },
      {
        name: "微信小程序",
        infoList: [
          "星云时代的主要产品",
          "熟悉微信小程序的api",
          "有分包研发经验",
          "部分小程序结构和流程由我设计完成",
        ],
      },
      {
        name: "git",
        infoList: ["公司由gitLab作为仓库", "熟练掌握git工作流"],
      },
      {
        name: "Vite",
        infoList: [
          "内部项目在Vite1.x版本时开始使用",
          "星云时代最新web项目均使用vite2.x作为构建工具",
          "零氪科技的私有包使用vite作为研发工具",
        ],
      },
      {
        name: "Vue2/3",
        infoList: [
          "熟练使用vue2/3及其全家桶",
          "使用过elementUI和Ant-design-vue两个框架",
        ],
      },
      {
        name: "数据库",
        infoList: [
          "使用过mysql，写过简单的增删改查",
          "使用过mongodb, 公司nodejs写的服务均为mongodb",
        ],
      },
      {
        name: "Echarts",
        infoList: ["熟悉相关结构和基本概念", "能够尽量还原设计图内容"],
      },
    ];
    const skillObj = {
      left: [],
      right: [],
    };
    splitIndex = 6;
    for (let i = 0; i < skillList.length; i++) {
      if (i < splitIndex) {
        skillObj.left.push(skillList[i]);
      } else {
        skillObj.right.push(skillList[i]);
      }
    }

    return {
      baseInfo,
      personalAdvantage,
      nowWorkInfo,
      historyWorks,
      historyWorks2Obj,
      skillObj,
    };
  },
});
</script>
