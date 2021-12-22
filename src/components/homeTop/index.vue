<template>
  <div id="top-tabbar">
    <div class="top-tabbar-container">
      <a class="iconfont back" @click="themeToggle" v-if="!theme">&#xe76b;</a>
      <a class="iconfont back" @click="themeToggle" v-if="theme">&#xe64c;</a>
      <div class="font"><slot></slot></div>
      <span class="logo"><img src="@/assets/images/logo.svg" alt=""></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: false
    }
  },
  methods: {
    themeToggle () {
      this.theme = !this.theme
      if (this.theme === true) {
        this.loadStyles()
      } else {
        this.removeStyles()
      }
    },
    loadStyles () {
      var link = document.createElement('link')
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = './dark-theme.css' // 引入的文件名
      document.getElementsByTagName('head')[0].appendChild(link)
    },
    removeStyles () {
      var filename = './dark-theme.css' // 移除引入的文件名
      var targetelement = 'link'
      var targetattr = 'href'
      var allsuspects = document.getElementsByTagName(targetelement)
      for (var i = allsuspects.length; i >= 0; i--) {
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) !== -1) {
          allsuspects[i].parentNode.removeChild(allsuspects[i])
        }
      }
    }
  }
}
</script>

<style lang="less">
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
      font-size: 20px;
      &:hover{
        cursor: pointer;
      }
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
