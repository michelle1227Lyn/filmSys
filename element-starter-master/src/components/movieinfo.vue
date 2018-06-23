<template>

        <div class="filmbox">
            <img src="http://p1.meituan.net/movie/3d17aa5ee07f5d66239d8393bcb8fe5196556.jpg@160w_220h_1e_1c">
            <div class="filmInfo">侏罗纪世界2</div>
            <div class="but">移除</div>
        </div>

</template>
<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        }
    }
</script>
<style>
    .filmbox .filmInfo{
        height: 23px;
        line-height:23px;
    }
    .filmbox .but{
        background-color: #fff;
        color:grey;
        border-radius:1px;
        border:1px solid #ccc;
        height:34px;
        line-height: 34px;
        width:138px;
        display: inline-block;

    }
    .filmbox img{
        height:160px;
        width:140px;
    }
    .filmbox{
        display:inline-block;
        margin:20px 10px;
        height:220px;
        width:140px;
        background-color: black;
        color:#fff;
        cursor:pointer;

    }
    h3{

        text-align: left;
        text-indent:2em;
        color:black;
        size:14px;
        margin:6px 10px 10px 10px;
    }
</style>