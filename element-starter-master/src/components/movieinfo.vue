<template>

        <div class="filmbox">
            <img :src='movie.images.small'>
            <div class="filmInfo" >{{movie.title}}</div>
            <div class="but">{{operation}}</div>
        </div>

</template>
<script type="text/ecmascript-6">
    export default{
        props:['movie'],
        data(){
            return {
                //filename:'侏罗纪世界2',//v-model="filename"
                operation:'下架',　　　 /*如果是page21正在热映界面，则显示的操作按钮是“下架”，
                                            是page22即将上映界面，则显示的操作按钮是"上映"
                                                  23已下架                         已下架 ，并且该按钮disable不可选*/
            }
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