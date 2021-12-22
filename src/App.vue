<template>
  <div id="app">
    <HomeTop>首页</HomeTop>
    <Category></Category>
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Category from './components/Category'
import Tabbar from './components/Tabbar'
import HomeTop from './components/HomeTop'
export default {
  components: {
    Category,
    Tabbar,
    HomeTop
  }
}
</script>

<style lang="less">

</style>
