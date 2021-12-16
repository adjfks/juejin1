<template>
<div id="ios">
  <Show
  :categoryName="categoryName"
  :categoryId="categoryId"></Show>
</div>
</template>

<script>
export default {
  data () {
    return {
      categoryName: 'iOS',
      categoryId: 4
    }
  }
}
</script>

<style scoped lang="less">

</style>
