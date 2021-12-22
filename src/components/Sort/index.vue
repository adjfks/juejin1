<template>
  <div id="sort" v-if="this.$route.meta.showNav">
    <a
    @click="getNewArticles(item.category_id , index)"
    :class="{'label-link': true , 'active': index === currentSelect}"
    v-for="(item,index) in this.secondCategories"
    :key="item.category_id">{{item.category_name}}</a><!-- id:11 -->
  </div>
</template>

<script>
// 导入bus.js，当点击新的二级分类标签时，让底部tab切换到hot
import bus from '@/utils/bus.js'
export default {
  data () {
    return {
      currentSelect: -1
    }
  },
  props: {
    secondCategories: [],
    currentPath: {
      type: String,
      default: ''
    }
  },
  methods: {
    getNewArticles (id, index) {
      // 选中变色
      this.currentSelect = index
      this.$emit('getNewCategory', id)
      // 通知底部tab切换到hot
      bus.$emit('changeSecondCategory', 0)
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">
#sort {
  display: flex;
  flex-wrap: wrap;
  background-color: #f4f5f5;
  padding-bottom: 10px;
  .label-link{
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 15px;
    color:#909090;
    font-size: 14px;
    margin-left: 10px;
    margin-top: 10px;
    &:hover{
      cursor: pointer;
    }
  }
  .active {
    color: #fff;
    background-color: #44a2ff;
  }

}

</style>
