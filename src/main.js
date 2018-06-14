// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router.js'
import axios from 'axios'
// 引入全部图标
import 'vue-awesome/icons'
// 引入echarts
import echarts from 'echarts'
// 引入vue-awesome ico
import Icon from 'vue-awesome/components/Icon'

//全局注册
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component('icon', Icon)
Vue.prototype.$echarts = echarts
var routeList = [];
router.beforeEach((to, from, next) => {
 var index = -1;
 for(var i = 0; i < routeList.length; i++) {
  if(routeList[i].name == to.name) {
   index = i;
   break;
  }
 }
 if (index !== -1) {
//如果存在路由列表，则把之后的路由都删掉
  routeList.splice(index + 1, routeList.length - index - 1);
 } else if(to.name != '登录'){
  routeList.push({"name":to.name,"path":to.fullPath});
 }
 to.meta.routeList = routeList;
 next()
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Icon
})
