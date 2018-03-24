
<template>
 <div  class="hello">
   <!--初始数据-->
    <h1>{{msg}}</h1>
   <p> {{$route.params.color}} </p>
   <!-- <button @click = 'getParam'>获取参数</button> -->
   <!--嵌套路由，本身要单独的router-view-->
   <router-view></router-view>
    
    <!-- 状态管理 -->
   <button  @click="addOne">增加一个苹果</button>
   <button  @click='minusOne'>减少一个苹果</button>
 </div>
</template>
<script>
   export default {
        data(){
             return {
                   msg : ' i am father of little apple',
                   price:5  //单价
             }
        },
     methods:{
          getParam(){
              console.log(this.$route.params)
          },
          addOne(){
               this.$store.dispatch('increase',this.price)
          },
          minusOne(){
               this.$store.commit('decrement',this.price)
          }
     }
   }
</script>
