<template>
    <div  class="playlist-container">
        <!-- 同步 -->
        <div class="top-card">
            <div class="icon-wrap">
                <!-- 封面 -->
                <img :src="topList.coverImgUrl" alt=""/>    
            </div>
            <div class="content-wrap">
                <div class="tag">精品歌单</div>
                <!-- 标题 -->
                <div class="title">
                    {{ topList.name }}
                </div>
                <!-- 介绍 -->
                <div class="info">
                    {{ topList.description }}
                </div>
            </div>
            <!-- 背景 -->
            <img :src="topList.coverImgUrl" alt="" class="bg"/>
            <div class="bg-mask" ></div>
        </div>
        <div class="tab-container">
            <!-- tab栏 顶部 -->
            <div class="tab-bar">
                <span class="item"
                    :class="{active:tag=='全部'}"
                    @click="$event =>tag='全部'"
                > 
                    全部
                </span>
                <span class="item"
                    :class="{active:tag=='欧美'}"
                    @click="$event =>tag='欧美'"
                > 
                    欧美
                </span>
                <span class="item"
                    :class="{active:tag=='华语'}"
                    @click="$event =>tag='华语'"
                > 
                    华语
                </span>
                <span class="item"
                    :class="{active:tag=='流行'}"
                    @click="$event =>tag='流行'"
                > 
                    流行
                </span>
                <span class="item"
                    :class="{active:tag=='说唱'}"
                    @click="$event =>tag='说唱'"
                > 
                    说唱
                </span>
                <span class="item"
                    :class="{active:tag=='摇滚'}"
                    @click="$event =>tag='摇滚'"
                > 
                    摇滚
                </span>
                <span class="item"
                    :class="{active:tag=='民谣'}"
                    @click="$event =>tag='民谣'"
                > 
                    民谣
                </span>
                <span class="item"
                    :class="{active:tag=='电子'}"
                    @click="$event =>tag='电子'"
                > 
                    电子
                </span>
                <span class="item"
                    :class="{active:tag=='轻音乐'}"
                    @click="$event =>tag='轻音乐'"
                > 
                    轻音乐
                </span>
                <span class="item"
                    :class="{active:tag=='影视原声'}"
                    @click="$event =>tag='影视原声'"
                > 
                    影视原声
                </span>
                <span class="item"
                    :class="{active:tag=='ACG'}"
                    @click="$event =>tag='ACG'"
                > 
                    ACG
                </span>
                <span class="item"
                    :class="{active:tag=='怀旧'}"
                    @click="$event =>tag='怀旧'"
                > 
                    怀旧
                </span>
                <span class="item"
                    :class="{active:tag=='治愈'}"
                    @click="$event =>tag='治愈'"
                > 
                    治愈
                </span>
                <span class="item"
                    :class="{active:tag=='旅行'}"
                    @click="$event =>tag='旅行'"
                > 
                    旅行
                </span>
            </div>
            <!-- tab的内容区域 -->
            <div class="tab-content">
                <div class="items">
                    <div class="item" v-for="(item,index) in list" :key="index">
                        <div class="img-wrap">
                            <div class="num-wrap">
                                播放量
                                <span class="num">{{ item.playCount }}</span>
                            </div>
                            <img :src="item.coverImgUrl" alt=""/>
                            <span class="iconfont icon-play"></span>
                        </div>
                        <P class="name">{{ item.name }}</P>
                        </div>
                </div>
            </div>
        </div>
        <!--分页器
        total 总条数
        current-page 当前页码
        page-size 每页多少条数据
        current-change 页码改变事件
        -->
        <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="10"
        ></el-pagination>    
    </div>
    
    
</template>

<script>
//导入axios
import axios from 'axios'
export default {
    name:'recommend',
    data(){
        return{
            //总条数
            total:0,
            //页码
            page:1,
            //顶部的推荐歌单
            topList:[],
            //歌单列表
            list:[],
            //当前选择的数据
            tag:'全部'
        }
    },
    //侦听器
    watch:{
        tag(){
            //顶部的精品歌单
            this.topData()
            //歌单列表
            this.listData()
            //修改页码为1
            this.page=1
        }
    },
    created(){
        //顶部的精品歌单
        this.topData()
        //歌单列表
        this.listData()
    },
    methods:{
        //抽取的方法1 顶部的数据
        topData(){
            axios({
                url:'https://autumnfish.cn/top/playlist/highquality',
                method:'get',
                params:{
                    limit:1,
                    //分类数据
                    cat:this.tag
                }
            }).then(res=>{
                //console.log(res)
                this.topList=res.data.playlists[0]
            })
        },
        //抽取的方法2 列表数据
        listData(){
            axios({
                url:'https://autumnfish.cn/top/playlist/',
                method:'get',
                params:{
                    limit:10,
                    // 偏移值，起始的值（页码-1）*每页的数据条数，也就是第n页的第一条数据角标
                    offset:(this.page -1)*10,
                    //分类数据
                    cat:this.tag
                }
            }).then(res=>{
                //console.log(res)
                //保存总条数
                this.total=res.data.total
                //保存数据
                this.list=res.data.playlists
            })
        },
        //页码改变事件
        handleCurrentChange(val){
            //console.log(`当前页：${val}`)
            //保存页码
            this.page=val
            //重新获取数据
            this.listData()
        }
    }
}
</script>

<style>

</style>