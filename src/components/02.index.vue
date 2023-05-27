<template>
  <div class="index">
    <!-- 导航区域 -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discovery">
            <span class="iconfont icon-find-music"></span>
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/playlists">
            <span class="iconfont icon-music-list"></span>
            推荐音乐
          </router-link>
        </li>
        <li>
          <router-link to="/songs">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/mvs">
            <span class="iconfont icon-"></span>
            最新mv
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 右侧的容器 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 播放标签 -->
    <div class="player" style="position: fixed; bottom: 0px; left: 0px">
      <!-- autoplay 自动播放 -->
      <audio :src="musicUrl" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
// import discovery from '../views/03.discovery.vue'
// import playlists from '../views/04.playlists.vue'
// import songs from '../views/05.songs.vue'
// import mvs from '../views/06.mvs.vue'

export default {
  // components:{
  // discovery
  // },
  name: 'index',
  data () {
    return {
      musicUrl:
        'http://m7.music.126.net/20200303182550/8aa5971b1630d1527a922ccd2b97f392/ymusic/035d/0109/520e/478f86cc9f6c6539f7c8ed3e06c1bf8e.mp3'
    }
  }
}
</script>

<style>
.index {
  display: flex;
  height: 830px;
}
.index .nav {
  width: 200px;
  background-color: rgb(237, 237, 237);
}
.index .nav li {
  text-align: center;
  margin: 10px;
}
.main {
  /* background-color: orange; */
  flex: 1;
  /* 使用剩余的尺寸 */
}
a.router-link-active {
  background-color: orange;
  color: white;
}
</style>
