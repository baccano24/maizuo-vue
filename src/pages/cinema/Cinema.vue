<template>
  <div>
    <header>
      <span @click="goCityList">哈尔滨</span>
      <p>{{title}}</p>
    </header>
    <div class="nav">
      <label>全城</label>
      <label>理我最近</label>
    </div>
    <CinemaContent class="cinema-content"/>
    <CommonFooter :bottom-active="bottomActive"/>
  </div>
</template>

<script>
import CinemaContent from "@/pages/cinema/components/CinemaContent";
import CommonFooter from "@/components/common/CommonFooter";
export default {
  name: "Cinema",
  components: {
    CinemaContent,
    CommonFooter
  },
  data() {
    return {
      bottomActive: 1,
      title: "影院"
    };
  },
  methods: {
    goCityList() {
      this.$router.replace("/cityList");
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 50px;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  z-index: 2;
  background: #fff;
}
header span {
  float: left;
  position: absolute;
  left: 20px;
  font-size: 15px;
  top: 17px;
}
header p {
  line-height: 50px;
  text-align: center;
  font-size: 17px;
  display: inherit;
}
.nav {
  z-index: 2;
  background: #fff;
  width: 100%;
  position: fixed;
  top: 50px;
}
.nav label {
  width: 50%;
  line-height: 50px;
  font-size: 15px;
  display: block;
  float: left;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.cinema-content {
  position: absolute;
  top: 100px;
}
</style>
