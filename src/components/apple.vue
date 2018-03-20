
<template>
 <div  class="hello">
   <!--初始数据-->
    <h1>{{msg}}</h1>
   <p> {{$route.params.color}} </p>
   <button @click = 'getParam'>获取参数</button>
   <!--嵌套路由，本身要单独的router-view-->
   <router-view></router-view>
 </div>
</template>
<script>
   export default {
        data(){
             return {
                   msg : ' i am father of little apple'
             }
        },
     methods:{
          getParam(){
              console.log(this.$route.params)
          }
     }
   }
</script>
