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
      <span class="text-align">
      <span class="f1 second">
        <ve-pie :data="chartData"></ve-pie>
      </span>
      <span class="f1 second">
        <ve-pie :data="chartData"></ve-pie>
      </span>
      </span>
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
    getData() {
      axios
        .get("/api/ringChat")
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
.second{
  width: 500px;
}
</style>