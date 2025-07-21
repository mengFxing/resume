<template>
  <MTop lang="en"/>
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
          <h2 class="section-title">Personal Strengths</h2>
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
          <h2 class="section-title">Mastered Skills</h2>
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
            <h2 class="section-title">Recent Work</h2>
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
      name: "MengFanXing",
      job: "Front-End Development Engineer",
      infoLeft: [
        "Male / Born in August 1990",
        "China University of Geosciences (Beijing) · Marine Science",
        "Bachelor's Degree / Full-time Regular Admission / Graduated in 2013",
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
      name: "Hello! I am a professional engineer with many years of front-end development experience. Next, I would like to briefly introduce my personal strengths, hoping to bring value to your company.",
      infoList: [
        [
          "10 years of programming experience and 6 years of team leadership experience.",
          "Experience in multi-end development including PC, H5, WeChat Mini Programs, and WeChat Official Accounts; projects cover directions such as to C, to B, and service-oriented, involving products such as social networking, live streaming, travel, medical big data, devops, project management, financial management, and AI question-answering assistants.",
          "Proficient in front-end technologies such as HTML, CSS, Javascript/Typescript, and Vue2/3, with in-depth understanding of front-end engineering and modularization; skilled in using build tools such as Vite, Webpack, and Gulp to improve project development efficiency.",
          "Possess certain back-end capabilities, having written node services, deno services, and php services; the build tool developed using deno has reduced the development hot update time from over 2s to within 10ms.",
          "Improved front-end architecture and proposed atomic programming, which greatly enhanced the reusability and scalability of code; led and participated in multiple key and difficult technical tackling work and architecture improvements; mastered skills such as front-end performance optimization, network optimization, and SEO optimization to enhance user experience.",
          "Possess good project management capabilities, being able to independently take charge of the R&D process management of a medium to large-scale project, with a good product thinking, and capable of abstracting product business.",
        ],
      ],
    });
    const nowWorkInfo = reactive([
      {
        name: "Ruhu Intelligent Technology (Beijing) Co., Ltd.",
        time: "2025.5 - Present",
        infoList: [
          "Front-end Architect",
          "The company undertakes AI-related software businesses. Currently, it is undertaking the second phase of a telephone customer service project for a listed company: transforming the mind map-configured intelligent customer service into an AI intelligent customer service.",
          [
            "Job Responsibilities:",
            [
              "Design and develop the intelligent customer service conversation monitoring page, including content display: monitoring conversations, AI recognition information, etc., and call operations: starting monitoring, stopping monitoring, saving orders, etc.",
              "Develop functions for the intelligent agent management platform, including basic functions such as user management, role management, and position management, as well as core functions like intelligent agent management.",
            ],
          ],
        ],
      },
      {
        name: "Nengke Technology Co., Ltd.",
        time: "2022.11 - 2024.10",
        infoList: [
          "Senior Front-end Engineer",
          "R&D Efficiency Product Development Center: Front-end Leader",
          "The department is a one-stop R&D efficiency platform based on BizDevOps, supporting the entire software delivery process. It incorporates configurable best practices for R&D models, enabling full-process digitalization, standardization, and automation. It guides users to gradually adopt best practices, improves R&D efficiency, and achieves continuous delivery of business value driven by requirements.",
          "Official Website: https://www.lexiao.biz",
          [
            "Basic Framework: Vue3 + TypeScript + Vite + vue-router + Pinia + windicss + Less",
            "UI Framework: Secondary encapsulation of ant-design-vue@3.X",
            "Job Responsibilities:",
            [
              "Improve the front-end architecture according to project characteristics to enhance team development efficiency and support changes and additions to business requirements.",
              "Analyze and solve key front-end technical issues, improve project performance, and pay attention to and handle compatibility problems.",
              "Be responsible for daily management or key development tasks assigned in projects.",
              "Abstract relevant businesses and encapsulate front-end components to improve component usability and reduce the difficulty of reuse and expansion.",
              "Cooperate with product teams to optimize project user experience and interactive operation processes.",
              "Conduct quality control of front-end code, perform code reviews, and provide corresponding technical guidance to team members.",
              "Share experience and conduct technical exchanges with team members, create a good front-end technical atmosphere, and promote team growth.",
            ],
          ],
        ],
      },
    ]);

    const skillList = [
      {
        name: "Web",
        infoList: [
          "Familiar with basic JS syntax and knowledge",
          "Master the latest ES6+ syntax",
          "Have experience in TypeScript development",
          "Master CSS and precompiled languages such as SCSS and Less",
        ],
      },
      {
        name: "Webpack",
        infoList: [
          "Well-acquainted with Webpack principles",
          "Have experience in building new projects and upgrading webpack2 to webpack4 for old projects",
        ],
      },
      {
        name: "Nodejs",
        infoList: [
          "Master common Node.js APIs",
          "Have developed multiple services using Egg.js",
        ],
      },
      {
        name: "Deno",
        infoList: [
          "Master common Deno APIs",
          "Have developed server-side applications using Deno + Oak",
          "Have developed internal tool sets using Deno as a scripting language",
        ],
      },
      {
        name: "Gulp",
        infoList: [
          "Familiar with Gulp APIs",
          "Used Gulp to write scripts for WeChat Mini Programs development and packaging",
        ],
      },
      {
        name: "rust",
        infoList: [
          "A language that I've had to start learning repeatedly",
          "After studying the grammar, due to the lack of practical project experience, I can only read it",
        ],
      },
      {
        name: "WeChat Mini Programs",
        infoList: [
          "Main products of Xingyun Era (company name)",
          "Familiar with WeChat Mini Programs APIs",
          "Have experience in subpackage development",
          "Designed part of the Mini Programs' structure and processes",
        ],
      },
      {
        name: "git",
        infoList: [
          "The company uses GitLab as the repository",
          "Proficient in Git workflow",
        ],
      },
      {
        name: "Vite",
        infoList: [
          "Internal projects started using Vite 1.x",
          "All the latest web projects of Xingyun Era use Vite 2.x as the build tool",
          "Private packages of LinkDoc Technology use Vite as the development tool",
        ],
      },
      {
        name: "Vue2/3",
        infoList: [
          "Proficient in using Vue 2/3 and its ecosystem",
          "Have experience with Element UI and Ant Design Vue frameworks",
        ],
      },
      {
        name: "Database",
        infoList: [
          "Have used MySQL and written simple CRUD operations",
          "Have used MongoDB; all company services written in Node.js use MongoDB",
        ],
      },
      {
        name: "Echarts",
        infoList: [
          "Familiar with relevant structures and basic concepts",
          "Able to reproduce design图纸 content as accurately as possible",
        ],
      },
    ];
    const skillObj = {
      left: [],
      right: [],
    };
    let splitIndex = 6;
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
      skillObj,
    };
  },
});
</script>
