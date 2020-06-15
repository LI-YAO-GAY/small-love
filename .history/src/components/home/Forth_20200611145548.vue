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
            <el-tag
              :type="scope.row.status === '1' ? 'primary' : 'success'"
              disable-transitions
            >{{scope.row.status}}</el-tag>
          </template>
        </el-table-column>
   
      </el-table>

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
      tableData: []
    };
  },
  methods: {
   resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      formatter(row, column) {//用来格式化内容
        return row.status;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },

    getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          console.log(res.data.data);
          this.tableData=res.data.data
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
.main {
  background: rgb(240, 242, 245);
  position: relative;
}
</style>