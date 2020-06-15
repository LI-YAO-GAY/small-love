<template>
 <div>
 <div class="side"></div>
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
         icon:'',
         page:'/'
       },{
          titleName:'已发表',
         icon:'',
         page:'/published'
       },{
          titleName:'统计',
         icon:'',
         page:'/statistics'
       },{
          titleName:'发表文章',
         icon:'',
         page:'/publish'
       },{
          titleName:'标签页',
         icon:'',
         page:'/tabs'
       },{
          titleName:'导出excel',
         icon:'',
         page:'/export'
       },{
          titleName:'图片上传',
         icon:'',
         page:'/upload'
       },{
          titleName:'退出系统',
         icon:'',
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

</style>