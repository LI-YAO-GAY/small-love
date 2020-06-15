<template>
  <div>
    <div class="main p-20">
      <el-input v-model="searchName" placeholder="请输入你想搜索的商品名称"></el-input>
      <el-table :data="tableData.slice((currentpage - 1)*pagesize,currentpage*pagesize)" style="width: 100%">
        <el-table-column label="名称" width="400">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.NAME}}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品编号">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.GOODS_SERIAL_NUMBER}}</span>
          </template>
        </el-table-column>
        <el-table-column label="原价" width="100">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.ORI_PRICE}}</span>
          </template>
        </el-table-column>
        <el-table-column label="现价" >
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.PRESENT_PRICE}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button  @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button  type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentpage"
          :page-sizes="[100, 200, 300, 400,500,600,700]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      searchName: "",
      tableData: [],
      currentpage: 1,
      pagesize: 100,
      flag:false
    };
  },
  methods: {
    handleDelete(index, row) {
       this.flag = true
    },
    handleEdit(index, row) {},
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentpage = val;
    },
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          console.log(res.data.data);
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-input {
  width: 300px;
  margin-bottom: 20px;
}
.main {
  background: rgb(240, 242, 245);
  position: relative;
}
</style>
