<template>
  <div>
    <div class="main p-l-20 p-r-20"> 
      <el-table :data="tableData" style="width: 100%">
        <el-table-column 
        label="Order_No" 
        >     
        <template slot-scope="scope">
           <span style="margin-left: 10px">{{scope.row.num}}</span>
              </template>     
        </el-table-column>

        <el-table-column 
        label="Price" 
        >     
        <template slot-scope="scope">
           <span style="margin-left: 10px">￥{{scope.row.price}}</span>
              </template>     
        </el-table-column>

         
        <el-table-column
          prop="status"
          label="Status" 
          width="100"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <div v-if="scope.row.status === 0">
            <el-tag
              :type="scope.row.status === 1 ? 'danger' : 'success'"
              disable-transitions
            >pedding</el-tag>
            </div>
            <div v-if="scope.row.status === 1">
            <el-tag
              :type="scope.row.status === 1 ? 'danger' : 'success'"
              disable-transitions
            >success</el-tag>
            </div>
          </template>
        </el-table-column>
   
      </el-table>


    <el-progress :percentage="50"></el-progress>



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
      tableData: [],
      progress:[]
    };
  },
  methods: {
      formatter(row, column) {//用来格式化内容
        return row.status;
      },

    getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          console.log(res.data.data);
          this.tableData = res.data.data
        })
        .catch(err => {
          console.log(err);
        });
    },
     progress() {
      axios
        .get("/api/progress")
        .then(res => {
          console.log(res.data.data);
          this.tableData = res.data.data
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.progress();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  background: rgb(240, 242, 245);
  position: relative;
}
</style>