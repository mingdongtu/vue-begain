
<template>
 <div  class="hello">
   <!--初始数据-->
    <h1>{{msg}}</h1>
   <p> {{$route.params.color}} </p>
   <button @click = 'getParam'>获取参数</button>
 </div>
</template>
<script>
   export default {
        data(){
             return {
                   msg : 'I am apple'
             }
        },
     methods:{
          getParam(){
              console.log(this.$route.params)
          }
     }
   }
</script>
