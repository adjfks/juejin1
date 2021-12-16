<template>
<div id="tabbar" v-if="this.$route.meta.showNav">
  <div class="tabbar-container">
    <a href="" class="tabbar-items" :style="hot" @click.prevent="getHot"><span class="iconfont size">&#xe8f4;</span></a>
    <a href="" class="tabbar-items" :style="newest" @click.prevent="getNew"><span class="iconfont size">&#xe679;</span></a>
    <a href="" class="tabbar-items" :style="history" @click.prevent="goHistory"><span class="iconfont size">&#xe63b;</span></a>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      current: 0
    }
  },
  computed: {
    hot () {
      if (this.current === 0) return { color: '#007fff' }
      else return {}
    },
    newest () {
      if (this.current === 1) return { color: '#007fff' }
      else return {}
    },
    history () {
      if (this.current === 2) return { color: '#007fff' }
      else return {}
    },
    currentRoute () {
      return this.$route.path
    }
  },
  methods: {
    getHot () {
      this.current = 0
      this.$router.push({ path: this.currentRoute, query: { sort: 'hot' } })
    },
    getNew () {
      this.current = 1
      this.$router.push({ path: this.currentRoute, query: { sort: 'new' } })
    },
    goHistory () {
      this.current = 2
      this.$router.push('history')
    }
  },
  watch: {
    currentRoute () {
      // 路由路径变化，tabbar第一项高亮
      this.current = 0
    }
  }
}
</script>

<style scoped lang="less">

#tabbar{
  height: 50px;
  .tabbar-container{
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: auto;
  background-color: #fff;
  // padding: 10px 0;
  border-top: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-evenly;
  .tabbar-items{
    display: block;
    height: 50px;
    width: 50px;
    padding: 0 10px;
    text-align: center;
    line-height: 50px;

    .size{
      font-size: 24px;
    }
  }
}
}

</style>
