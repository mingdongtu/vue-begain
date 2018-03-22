<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--过渡：缓存-->
    <transiion>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transiion>
      <router-view name="viewA"></router-view>

      <!--<router-view name="viewB"></router-view>-->
      <router-link :to="'apple'">香蕉跳苹果</router-link>
      <router-link :to="{name:'bananaPage'}">apple To banana</router-link>

    <router-link :to="{path:'apple/red'}">访问apple子组件</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
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
