<template>
  <div>
    <div class="main p-20">
      <el-card>
        <ve-line
          :data="chartData"
          height="500px"
          width="348px"
          :extend="chartExtend"
        ></ve-line>
      </el-card>
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
     this.chartSettings = {
      metrics: ['访问用户', '下单用户'],
      dimension: ['日期'],
    return {
      chart: [],
      chartData: {
        columns: ["date", "actual,", "expected"]
      }
    };
  },
  methods: {
    getDate() {
      axios
        .get("/api/homeChat")
        .then(res => {
          console.log(res.data.data);
          this.chart = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getDate();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  height: calc(100vh - 100px);
  background: rgb(240, 242, 245);
  position: relative;
}
</style>