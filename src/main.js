import Vue from 'vue'
import App from './App.vue'

//导入Element-ui
import ElementUI from 'element-ui'
//导入 Element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
//插件 element-ui
Vue.use(ElementUI)

//导入全局初始化样式
import './assets/index.css'
Vue.config.productionTip = false
//导入
import VueRouter from 'vue-router'
//use一下
Vue.use(VueRouter)
//导入需要通过路由管理的组件

import discovery from './views/03.discovery.vue';
import playlists from './views/04.playlists.vue';
import songs from './views/05.songs.vue';
import mvs from './views/06.mvs.vue';
import result from './views/07.result.vue';
import playlist from './views/08.playlist.vue'
import mv from './views/09.mv.vue'
// 创建路由
let router =new VueRouter({
  routes:[
    //配置地址和组件的关系
    {
      //地址
      path:"/discovery",
      //组件
      component:discovery 
    },
    {
      //空地址
      path:"/",
      //组件
      component:discovery 
    },
    {
      //地址
      path:"/playlists",
      //组件
      component:playlists
    },
    {
      //地址
      path:"/songs",
      //组件
      component:songs 
    },
    {
      //地址
      path:"/mvs",
      //组件
      component:mvs 
    },
    {
      //地址
      path:"/result",
      //组件
      component:result 
    }
  ]
})

new Vue({
  render: h => h(App),
  // 挂载到vue实例上
  router,// router: router
}).$mount('#app')

// 解决vue-router在3.0版本以上重复点报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}