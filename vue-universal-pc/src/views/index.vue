<template>
  <el-container :class="$style.main">
    <el-header>
      <el-row>
        <el-col
          :span="3"
          :offset="1"
        >
          <h1 :class="$style['main-logo']">logo</h1>
        </el-col>
        <el-col
          :span="10"
          :offset="5"
        >
          <el-row>
            <el-col
              :span="4"
              v-for="(item, index) of navMenu"
              :key="index"
            >
              <h2
                :class="[$style['main-nav'], {[$style['main-nav-active']]: navActive == index}]"
                @click.stop="navActive = index"
              >{{item}}</h2>
            </el-col>
          </el-row>
        </el-col>
        <el-col
          :span="1"
          :offset="4"
        >
          <h1 :class="$style['main-in']">in</h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="scss-main">
      <p class="less-color">这是通过less设置的:global字体颜色为粉色</p>
      <p :class="$style.lessFontSize">这是通过less设置的:local字体大小为40px</p>
      <p :class="$style.red">This should be red</p>
      <h4 :class="$style.headerTit">类别推荐</h4>
      <h4 :class="$style['header-tit']">类别推荐</h4>

      <router-view></router-view>
    </el-main>
    <el-footer>
      <h3>{{$t("person.name")}}</h3>
      <h2>{{$t("person.gender")}}</h2>
      <p>{{$t("person.age")}}</p>
      <el-button @click="changeLanguage('en')">英文</el-button>
      <el-button @click="changeLanguage('zh')">中文</el-button>
      <el-button @click="changeLanguage('jp')">日文</el-button>
    </el-footer>
  </el-container>
</template>

<script>
import { setupLangLocal } from "../config/locale";
export default {
  components: {},
  data() {
    return {
      navMenu: ["HOME", "RPODUCT", "ABOUT", "TEAM", "CONTACT"],
      navActive: 0
    };
  },
  computed: {},
  methods: {
    // 更改显示语言
    changeLanguage(lang) {
      setupLangLocal(lang);
    }
  },
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
    font-size: 40px;
  }
  .red {
    color: red;
  }
  .header-tit {
    color: blue;
  }
}

.main {
  @H-nav: 70px;
  &-logo {
    height: @H-nav;
    line-height: @H-nav;
  }
  &-nav {
    height: @H-nav*.7;
    line-height: @H-nav*.7;
    margin-top: @H-nav*.3;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    transition: color 0.4s ease 0s;
    &:hover {
      color: @color_red_hover;
    }
  }
  &-nav-active {
    color: @color_red_active;
  }
  &-in {
    height: @H-nav*.7;
    line-height: @H-nav*.7;
    margin-top: @H-nav*.3;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }
}
</style>

<style lang="less">
.el-header {
  height: auto !important;
  background-color: @color_black_background;
  width: 100%;
  position: fixed;
}
.el-main {
  padding: 0;
  padding-top: 70px;
}
.el-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: center;
}
</style>

<style lang="scss" scoped>
.scss-main {
  background-color: $back;
}
</style>

