<template>
<div id="backend">
  <Show
  :categoryName="categoryName"
  :categoryId="categoryId"></Show>
</div>
</template>

<script>
export default {
  data () {
    return {
      categoryName: 'backend',
      categoryId: 1
    }
  }
}
</script>

<style scoped lang="less">

</style>
