<template>
  <div id="loading">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>

<script>

export default {
  methods: {
  },
  created () {

  }
}
</script>
<style scoped lang="less">
#loading{
  height: 20px;
  width: 60px;
  margin: 0 auto;
  text-align: center;
  font-size: 10px;
  &>div{
    background-color: rgba(109, 174, 240, 0.781);
    height: 100%;
    width: 6px;
    display: inline-block;
    margin-right: 5px;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }
  .rect2{
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .rect3{
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  .rect4{
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .rect5{
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

}
  @-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }
</style>
