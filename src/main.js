// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/redapple'


//使用vue-router
//一般路由和嵌套路由
Vue.use(VRouter);
let router = new VRouter({
       mode:"history",
       routes:[
         {
           path:'/apple',
           component:Apple,
           children:[
             {
                 path:'red',
                 component:RedApple
             }
           ]

         },
         {
           path:'/banana',
           component:Banana
         }
       ]
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components:{ App },
  template: '<App/>'
})
