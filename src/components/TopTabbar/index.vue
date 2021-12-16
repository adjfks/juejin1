<template>
  <div id="top-tabbar">
    <div class="top-tabbar-container">
      <a class="iconfont back" @click="goback">&#xe600;</a>
      <div class="font"><slot></slot></div>
      <span class="logo"><img src="@/assets/images/logo.svg" alt=""></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
#top-tabbar{
  height: 50px;
  background-color: #fff;
  .top-tabbar-container{
    background-color: #fff;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    color:#1e80ff;
    display: flex;
    justify-content: space-between;

    .back{
      flex: 1;
      text-align: center;
      color:#1e80ff;
    }

    .logo{
      flex: 1
    }

    .font{
      flex: 10;
      font-weight: 700;
      text-align: center;
    }
  }
}
</style>
