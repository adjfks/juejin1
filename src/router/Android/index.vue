<template>
<div id="android">
  <Show
  :categoryName="categoryName"
  :categoryId="categoryId"></Show>
</div>
</template>

<script>
export default {
  data () {
    return {
      categoryName: 'Android',
      categoryId: 3
    }
  }
}
</script>

<style scoped lang="less">

</style>
