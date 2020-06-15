<template>
  <div>
    <div class="main p-20">
      <el-input v-model="searchName" placeholder="请输入你想搜索的商品名称"></el-input>
      <el-table
        :data="tableData.slice((currentpage - 1)*pagesize,currentpage*pagesize)"
        style="width: 100%"
      >
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
        <el-table-column label="现价">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.PRESENT_PRICE}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">
              <i class="el-icon-edit m-r-5"></i>修改
            </el-button>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">
              <i class="el-icon-delete m-r-5"></i>删除
            </el-button>
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

      <div class="flex">
        <download-excel
          class="export-excel-wrapper"
          :data="tableData"
          :fields="json_fields"
          name="filename.xls"
        >
          <div class="m-t-20">
            <el-button type="primary" @click="Goxls">导出xls</el-button>
          </div>
        </download-excel>
        <download-excel
          class="export-excel-wrapper"
          :data="tableData"
          :fields="json_fields"
          name="filename.csv"
        >
          <div class="m-t-20">
            <el-button type="danger" @click="Gocsv">导出csv</el-button>
          </div>
        </download-excel>
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
      delVisible: false, //删除提示弹框的状态
      msg: "", //记录每一条的信息，便于取id
      delarr: [], //存放删除的数据
      json_fields: {
        "Complete name": "NAME",
        Price: "ORI_PRICE",
        Number: "GOODS_SERIAL_NUMBER"
      },
      json_data: [],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]
    };
  },
  methods: {
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    export2Excel() {
     

    handleDelete(index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if (!this.delVisible) {
            this.tableData.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          }
        })
        .catch(() => {});
    },
    handleEdit() {},
    Goxls() {
      export_json_to_excel(tHeader, data, "商品管理列表");
    },
    Gocsv() {
      export_json_to_excel(tHeader, data, "商品管理列表");
    },
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
