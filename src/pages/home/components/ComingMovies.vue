<template>
  <div>
    <div v-for="(group,index) of comingList" :key="index">
      <div class="date">
        <p>{{ group.date }} {{ weeked(group.date) }}</p>
      </div>
      <div class="movie" v-for="coming of group.items" :key="coming.id">
        <div class="avatar">
          <img v-lazy="coming.img" />
          <span class="iconfont icon-shijue3dimax" v-if="coming.version">
          </span>
        </div>
        <div class="wrap scale-1px">
          <div class="desc">
            <div class="title">
              <span>{{ coming.nm }}</span>
            </div>
            <div class="score">
              <span class="suffix">观众评</span>
              <span class="grade">{{ coming.sc }}</span>
            </div>
            <p class="actor">主演: {{ coming.star }}</p>
            <p class="show-info">{{ coming.showInfo }}</p>
          </div>
          <div class="btn">
            <a href="javascript" class="ys">预售</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ComingMovies",
    data() {
      return {
        comingList: []
      };
    }
  };
</script>
