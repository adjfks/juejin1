<template>
  <div id="app">
    <Category></Category>
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Category from './components/Category'
import Tabbar from './components/Tabbar'

export default {
  components: {
    Category,
    Tabbar
  }
}
</script>

<style lang="less">

</style>
