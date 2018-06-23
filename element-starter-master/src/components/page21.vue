<template>

    <div >
        <span>正在热映</span>
        <!--<el-button type="text" @click="dialogFormVisible = true" class="button">新增</el-button>-->

        <!--<el-dialog title="收货地址" :visible.sync="dialogFormVisible">-->
            <!--<el-form :model="form">-->
                <!--<el-form-item label="活动名称" :label-width="formLabelWidth">-->
                    <!--<el-input v-model="form.name" auto-complete="off"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="活动区域" :label-width="formLabelWidth">-->
                    <!--<el-select v-model="form.region" placeholder="请选择活动区域">-->
                        <!--<el-option label="区域一" value="shanghai"></el-option>-->
                        <!--<el-option label="区域二" value="beijing"></el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->
            <!--</el-form>-->
            <!--<div slot="footer" class="dialog-footer">-->
                <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
            <!--</div>-->
        <!--</el-dialog>-->
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
    //    export default{
    //        data(){
    //            return {}
    //        }
    //    }

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
                formLabelWidth: '120px'
            };
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