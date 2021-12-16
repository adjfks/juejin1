<template>
<div id="recommend">
  <ArticleList :currentCategoryId="categoryId"></ArticleList>
</div>
</template>

<script>
export default {
  data () {
    return {
      categoryId: 0// recommend
    }
  }

}
</script>

<style scoped lang="less">

</style>
