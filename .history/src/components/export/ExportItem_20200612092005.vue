<template>
 <div>
  <div >
  <el-input v-model="input" placeholder="请输入你想搜索的商品名称"></el-input>
  <el-table
  
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
   

    <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="">
    </el-pagination>
  </div>
  </div>
 </div>
</template>

<script>
  // :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
import axios from "axios"
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
     input:'',
     arr:[]
     }
   },
   methods: {
     handleDelete(){},
     handleEdit(){},
   getData(){
     axios.get('/api/tableData').then(res=>{
       console.log(res.data.data);
       this.arr = res.data.data
     }).catch(err=>{
       console.log(err);
     })
   }
   },
   mounted() {
   this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.el-input{
  width: 300px;
  margin: 20px 0 0 20px;
}
</style>
