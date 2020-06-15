<template>
  <div>
    <div class="main p-20 flex">
      <div class="f1">
        <ve-line :data="chartData" ></ve-line>
      </div>
      <div class="f1">
        <ve-pie :data="chartData" ></ve-pie>
      </div>
       <div class="f1">
        <ve-histogram :data="chartData" ></ve-histogram>
      </div>
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
      chartData: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {
    getDate() {
      axios
        .get("/api/homeChat")
        .then(res => {
          console.log(res.data.data);
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
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