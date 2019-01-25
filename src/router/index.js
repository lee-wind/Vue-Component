import Vue from 'vue'
import Router from 'vue-router'
import Bus from '@/bus'
import Index from '@/components/Index'
import Plugin from '@/components/Plugin'
import Table from '@/components/Table'
import Form from '@/components/Form'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
      {
          path: '/plugin',
          name: 'Plugin',
          component: Plugin
      },
      {
          path: '/table',
          name: 'table',
          component: Table
      },
      {
          path: '/form',
          name: 'Form',
          component: Form
      },
  ]
});

router.beforeEach((to, from, next) => {
    console.log("路由准备离开");
    Bus.$emit('hidePlugin');
    next();
});

export default router;
