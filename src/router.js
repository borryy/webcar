import Vue from "vue";
// 引入vueRouter
import VueRouter from "vue-router";
// 引入组件
import home from "./pages/home.vue";
import index from "./pages/index.vue";
import order from "./pages/order.vue";
import consumer from "./pages/consumer.vue";
// 告诉 vue 使用 vueRouter
Vue.use(VueRouter);
// 配置路由
const routes = [
    {
        path:"/",
        component: home,
        redirect: '/index',
        children: [
            {
                path: "index",
                name: "主页",
                component: index,
                meta: {
			        title: '新概念检车-首页'
			      }
            },
            {
                path: "/index/order",
                name: "会员列表",
                component: order,
                meta: {
			        title: '新概念检车-会员列表'
			      }
            },
            {
                path: "/index/consumer",
                name: "消费明细",
                component: consumer,
                meta: {
			        title: '新概念检车-消费明细'
			      }
            }
        ]
    },
   
]

var router =  new VueRouter({
	mode:'history',
    routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router;