import Vue from 'vue'
import Router from 'vue-router'
import Bus from '@/bus'
import HelloWorld from '@/components/HelloWorld'
import Pagination from '@/components/Pagination'
import Plugin from '@/components/Plugin'
import Table from '@/components/Table'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/pagination',
      name: 'Pagination',
      component: Pagination
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
  ]
});

router.beforeEach((to, from, next) => {
    console.log("路由准备离开");
    Bus.$emit('hidePlugin');
    next();
});

export default router;
