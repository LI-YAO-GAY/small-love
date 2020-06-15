<template>
  <div>
    <div class="main p-20">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="未读消息" name="first">
          <el-table :data="tableData" style="width: 100%" :show-header="false">
            <el-table-column prop="message"></el-table-column>
            <div>
            <el-table-column prop="time"></el-table-column>
            <el-table-column prop="time"> <el-button type="info" plain>标为已读</el-button></el-table-column>
            </div>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="已读消息" name="second"></el-tab-pane>

        <el-tab-pane label="回收站" name="third"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeName: "",
      tableData: [
        {
          message: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00",
          ifread: false
        },
        {
          message: "今晚12点整发大红包,先到先得",
          time: "2018-04-19 21:00:00",
          ifread: false
        },
        {
          message: "【系统通知】的代惠芬已经过期",
          time: "2018-04-19 20:00:00",
          ifread: false
        }
      ]
    };
  },
  methods: {
    handleClick() {},
    handleEdit() {}
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  background: rgb(240, 242, 245);
  position: relative;
}
</style>