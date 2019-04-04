<template>
  <div>
    <div class="city-fixed" @click='goCityList'>
      <span>北京</span>
      <i style="font-size: 10px;"></i>
    </div>
  </div>
</template>

<script>
export default {
    name: "City",
    methods: {
      goCityList(){
        this.$router.replace('/cityList')
      }
    },
};
</script>

<style scoped>
.city-fixed {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
}
div {
    box-sizing: border-box;
}

</style>
