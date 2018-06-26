<template>
    <div>
        <el-dialog title='商 家 登 录'  :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密  码" prop="checkPass" :label-width="formLabelWidth">
                    <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false"> 取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">  登 录</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogTableVisible: false,
                dialogFormVisible: true,
                form: {
                    name: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    pass:''
                },
                formLabelWidth: '120px',
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
            }
            };
        }
    };
</script>
<style>

</style>