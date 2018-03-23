// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/redapple'



//注册插件
//一般路由和嵌套路由
//路由重定向
Vue.use(VRouter);
Vue.use(Vuex)
let router = new VRouter({
       mode:"history",
       routes:[
        //  {
        //     path:'/',
        //     redirect:'/apple'
        //  } ,
         {
           path:'/apple',
           components:{
             viewA:Apple

           },
           name:'applePage',
           children:[
             {
                 path:'red',
                 component:RedApple
             }
           ]

         },
         {
           path:'/banana',
           component:Banana,
           name:'bananaPage',
         }
       ]
})

//实例化store:一个数据中心
let store = new Vuex.Store({
      state:{
           totalPrice:0
      },
      mutations:{
           increment(state,price){
                 state.totalPrice += price
           },
           decrement(state,price){
                 state.totalPrice -= price
           }
      }

})

// Vue.config.productionTip = false

/* 在全局使用vue-router和vuex */
new Vue({
  el: '#app',
  router,
  store,
  components:{ App },
  template: '<App/>'
})
