<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{totalPrice}}
    <!--过渡：缓存-->
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
      <!-- <router-view name="viewA"></router-view> -->

      <!--<router-view name="viewB"></router-view>-->
      <router-link :to="'apple'">香蕉跳苹果</router-link>
      <router-link :to="{name:'bananaPage'}">apple To banana</router-link>

       <router-link :to="{path:'apple/red'}">访问apple子组件</router-link>
   <!-- 将香蕉和苹果组件都渲染到当前组件中 -->
   
    <apple></apple>
    <banana></banana>
  </div>
</template>

<script>
import apple from './components/apple'
import banana from './components/banana'
export default {
  name:'App',
  components:{apple,banana},
  computed:{
        totalPrice(){
             return this.$store.state.totalPrice
        }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
