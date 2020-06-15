<template>
  <div>
    <div class="main p-20 flex">
      <div class="f1 card p-t-20">
        <ve-radar :data="chartData"></ve-radar>
      </div>
      <div class="f1 card m-lr-20  p-t-20">
        <ve-pie :data="chartData2"></ve-pie>
      </div>
      <div class="f1 card p-t-20 ">
        <ve-histogram :data="chartData3"></ve-histogram>
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
      },
      datachartData2: {
        columns: [],
        rows: []
      },
      chartData3: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/radarChat")
        .then(res => {
          console.log(res.data.data);
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },

    getData2() {
      axios
        .get("/api/ringChat")
        .then(res => {
          console.log(res.data.data);
          this.chartData2.rows = res.data.data;
          this.chartData2.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },

    getData3() {
      axios
        .get("/api/homeData")
        .then(res => {
          console.log(res.data.data);
          this.chartData3.rows = res.data.data;
          this.chartData3.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.getData2();
    this.getData3();
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
.card {
  box-shadow: 0 0 4px #999;
}
</style>