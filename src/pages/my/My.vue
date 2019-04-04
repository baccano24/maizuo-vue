<template>
  <transition name="slide-fade">
    <div>
      我的
      <CommonFooter :bottom-active="bottomActive"/>
    </div>
  </transition>
</template>
<script>
import CommonFooter from "@/components/common/CommonFooter";
export default {
  name: "My",
  components: {
    CommonFooter
  },
  data() {
    return {
      bottomActive: 3
    };
  }
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
