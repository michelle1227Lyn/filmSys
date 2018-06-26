<template>
    <div style="border-radius:5px;">
        <div style="border:1px solid;background-color:#FFFFFF;box-shadow: 2px 2px 5px #888888;overflow: hidden;border-radius:5px;">
            <div style="background-color:#20A0FF;padding:5px;color:white;">
                资料查询
            </div>
            <br/>

            <el-form ref="form" :model="form" :inline=true label-width="70px" label-position="left" style="margin-left: 5%">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="7" :md="7" :lg="6">
                        <el-form-item label="电影名" prop="movie">
                            <el-input v-model="form.movie"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="7" :md="7" :lg="6">
                    <el-form-item label="类型" prop="type">
                            <el-input v-model="form.type"></el-input>
                        </el-form-item>
                    </el-col>

                    <!-- <el-col :xs="24" :sm="7" :md="7" :lg="6">
                        <el-form-item label="电影院" prop="cinema">
                            <el-input v-model="form.cinema"></el-input>
                        </el-form-item>
                    </el-col> -->

                     <el-col :xs="24" :sm="7" :md="7" :lg="6">
                        <el-form-item label="价格" prop="price">
                            <el-input v-model="form.price"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="7" :md="7" :lg="6">
                        <el-form-item label="影厅" prop="hall">
                            <el-input v-model="form.hall"></el-input>
                        </el-form-item>
                    </el-col>

                                  
                </el-row>

                <el-row :gutter="10">                                       
                    <el-col :xs="24" :sm="7" :md="7" :lg="6">
                        <el-form-item label="日期" prop="date">
                            <el-input 
                                v-model="form.date" 
                                placeholder="20YY-MM-DD">
                            </el-input>

                      <!-- <el-date-picker
                         prop="date"
                         v-model="form.date"
                         type="date"
                         placeholder="选择日期">
                        </el-date-picker> -->
                        </el-form-item>

                    </el-col>

                    <el-col :xs="24" :sm="7" :md="7" :lg="6">
                        
                        <el-form-item label="时间"  prop="time">
                            <el-input 
                                v-model="form.time" 
                                placeholder="HH:MM:SS">                    
                            </el-input>
                        <!-- <el-time-picker 
                         arrow-control 
                         prop="time"
                         v-model="form.time"
                         :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                         }"
                         placeholder="任意时间点"> 
                        </el-time-picker>-->
                        </el-form-item>


                    </el-col>   



                </el-row>
                

                <el-form-item style="float:right">
                    <el-button type="primary" @click="resetForm('form')">清空</el-button>
                    <el-button type="primary" @click="submitForm()">创建</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      //提交的表单
      form: {
        id: "",
        movie: "",
        cinema: "",
        date: "",
        time: "",
        type: "",
        price: "",
        hall: ""
      },
      submitFormAjax: "",
      options: [
        {
          value: "选项1",
          label: "外语3D"
        },
        {
          value: "选项2",
          label: "外语"
        },
        {
          value: "选项3",
          label: "国语3D"
        },
        {
          value: "选项4",
          label: "国语"
        }
      ]
    };
  },

  methods: {
    ...mapActions({
      saveFormVal: "changePublishFormAction",
      search: "changePublishQueryFlagAction"
    }),

    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //提交表单
    submitForm: function() {
      this.search(true);
      this.submitFormAjax();
      this.resetForm("form");
    }
  },

  mounted() {
    this.saveFormVal(this.form);
    let that = this;

    that.submitFormAjax = function() {
      this.$http
        .get(
            
            "http://193.112.94.186:8080/toPublish?movie=" +
        //   "http://192.168.1.104:8080/0621/toPublish?movie=" +
            that.form.movie +
            "&cinema=朵森影院" +
            // that.form.cinema +
            "&date=" +
            that.form.date +
            "&time=" +
            that.form.time +
            "&type=" +
            that.form.type +
            "&price=" +
            that.form.price +
            "&hall=" +
            that.form.hall
        )
        .then(function(response) {
          alert("成功");
        })
        .catch(function(error) {
          alert("失败");
        });
    };
  },

  computed: {
    publishTypeList() {
      return this.$store.state.navi.publishTypeList;
    }
  }
};
</script>

<style>
</style>
