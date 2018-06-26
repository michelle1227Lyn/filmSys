<template>
    <div >
        <span>即将上映</span>
        <br/>
        <hr/>
        <movieinfo v-for="movie in movies" :key="movie.id"  :movie="movie"> </movieinfo>
        <br/><br/>
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
                filename:'page222'
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