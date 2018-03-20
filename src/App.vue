<template>
  <div id="app">
    <img src="./assets/logo.png">
      <router-view></router-view>
      <router-link :to="{path:'apple'}">香蕉跳苹果</router-link>
      <router-link :to="{path:'banana'}">apple To banana</router-link>

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
