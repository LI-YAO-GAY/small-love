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
            <el-button type="primary" @click="showEditDialog(scope.row)">
              <i class="el-icon-edit m-r-5"></i>修改
            </el-button>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">
              <i class="el-icon-delete m-r-5"></i>删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
     
     <el-dialog
          title="修改用户"
          :visible.sync="editDialogVisible"
          width="50%"
          @close="editDialogClosed">
          <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
            <el-form-item label="名称">
              <el-input v-model="editForm.NAME" disabled></el-input>
            </el-form-item>
            <el-form-item label="现价">
              <el-input v-model="editForm. ORI_PRICE"></el-input>
            </el-form-item>
            <el-form-item label="原价">
              <el-input v-model="editForm. PRESENT_PRICE"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editUserInfo">确 定</el-button>
          </span>
        </el-dialog>



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
          name="商品信息.xls"
          :Go="Go"
        >
          <div class="m-t-20">
            <el-button type="primary">导出xls</el-button>
          </div>
        </download-excel>
        <download-excel
          class="export-excel-wrapper"
          :data="tableData"
          :fields="json_fields"
          name="商品信息.csv"
          :Go="Go"
        >
          <div class="m-t-20">
            <el-button type="danger">导出csv</el-button>
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
      addForm: {
        NAME: '',
        GOODS_SERIAL_NUMBER: '',
        ORI_PRICE: '',
        PRESENT_PRICE: ''
      },
      text: "",
      searchName: "",
      tableData: [],
      currentpage: 1,
      pagesize: 100,
      delVisible: false, //删除提示弹框的状态
      editDialogVisible:false,
      msg: "", //记录每一条的信息，便于取id
      delarr: [], //存放删除的数据
      json_fields: {
        商品名称: "c",
        商品编码: "GOODS_SERIAL_NUMBER",
        原价: "ORI_PRICE",
        现价: "PRESENT_PRICE"
      },
      //表数据
      json_data: [],
      //表描述
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
    async showEditDialog(id) {
      // console.log(id)
      const {data: res} = await this.$http.get('users/' + id)
      if (res.meta.status !== 200) {
        return this.$message.error('查询用户信息失败！')
      }
      this.editForm = res.data
      this.editDialogVisible = true
    },
    // 监听修改用户对话框的关闭
    editDialogClosed () {
      this.$refs.editFormRef.resetFields()
    },
    editUserInfo () {
      this.$refs.editFormRef.validate(async valid => {
        console.log(valid)
        if (!valid) return
        // 发起修改用户信息的数据请求
        const {data: res} = await this.$http.put('users/' + this.editForm.id, {
          email: this.editForm.email,
          mobile: this.editForm.mobile
        })
        if (res.meta.status !== 200) {
          return this.$message.error('修改失败！')
        }
        // 关闭对话框
        this.editDialogVisible = false
        // 更新数据列表
        this.getUserList()
        // 提示修改成功
        this.$message.success('修改成功！')
      })
    },
    Go() {
      this.json_data = this.tableData.map(item => {
        if (item.AMOUNT == 10000) {
          //填充符合条件的导出数据
          return item;
        }
      });
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
  computed: {
    searchResult() {
      let list = [];
      this.list = this.tableData;
      this.tableData.NAME.map(function(row) {
        if (row.indexOf(this.text) > -1) {
          return list.push(row);
        }
      });
      return list;
    }
  }
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
