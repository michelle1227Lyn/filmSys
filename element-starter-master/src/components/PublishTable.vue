<template>
    <div style="box-shadow: 2px 2px 5px #888888;border-radius:5px;">
        <div style="background-color:#20A0FF;padding:5px;color:white;overflow:hidden;border-radius:5px 5px 0 0">
            <span class="demonstration" style="float:left;padding:5px">资料</span>
        </div>

        <div style="margin:1%">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    :default-sort = "{prop: 'orderId', order: 'descending'}"
            >
                <el-table-column
                        prop="date"
                        label="演出日期"
                        align="center"
                        sortable>
                </el-table-column>

                <el-table-column
                        prop="time"
                        label="演出时间"
                        align="center"
                        sortable>
                </el-table-column>

                <el-table-column
                        prop="hall"
                        label="影厅"
                        align="center"
                        sortable>
                </el-table-column>

                <el-table-column
                        prop="movie"
                        label="电影名"
                        align="center"
                        sortable>
                </el-table-column>

                <el-table-column
                        prop="price"
                        label="价格"
                        align="center"
                        sortable>
                </el-table-column>

                <el-table-column
                        prop="type"
                        label="类型"
                        align="center"
                        sortable>
                </el-table-column>
            </el-table>
        </div>
        
        
        <div class="block" align="center">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalNum">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Vue from "vue";
export default {
  props: ["searchflag"],
  data() {
    return {
      //表格数据

      tableData: [],

      //详情页可见性
      detailDialogVisible: false,

      //被点击当前船舶信息
      nowShipInfo: "",

      //表格当前页
      currentPage: 1,

      //表格数据总量
      totalNum: 0,

      //每页显示数据数量
      pageSize: 10,

      //当前页面的金额
      totalMoney: 0
    };
  },

  methods: {
    loadData: function() {
      this.totalNum = this.tableData.length;
      console.log("totalNum:" + this.totalNum);
    },

    //每页显示数据变更响应
    handleSizeChange(val) {
      this.pageSize = val;
      this.loadData();
    },

    //换页响应
    handleCurrentChange(val) {
      this.currentPage = val;
      this.loadData();
    },

    ...mapActions({
      search: "changePublishQueryFlagAction"
    })
  },

  mounted() {
    this.loadData();
    let that = this;
    this.$http
      .get(
        // "http://192.168.1.104:8080/0621/getPublish?cinema=朵森影院"
        //that.form.movie +
        "http://193.112.94.186:8080/getPublish?cinema=朵森影院"
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
  },

  watch: {
    searchflag(newval, oldval) {
      console(newval);

      if (newval) {
        this.loadData();
        this.search(false);
      }
    }
  }
};
</script>

<style>
</style>
