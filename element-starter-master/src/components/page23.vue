<template>

    <div >
        <span>已下架</span>
        <br/>
        <hr/>
        <movieinfo v-for="movie in movies" :key="movie.id"  :movie="movie"> </movieinfo>><br/>
        <div class="block">
            <el-pagination
                    :page-size="20"
                    :pager-count="11"
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    //    export default{
    //        data(){
    //            return {}
    //        }
    //    }
    //创建实例
    import movieinfo from './movieinfo.vue';

    export default {
        data () {
            return {
                filmname:'你的名字'
                , movies:[]
            }
        },
        mounted() {
            // this.loadData();
            let that = this;
            this.$http
                .get(
                    'api/movie/in_theaters'
                )
                .then(function(response) {
//                        that.tableData = response.data;
//                        that.tableData.forEach(item => {
//                            that.totalMoney = that.totalMoney + Number(item.price);
//                        });
                    that.movies=response.data.subjects;
                    console.log(response);
                    console.log(that.movies);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        components: {
            'movieinfo': movieinfo
        }
    }
//       mounted: function () {
//            let that = this;
//            // 我也不知道为什么要把this转变为that
//            this.$http
//                .get(
//                    "http://193.112.94.186:8080/Seller?seller=朵森影院"
//                    //这个就是发送的地址，问号后面就是参数，等号后面是值（多个参数用&连接）
//                )
//                .then(function(response) {
//                    console.log(response);
//                    //这里是写如果成功了，要运行些什么,我是把返回的json输出一下
//                })
//                .catch(function(error) {
//                    console.log(error);
//                    //这里是写如果失败了，要如何如何
//                });
//        }

</script>
<style>
    span{
        position:absolute;
        left: 57px;
        top: 82px;
        font-weight:bold;
        font-size:20px;
        color: #17607d;
    }

</style>