<template>
  <Scroll>
    <keep-alive>
      <ul class="cinema-list">
        <li class="cinema-list-item">
          <a
            href="#/cinema/4071/film"
            class="cinema-item-wrap"
            data-enter-time="1554879725"
            data-click-fun="track_f_484852"
          >
            <div class="cinema-info-lf cinema-info">
              <span class="cinema-name">上海浙江电影院</span>
              <span class="cinema-address">上海市浙江中路123号（近福州路）</span>
            </div>
            <div class="cinema-info-rt cinema-info">
              <div class>
                <span class="cinema-lowPrice price-fmt">
                  <i>￥</i>
                  <span class="interge" style="font-size: 15px;">23</span>
                  <span style="display: none;">.</span>
                  <span class="decimal" style="font-size: 10px;"></span>
                </span>
                <span class="upon">起</span>
              </div>
              <span class="cinema-gpsAddress">距离未知</span>
            </div>
          </a>
        </li>
      </ul>
    </keep-alive>
  </Scroll>
</template>

<script>
import Scroll from "@/components/scroll/Scroll";
import { getCinemaList } from "@/api/cinema.js";
export default {
  name: "CinemaContent",
  data() {
    return {
      cinemaList: []
    };
  },
  components: {
    Scroll
  },
  activated() {
    getCinemaList(res => {
      if (res.code == 1) {
        this.cinemaList = res.data;
      }
    });
  }
};
</script>

<style scoped>
</style>
