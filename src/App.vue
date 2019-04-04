<template>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="css">
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

