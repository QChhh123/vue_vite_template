<template>
  <a-config-provider :locale="locale">
    <router-view></router-view
    ><!-- 路由视图，动态加载路由对应界面 -->
  </a-config-provider>
</template>

<script setup>
import locale from "ant-design-vue/es/locale/zh_CN";
</script>

<style>
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  height: 100%;
  width: 100%;
}
</style>

