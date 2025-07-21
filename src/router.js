import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE),
  routes:[
    {
      path:'/',
      component: ()=> import('#/views/AppCn.vue')
    },
    {
      path:'/en',
      component: ()=> import('#/views/AppEn.vue')
    }
  ],
    scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
  },
})

export default router