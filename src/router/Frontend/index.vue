<template>
<div id="frontend">
  <Show
  :categoryName="categoryName"
  :categoryId="categoryId"></Show>
</div>
</template>

<script>
export default {
  data () {
    return {
      categoryName: 'frontend',
      categoryId: 2
    }
  }
}
</script>

<style scoped lang="less">

</style>
