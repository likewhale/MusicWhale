<template>
    <div>
        <img src="../assets/07.result.jpg" alt="">
    </div>
</template>

<script>
export default {
    //使用生命周期函数：created
    //回调函数，添加之后自动执行
    //内部可以通过this 访问到value实例
    created(){
        console.log(this.$route.query.value)
    }
}
</script>

<style>

</style>