<template>
    <div >
        <span>正在热映</span>
        <br/>
        <hr/>
        <movieinfo></movieinfo>
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

    //创建实例
    import movieinfo from './movieinfo.vue';

    export default {
        data() {
            return {

                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                a:"hello"
            };
        },
        methods:{
            mounted() {
                this.loadData();
                let that = this;
                this.$http
                    .get(
                        // http://193.112.94.186:8080
                        // "http://192.168.1.104:8080/0621/Seller?seller=朵森影院"
                        "http://193.112.94.186:8080/Seller?seller=朵森影院"
                    )
                    .then(function(response) {
                        that.tableData = response.data;
                        that.tableData.forEach(item => {
                            that.totalMoney = that.totalMoney + Number(item.price);
                        });
                        console.log(response);
                        console.log(that.tableData);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
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
    .button{
        position:absolute;
        right:100px;
        top:82px;
    }
</style>