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
           <span style="margin-left: 10px">￥：{{scope.row.Price}}</span>
              </template>     
        </el-table-column>
          <!--
        <el-table-column
          prop="tag"
          label="Status" 
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions
            >{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        -->
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
    filterTag(){},
    handleEdit() {},
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