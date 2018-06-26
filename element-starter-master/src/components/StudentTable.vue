<template>
    <div style="box-shadow: 2px 2px 5px #888888;border-radius:5px;">
        <div style="background-color:#20A0FF;padding:5px;color:white;overflow:hidden;border-radius:5px 5px 0 0">
            <span class="demonstration" style="float:left;padding:5px">资料 共计：{{totalMoney}} 元</span>
        </div>

        <div style="margin:1%">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    :default-sort = "{prop: 'orderId', order: 'descending'}"
            >
                <el-table-column
                        prop="PublishDate"
                        label="演出日期"
                        align="center"
                        sortable>
                </el-table-column>

                <el-table-column
                        prop="PublishTime"
                        label="演出时间"
                        align="center"
                        sortable>
                </el-table-column>

                <el-table-column
                        prop="buyer"
                        label="购买者"
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
                        prop="orderId"
                        label="订单号"
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
      // var publishDate = this.$store.state.student.studentForm.id;       //演出日期
      var publishTime = this.$store.state.student.studentForm.id.replace(
        /[^0-9]/gi,
        ""
      ); //演出时间
      var movie = this.$store.state.student.studentForm.name; //电影名

      var tabledata = [];
      var tmp_flag = -1;
      console.log("publishTime" + publishTime);
      console.log("movie" + movie);

      if (publishTime || movie) {
        this.totalMoney = 0 ;
        if (publishTime && movie) {
          tmp_flag = 2;
        } else {
          if (publishTime) {
            tmp_flag = 1;
          } else {
            tmp_flag = 0;
          }
        }
      } else {
        console.log("填写搜索信息。");
      }

      switch (tmp_flag) {
        case -1:
          console.log("tmp_flag = -1");
          break;
        case 0:
          this.tableData.forEach(item => {
            if (item.movie == movie) tabledata.push(item);
          });
          break;
        case 1:
          this.tableData.forEach(item => {
            if (item.PublishTime.replace(/[^0-9]/gi, "") == publishTime)
              tabledata.push(item);
          });
          break;
        case 2:
          this.tableData.forEach(item => {
            if (
              item.PublishTime.replace(/[^0-9]/gi, "") == publishTime &&
              item.movie == movie
            )
              tabledata.push(item);
          });
          break;
      }

      this.tableData = tabledata;
      this.tableData.forEach(item => {
        this.totalMoney = this.totalMoney + Number(item.price);
      });

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
      search: "changeStudentQueryFlagAction"
    })
  },

  mounted() {
    this.loadData();
    // why is the f**king let. God, deam it.
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
  },

  watch: {
    searchflag(newval, oldval) {
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
