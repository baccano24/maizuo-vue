<template>
  <div class="content">
    <Scroll>
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "@/components/scroll/Scroll";
import HotMovies from '@/pages/home/components/HotMovies'
import ComingMovies from '@/pages/home/components/ComingMovies'
export default {
  name: "MovieContent",
  props: {
    menuIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    Scroll,
    HotMovies,
    ComingMovies
  },
  computed: {
    currentComponent(){
      return this.menuIndex === 0 ? 'HotMovies' : 'ComingMovies';
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixin.styl';

.content {
  position: fixed;
  width: 100%;
  top: 250px;
  bottom: 56px;

  .wrap_content {
    overflow: hidden;
    height: 100%;

    .date {
      padding: 12px 15px 0;
      margin: 0;
      font-size: 14px;
      color: #333;
    }

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
  }
}
</style>
