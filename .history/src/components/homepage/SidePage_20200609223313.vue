<template>
 <div>
 <div class="side">
 <div v-for="item in list" :key="item">
 <el-row>
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(52, 64, 85)"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu>
        <template slot="item.titleName">
          <i class="item.icon"></i>
          <span>导航一</span>
        </template>
      </el-submenu>

    </el-menu>
  </el-col>
</el-row>
 </div>
 </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {
    
   },
   data () {
     return {
     list:[
       {
         titleName:'首页',
         icon:'el-icon-location',
         page:'/'
       },{
          titleName:'已发表',
         icon:'el-icon-menu',
         page:'/published'
       },{
          titleName:'统计',
         icon:'el-icon-menu',
         page:'/statistics'
       },{
          titleName:'发表文章',
         icon:'el-icon-check',
         page:'/publish'
       },{
          titleName:'标签页',
         icon:'el-icon-setting',
         page:'/tabs'
       },{
          titleName:'导出excel',
         icon:'el-icon-setting',
         page:'/export'
       },{
          titleName:'图片上传',
         icon:'el-icon-setting',
         page:'/upload'
       },{
          titleName:'退出系统',
         icon:'el-icon-delete',
         page:'/quit'
       },
     ]
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.el-col-12 {
width:100%;
}
</style>