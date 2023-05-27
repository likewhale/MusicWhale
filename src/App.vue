<template>
  <div>
    <!-- app
    <input type="button" value="点我试试" @click="sayHi"/> -->
    <!-- 导入、注册好之后直接使用头部组件 -->
    <top></top>
    <!-- 主体组件 -->
    <index></index>
  </div>
</template>

<script>
//导入
import top from './components/01.top.vue'
import index from './components/02.index.vue'
export default {
  //注册
  components:{
    top,//top:top可以简写成top
    index,
  },
  methods:{
    sayHi: function(){
      alert("你好 ")
    }
  }

}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
</style>