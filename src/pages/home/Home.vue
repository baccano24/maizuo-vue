<template>
  <div>
    <City />
    <Lunbotu class="lunbotu"/>
    <NavMenu :actived-menu-index="activedMenuIndex" @change="changeActiveMenuIndex"/>
    <MovieContent :menu-index="activedMenuIndex"/>
    <CommonFooter @click="show = !show"/>
  </div>
</template>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import City from "./components/City";
import NavMenu from "./components/NavMenu";
import Lunbotu from "@/components/common/Lunbotu";
import MovieContent from "@/components/common/MovieContent";
import CommonFooter from "@/components/common/CommonFooter";
export default {
  name: "Home",
  components: {
    City,
    Lunbotu,
    NavMenu,
    MovieContent,
    CommonFooter
  },
  data() {
    return {
      activedMenuIndex: 0,
      show: true
    };
  },
  methods: {
    changeActiveMenuIndex(index) {
      this.activedMenuIndex = index;
    }
  }
};
</script>

<style scoped>
.lunbotu {
  height: 200px;
}
.slide-fade-enter-active {
  transition: all 0.3s;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(10px);
  opacity: 0;
}
</style>
