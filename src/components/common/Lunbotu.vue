<template>
  <el-carousel style="height:200px" :interval="5000" arrow="always">
    <el-carousel-item v-for="item in HomeLunbo" :key="item.id">
    <img :src="item.items.img" class="banner_img" width="100%"/>
    <p>{{item}}</p>
    </el-carousel-item>
  </el-carousel>
</template>


<script>
import {getHomeLunbo} from '@/api/lunbo.js'
export default {
  data(){
    return{
      HomeLunbo:[]
    }
  },
  activated() {
    getHomeLunbo().then(res => {
      if (res.code == 1) {
        console.log(res.data)
        this.HomeLunbo=res.data
        console.log(this.HomeLunbo[0].items.img)
      }
    });
  }
  // data(){
  //   return{
  //     bannerData:[
  //     {url:'https://static.maizuo.com/v5/upload/69d58c31feb894f3142461b7357ef81c.jpg?x-oss-process=image/quality,Q_70',id:1},
  //     {url:'https://static.maizuo.com/v5/upload/1cb61fd417dfa2add09bc72d336f6ed1.jpg?x-oss-process=image/quality,Q_70',id:2},
  //     {url:'https://static.maizuo.com/v5/upload/503e813bd9df6a3c463e6f475a7e6703.jpg?x-oss-process=image/quality,Q_70',id:3},
  //     {url:'https://static.maizuo.com/v5/upload/8fd3a177f34793eca62d9faad60a44f4.jpg?x-oss-process=image/quality,Q_70',id:4},
  //     {url:'https://static.maizuo.com/v5/upload/1c630f6fd20828be0ea601e301747f03.jpg?x-oss-process=image/quality,Q_70',id:5},
  //     {url:'https://static.maizuo.com/b03a32d20eac5438d8d130714d4141b9.jpg?x-oss-process=image/quality,Q_70',id:6},
      
  //   ]
  //   }
  // }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  /* .el-carousel__item:nth-child(1) {
    background-image: url(../assets/images/banner1.png);
  } */
  .el-carousel__item:nth-child(2n) {
    background-color: #99bfa9;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #77a1d1;
  }
  

</style>