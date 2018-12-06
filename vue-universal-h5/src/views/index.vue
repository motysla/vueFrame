<template>
  <div :class="$style.main">
    <p class="less-color">这是通过less设置的:global字体颜色为粉色</p>
    <p :class="$style.lessFontSize">这是通过less设置的:local字体大小为20px</p>
    <p :class="$style.red">This should be red</p>
    <h4 :class="$style.headerTit">类别推荐</h4>
    <h4 :class="$style['header-tit']">类别推荐</h4>
    <br/>
<mt-button icon="more">更多</mt-button>  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style module lang="less">
:global {
  .less-color {
    color: pink;
  }
}
:local {
  .less-font-size {
    font-size: 20px;
  }
  .red {
    color: red;
  }
  .header-tit {
    color: blue;
  }
}
.main {
  color: rebeccapurple;
}
</style>


