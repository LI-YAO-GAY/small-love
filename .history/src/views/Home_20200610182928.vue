<template>
 <div>
 <div class="item"></div>
 <HomeMain></HomeMain>
 </div>
</template>

<script>
import HomeMain from "HomeMain"
 export default {
   name: '',
   props: {
   },
   components: {
   HomeMain
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

.item{
  width: 500px;
  height: 500px;
  background: crimson;
}
</style>