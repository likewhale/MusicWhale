<template>
    <div class="top">
        <img src="../assets/01.top.jpg">
        <input type="text" v-model="inputValue" @keyup.enter="toSearch">
    </div>
</template>

<script>
export default {
		data(){
        return{
            inputValue: "",
        }
    },
    methods:{
        toSearch(){
            //如果为空，提示
            if(this.inputValue==""){
                alert("请输入内容")
            }else{
                // this.$router.push('/result')
                // //携带数据
        // this.$router.push("/result?q="+this.inputValue)
        // //or 使用模板字符串
        this.$router.push(`/result?value=${this.inputValue}`)
            }
            // 否则跳转
    }
    }

}
</script>

<style>
.top{
    display:flex;
    /* 开启弹性布局 */
    align-items:center;
    background-color:#f9f9f9;
}
</style>