<template>
<div id="category" v-if="this.$route.meta.showNav">
  <div class="category-container">
    <a :class="{'category-items': true , 'active': index === current}"
    v-for="(item , index) in categories"
    :key="item.category_id"
    @click="gotoTarget(index , $event)"
    >{{ item.category_name}}</a>
  </div>
</div>

</template>

<script>

export default {
  data () {
    return {
      categories: [],
      current: 0,
      hash: {
        推荐: 'recommend',
        前端: 'frontend',
        后端: 'backend',
        iOS: 'IOS',
        Android: 'Android'
      }
    }
  },
  computed: {
  },
  methods: {
    async getData () {
      const res = await this.$getCategories()
      // 获取全部分类标签，保存到列表里，每一项是一个对象，包含category_id和category_name属性
      this.categories = res.data.categories
    },
    // 编程式导航
    gotoTarget (index) {
      // 设置选中的标签
      this.current = index
      // 导航
      /* 这里的 '/' 一定要写，因为要改变整个hash地址，而不是改变末尾 */
      this.$router.push(`/${this.hash[this.categories[index].category_name]}`)
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped lang="less">
#category{
  height: 40px;
  .category-container{
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  justify-content: space-around;
  border-top: 1px solid #f4f5f5;

  .category-items{
    height: 40px;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    color: #71777c;
    // &:active{
    //   color: #007fff;
    // }
  }

  .active {
    color: #007fff;
  }

}
}

</style>
