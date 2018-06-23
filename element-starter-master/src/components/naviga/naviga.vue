<template>
    <div style="background-color: rgb(164, 176, 192); min-height:800px">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="rgb(217, 227, 240)"
                        text-color="black"
                        active-text-color="#7b7878"
                      >
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">电影管理</template>
                        <el-menu-item index="2-1">正在热映</el-menu-item>
                        <el-menu-item index="2-2">即将上映</el-menu-item>
                        <el-menu-item index="2-3">已下架</el-menu-item>
                    </el-submenu>
                    <!--<el-menu-item index="2">电影管理</el-menu-item>-->
                    <el-menu-item index="3">场次管理</el-menu-item>

                    <el-menu-item index="4">影厅管理</el-menu-item>
                    <el-menu-item index="5">销售管理</el-menu-item>
                    <el-menu-item index="6" class="rf">商家登录</el-menu-item>

                </el-menu>
            </el-header>
            <el-main>
                <div style="margin-top:10px">
                <router-view></router-view>
                </div>
            </el-main>
            <el-footer>前端技术 by elementUI ，Vue</el-footer>
        </el-container>
    </div>
</template>
<style>
    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-header .el-menu{
        padding :auto 50px;
    }
    .el-footer{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 50px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        height:700px;
        padding:19px;
    }
    .rf{
        position:absolute;
        right:0;
    }


    body > .el-container {
        margin-bottom: 40px;
    }


</style>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
            }
        },

        methods:{
            handleIconClick(ev) {
                console.log(ev);
            },
            handleSelect(key, keyPath){
                switch(key){
                    case '1':
                        this.$router.push('/Page1');
                        //this.breadcrumbItems  = ['导航一']
                        break;
                    case '2-1':
                        this.$router.push('/Page21');
                        //this.breadcrumbItems  = ['导航二']
                        break;
                    case '2-2':
                        this.$router.push('/Page22');
                        //this.breadcrumbItems  = ['导航二']
                        break;
                    case '2-3':
                        this.$router.push('/Page23');
                        //this.breadcrumbItems  = ['导航二']
                        break;
                    case '3':
                        this.$router.push('/Page3');
                       // this.breadcrumbItems  = ['导航三']
                        break;
                    case '4':
                        this.$router.push('/Page4');
                        // this.breadcrumbItems  = ['导航三']
                        break;
                    case '5':
                        this.$router.push('/Page5');
                        // this.breadcrumbItems  = ['导航三']
                        break;
                    case '6':
                        this.$router.push('/Page6');
                        // this.breadcrumbItems  = ['导航三']
                        break;
                }
            },
        },
    }
</script>