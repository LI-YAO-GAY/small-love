<template>
  <div>
    <div class="main p-20">
      <div class="flex">
        <div class="flex a-center j-center f1 nav1 p-tb-5">
          <div class="color-fff">
            今日发布
            <i class="relative el-icon-check"></i>
          </div>
        </div>
        <div class="flex a-center j-center f1 nav2 p-tb-5">
          <div class="color-fff">
            原创文章
            <i class="relative el-icon-tickets"></i>
          </div>
        </div>
        <div class="flex a-center j-center f1 nav3 p-tb-5">
          <div class="color-fff">
            新留言
            <i class="relative el-icon-bell"></i>
          </div>
        </div>
        <div class="flex a-center j-center f1 nav4 p-tb-5">
          <div class="color-fff">
            新消息
            <i class="relative el-icon-phone-outline"></i>
          </div>
        </div>
      </div>
      <div class="flex m-tb-20">
      <div class="f1 card">
        <ve-pie :data="chartData"></ve-pie>
      </div>
      <div class="f1 card">
        <ve-pie :data="chartData1"></ve-pie>
      </div>
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
      chartData1: {
          columns: ['原创', '转载', '与他人合作'],
          rows: [
            { '原创': '原创', '访问用户': 1393 },
            { '转载': '转载', '访问用户': 3530 },
            { '与他人合作': '与他人合作', '访问用户': 2923 },
          ]
        }
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/ringChat")
        .then(res => {
          // console.log(res.data.data);
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
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
  height: calc(100vh - 100px);
  position: relative;
}
i {
  left: 90px;
}
.nav1 {
  background: rgb(124, 202, 191);
}
.nav2 {
  background: rgb(232, 138, 135);
}
.nav3 {
  background: rgb(131, 117, 163);
}
.nav4 {
  background: rgb(159, 206, 193);
}
</style>