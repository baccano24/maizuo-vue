<template>
  <div class="tabs-bar-wrapper">
    <div class="tabs-bar">
      <ul class="tabs-nav">
        <li
          :class="{active:activedMenuIndex===i}"
          :key="m.index"
          v-for="(m,i) in menus"
          style="width: 50%;"
          @click="changeMenu(i),changeComing(i)"
        >
          <span>{{m.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    activedMenuIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      menus: [{ index: 0, title: "正在热映" }, { index: 1, title: "即将上映" }]
    };
  },
  methods: {
    changeMenu(index) {
      this.$emit("change", index);
    },
    changeComing(index) {
      if (!index) {
        this.$router.push({
          path: "/films/hotMovies"
        });
      }else{
        this.$router.push({
          path: "/films/comingMovies"
        });
      }
    }
  }
};
</script>

<style scoped>
html {
  touch-action: none;
}
.tabs-bar-wrapper .tabs-bar {
  height: 49px;
  width: 100%;
  display: flex;
  overflow: hidden;
}
.tabs-nav {
  width: 100%;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li {
  width: 50%;
  display: block;
  height: 49px;
  line-height: 49px;
  float: left;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li span {
  border-bottom: 2px solid #fff;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li:nth-of-type(1) {
  margin-left: 50px;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li:nth-of-type(2) {
  margin-right: -100px;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li.active span {
  color: #ff5f16;
  display: block;
  height: 47px;
  line-height: 47px;
  width: 64px;
  border-bottom: 2px solid #ff5f16;
}
</style>
