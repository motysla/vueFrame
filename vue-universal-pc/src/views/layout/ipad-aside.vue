<template>
  <div
    class="main"
    ref="container"
  >
    <!-- gutter 是间距；span是宽度，共24 -->
    <el-row :gutter="30">
      <el-col :span="18">
        <div
          class="main-left"
          ref="containerLeft"
        >
          <div
            class="main-left-cell"
            :class="{'main-left-bigcell': n > 3}"
            v-for="n of 5"
          >
            xxxxx
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div
          class="main-right"
          ref="containerRight"
        ></div>
      </el-col>
    </el-row>
    <div class="main-bottom">xxx</div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {},
  watch: {},
  mounted() {
    this.$refs.container.style.height = document.body.clientHeight + 'px';
    this.$refs.containerLeft.style.height = document.body.clientHeight - 30 + 'px';
    this.$refs.containerRight.style.height = document.body.clientHeight + 'px';

  },
}

</script>

<style scoped lang="less">
.main {
  background: #f5f5f5;
  &-left {
    background-image: url("../../assets//images/bg-background.png");
    background-repeat: no-repeat;
    background-position: 45% 110%;
    background-color: #fff;
    margin: 30px 0 0 30px;
    box-sizing: border-box;
    box-shadow: 2px 2px 4px #bcbcbc;
    display: flex;
    justify-content: space-between;
    padding: 40px;
    flex-wrap: wrap;
    &-cell {
      width: 31%;
      height: 40%;
      background-color: rgba(0, 0, 0, 0.2);
    }
    &-bigcell {
      margin-top: -10%;
      width: 49%;
    }
  }
  &-right {
    background: #000;
  }
  &-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 12%;
    background-color: red;
  }
}
</style>
