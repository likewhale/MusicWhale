<template>
    <div class="discovery-container">
        <!-- 轮播图 -->
        <el-carousel :interval="4000" type="card" height="200px">
            <!-- 循环获取到的数据接口 -->
            <el-carousel-item v-for="(item,index) in banner" :key="index">
                <img :src="item.imageUrl" alt=""/> <!-- vue动态绑定一个变量的值为元素的某个属性的时候，会在变量前面加上冒号： -->
            </el-carousel-item>
        </el-carousel>
        <!-- 推荐歌单 -->
        <div class="recommend">
            <h3 class="title">
                推荐歌单
                </h3>
            <div class="items">
                <div class="item" v-for="(item,index) in list" :key="index">
                    <div class="img-wrap">
                        <div class="desc-wrap">
                            <span class="desc">编辑推荐：一起探索这个未知的音乐罐头吧！</span>
                        </div >
                        <img :src="item.picUrl" alt=""/>
                        <span class="iconfont icon-play"></span>
                    </div>
                    <p class="name">{{ item.name }}</p>
                </div>
            </div>
        </div>
        <!-- 最新音乐 -->
        <div class="news">
            <h3 class="title">
                最新音乐
                </h3>
            <div class="items">
                <div class="item" v-for="(item,index) in songs" :key="index">
                    <div class="img-wrap">
                        <!-- 封面 -->
                        <img :src="item.picUrl" alt="" />
                        <span @click="playMusic(item.id)" class="iconfont icon-play"></span>
                    </div>
                    <div class="song-wrap">
                        <!-- 歌名 -->
                        <div class="song-name">{{ item.name }}</div>
                        <!-- 歌手名 -->
                        <div class="singer">{{ item.song.artists[0].name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 推荐mv -->
        <div class="mvs">
            <h3 class="title">推荐MV</h3>
            <div class="items">
                <div class="item" v-for="(item,index) in mvs" :key="index">
                    <div class="img-wrap">
                        <img :src="item.picUrl" alt="" />
                        <span class="iconfont icon-play"></span>
                        <div class="num-wrap">
                            <div class="iconfont icon-play"></div>
                            <!-- 播放次数统计 -->
                            <div class="num">{{ item.playCount }}</div>
                        </div>
                    </div>
                    <div class="info-wrap">
                        <!-- mv名 -->
                        <div   div class="name">{{ item.name }}</div>
                        <!-- 歌手名 -->
                        <div class="singer">{{ item.artistName }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//导入axios
import axios, { Axios } from 'axios'
export default {
    name:'discovery',
    data(){
        return{
            //轮播图
            banner:[],
            //推荐歌单
            list:[],
            //最新音乐
            songs:[],
            //推荐mv
            mvs:[]
        }
    },
    created(){
        // console.log("Created")
        //轮播图接口
        axios({
            url: 'https://autumnfish.cn/banner',
        method: 'get'
        }).then(res=>{
            console.log(res)
            this.banner=res.data.banners
            console.log(1234)
        })

        //推荐歌单
        axios({
        url: 'https://autumnfish.cn/personalized',
        method: 'get',
        params: {
          // 获取的数据量
        limit: 10
        }
        }).then(res => {
        console.log(res)
        this.list = res.data.result
        })

        //最新音乐
        axios({
        url: 'https://autumnfish.cn/personalized/newsong',
        method: 'get'
        }).then(res => {
        // console.log(res)
        this.songs = res.data.result
        })

        //最新mvv
        axios({
            url:'https://autumnfish.cn/personalized/mv',
            method:'get',
        }).then(res=>{
            console.log(res)
            console.log("最新mv")
            this.mvs=res.data.result
        })
    },
    methods:{
        playMusic(id){
            //console.log(id)
            axios({
                url:'https://autumnfish.cn/song/url',
                method:'get',
                params:{
                    id
                }
            }).then(res=>{
                //console.log(res)
                let url=res.data.data[0].url
                //console.log(this.$parent.musicUrl)
                //设置给父组件的播放地址
                this.$parent.musicUrl=url
            })
        }
    }
};
</script>

<style></style>