<template>
  <Scroll class="wrap_content">
    <div>
      <div v-for="(group,index) of comingList" :key="index">
        <div class="date" style="padding-left:20px;font-size:12px;line-height:20px;">
          <p>{{ group.date }}{{weekend(group.date)}}</p>
        </div>
        <div class="movie" v-for="coming of group.items" :key="coming.id">
          <div class="avatar">
            <img v-lazy="coming.img">
            <span class="iconfont icon-shijue3dimax" v-if="coming.version"></span>
          </div>
          <div class="wrap scale-1px">
            <div class="desc">
              <div class="title">
                <span>{{ coming.nm }}</span>
              </div>
              <div class="score">
                <span class="grade">{{ coming.sc }}</span>
                <span class="suffix">人想看</span>
              </div>
              <p class="actor">主演: {{ coming.star }}</p>
              <p class="show-info">{{ coming.showInfo }}</p>
            </div>
            <div class="btn">
              <a href="javascript:;" class="ys">预售</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "@/components/scroll/Scroll";
import { getComingMovies } from "@/api/home";
export default {
  name: "ComingMovies",
  data() {
    return {
      comingList: []
    };
  },
  components:{
    Scroll
  },
  methods: {
    weekend(date) {
      var day = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      // console.log(typeof date);
      date = new Date(date);
      // console.log(date.getDay())
      return day[date.getDay()];
    }
  },
  activated() {
    getComingMovies().then(res => {
      if (res.code == 1) {
        this.comingList = res.data;
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixin.styl';

.movie {
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #fff;

  .avatar {
    flex: 0 0 64px;
    height: 90px;
    margin-top: 12px;

    img {
      width: 64px;
      height: 90px;
    }
  }

  .wrap {
    flex: 1;
    margin-left: 12px;
    position: relative;

    .desc {
      width: 200px;
      padding-top: 10px;
      padding-bottom: 6px;

      .title {
        height: 24px;
        margin-bottom: 7px;
        line-height: 24px;
        overflow: hidden;

        .icon-shijue3dimax {
          font-size: 40px;
          vertical-align: middle;
          color: #3c9fe6;
        }
      }

      .score {
        font-size: 13px;
        color: #666;

        .grade {
          font-weight: 700;
          color: #faaf00;
          font-size: 15px;
        }
      }

      .actor {
        font-size: 13px;
        color: #666;
        margin-top: 6px;
        line-height: 15px;
        no-wrap();
      }

      .show-info {
        margin-top: 6px;
        line-height: 15px;
        font-size: 13px;
        color: #666;
      }
    }

    .btn {
      font-size: 12px;
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 0;
      height: 27px;
      margin: auto;

      .go {
        display: inline-block;
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        box-sizing: border-box;
        background-color: #f03d37;
        color: #fff;
        border-radius: 4px;
        white-space: nowrap;
        font-size: 12px;
        cursor: pointer;
        text-decoration: none;
      }

      .ys {
        display: inline-block;
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        box-sizing: border-box;
        background-color: #3c9fe6;
        color: #fff;
        border-radius: 4px;
        white-space: nowrap;
        font-size: 12px;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
</style>
