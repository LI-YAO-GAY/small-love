<template>
 <div class="main">
  <Paging></Paging>
 </div>
</template>

<script>
import Paging from '../../components/paging/Paging'
 export default {
   name: '',
   props: {
   },
   components: {
   Paging
   },
   data () {
     return {

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
.main {
    height:calc(100vh - 100px);
  background: rgb(240, 242, 245);
}
</style>