<template>

    <div >
        <span>即将上映</span>
        <br/>
        <hr/>

        <movieinfo :prop="filename"></movieinfo>
        <movieinfo></movieinfo>
        <movieinfo></movieinfo>
        <movieinfo></movieinfo>
        <movieinfo></movieinfo>
        <movieinfo></movieinfo>
        <br/>
        <movieinfo></movieinfo>
        <movieinfo></movieinfo>
        <movieinfo></movieinfo>
        <movieinfo></movieinfo>
        <movieinfo></movieinfo>
        <movieinfo></movieinfo>
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
            }
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