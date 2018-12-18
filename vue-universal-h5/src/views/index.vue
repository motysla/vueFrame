<template>
  <div :class="$style.main">
    <section>
      <h1>css module</h1>
      <p class="less-color">这是通过less设置的:global字体颜色为粉色</p>
      <p :class="$style.lessFontSize">这是通过less设置的:local字体大小为20px</p>
      <p :class="$style.red">This should be red</p>
      <h4 :class="$style.headerTit">类别推荐</h4>
      <h4 :class="$style['header-tit']">类别推荐</h4>
    </section>
    <br />
    <br />
    <section>
      <h1>i18n locale</h1>
      <h3>{{$t("person.name")}}</h3>
      <h2>{{$t("person.gender")}}</h2>
      <p>{{$t("person.age")}}</p>
      <mt-button @click="changeLanguage('en')">英文</mt-button>
      <mt-button @click="changeLanguage('zh')">中文</mt-button>
      <mt-button @click="changeLanguage('jp')">日文</mt-button>
    </section>
  </div>
</template>

<script>
import { setupLangLocal } from "../config/locale";
import { api_login } from "../service/network";

export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    // 更改显示语言
    changeLanguage(lang) {
      setupLangLocal(lang);
    }
  },
  mounted() {
    console.log(require("../config/params").getHost());
  }
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
  margin: 0.1rem;
  section h1 {
    padding-bottom: 0.05rem;
    margin-bottom: 0.1rem;
    border-bottom: 1px solid #333;
  }
}
</style>


