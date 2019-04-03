<template>
  <div ref=wrapper class="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  mounted() {
      
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(wrapper,{
        probeType:1,
        click:true 
    });
    
  }
};
</script>

<style scoped>
</style>
