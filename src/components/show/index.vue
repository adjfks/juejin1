<template>
<div id="show">
  <Sort
  :secondCategories="secondCategories"
  :currentPath="categoryName"
  @getNewCategory="getNewCategory"></Sort>
  <ArticleList :currentCategoryId="child"></ArticleList>
</div>
</template>

<script>
import Sort from '@/components/Sort'
export default {
  data () {
    return {
      // categoryId: 1,
      secondCategories: [], // backend
      child: this.categoryId
    }
  },
  props: {
    categoryName: {
      type: String // 'backend'等
    },
    categoryId: {
      type: Number
    }
  },
  components: {
    Sort
  },
  methods: {
    async getSecondCategories () {
      const res = await this.$getCategories()
      // console.log(res.data.categories[this.categoryId].children)
      this.secondCategories = res.data.categories[this.categoryId].children
    },
    getNewCategory (newVal) {
      this.child = newVal
    }
  },
  created () {
    this.getSecondCategories()
  }
}
</script>

<style scoped lang="less">

</style>
