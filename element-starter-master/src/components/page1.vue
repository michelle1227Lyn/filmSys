<template scope="slot-scope">
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark ">
                    <el-carousel :interval="1000" arrow="always">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <h3>正在热映</h3>
                    <hr/>
                    <div class="filmbox">
                        <img src="http://p1.meituan.net/movie/3d17aa5ee07f5d66239d8393bcb8fe5196556.jpg@160w_220h_1e_1c">
                        <div class="filmInfo">侏罗纪世界2</div>
                        <div class="but">购票</div>
                    </div>
                    <div class="filmbox">
                        <img src="http://p1.meituan.net/movie/3d17aa5ee07f5d66239d8393bcb8fe5196556.jpg@160w_220h_1e_1c">
                        <div class="filmInfo">侏罗纪世界2</div>
                        <div class="but">购票</div>
                    </div>
                    <div class="filmbox">
                        <img src="http://p1.meituan.net/movie/3d17aa5ee07f5d66239d8393bcb8fe5196556.jpg@160w_220h_1e_1c">
                        <div class="filmInfo">侏罗纪世界2</div>
                        <div class="but">购票</div>
                    </div>
                    <div class="filmbox">
                        <img src="http://p1.meituan.net/movie/3d17aa5ee07f5d66239d8393bcb8fe5196556.jpg@160w_220h_1e_1c">
                        <div class="filmInfo">侏罗纪世界2</div>
                        <div class="but">购票</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    <h3>今日票房</h3><hr/>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

    <style>
        .filmbox .filmInfo{
            height: 23px;
            line-height:23px;
        }
        .filmbox .but{
            background-color: #fff;
            color:red;
            border-radius:1px;
            border:1px solid #ccc;
            height:34px;
            line-height: 34px;
            width:138px;
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
        .el-carousel__item h3 {
            color: #475669;
            font-size: 18px;
            opacity: 0.75;
            line-height: 298px;
            margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }

        .el-row {
            margin-bottom: 15px;
        &:last-child {
             margin-bottom: 0;
         }
        }
        .el-col {
            border-radius: 4px;
        }
        .bg-purple-dark{
            background: #99a9bf;
            height: 295px;
        }
        .bg-purple {
            background: #d3dce6;
            height: 320px;
        }
        .bg-purple-light {
            background: #e5e9f2;
            margin:0 0 0 10px;
            height: 320px;
        }
        .grid-content {

            border-radius: 4px;
            min-height: 36px;
        }
        .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
        }
    </style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        }
    }
</script>