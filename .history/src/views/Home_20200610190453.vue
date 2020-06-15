<template>
 <div>
 <Top></Top>
 <Second></Second>
 <Third></Third>
 <Forth></Forth>
 </div>
</template>

<script>
import Top from "../components/home/Top"
import Second from "../components/home/Second"
import Third from "../components/home/Third"
import Forth from "../components/home/Forth"
 export default {
   name: '',
   props: {
   },
   components: {
   Top,Second,Third,Forth
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