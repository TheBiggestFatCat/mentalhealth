import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//配置路由

export default new VueRouter({
  routes: [
    {
      path: '/testpage',
      component: () => import ('@/pages/TestPage'),
      children: [
        {
          path: 'test1com',
          component: () => import ('@/components/Test1Com')
        },
        {
          path: 'test2com',
          component: () => import ('@/components/Test2Com')
        },
        {
          path: 'test3com',
          component: () => import ('@/components/Test3Com')
        }
      ]
    },
    {
      path: '/docpage',
      component: () => import ('@/pages/DocPage')
    },
    {
      path: '/loginpage',
      component: () => import ('@/pages/LoginPage')
    },
    {
      path: '/registerpage',
      component: () => import ('@/pages/RegisterPage')
    },
    {
      path: '/resultpage',
      component: () => import ('@/pages/ResultPage')
    },
    //重新定向
    {
      path: '*',
      redirect: '/testpage'
    }
  ]
});