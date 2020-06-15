<template>
  <div>
    <div class="main p-20">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="`未读消息(${count})`" name="first">
          <div class="read">
            <el-table :data="tableData" style="width: 100%" :show-header="false">
              <el-table-column prop="message" width="900px"></el-table-column>
              <el-table-column prop="time"></el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button plain type="info" @click="Flagread(scope.$index, scope.row)">标为已读</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button type="primary" class="readALL" @click="FlagReadALL">全部标为已读</el-button>
          </div>
        </el-tab-pane>

        <el-tab-pane :label="`已读消息(${count})`" name="second">
          <div class="read">
            <el-table :data="tableData" style="width: 100%" :show-header="false">
              <el-table-column>
                <template slot-scope="scope">
                  <el-button plain type="info" @click="Del(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button type="primary" class="readALL" @click="DelALL(scope.$index, scope.row)">删除全部</el-button>
          </div>
        </el-tab-pane>

        <el-tab-pane :label="`回收站(${count})`" name="third">
          <div class="read">
            <el-table :data="tableData" style="width: 100%" :show-header="false">
              <el-table-column>
                <template slot-scope="scope">
                  <el-button plain type="info" @click="Before(scope.$index, scope.row)">还原</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button
              type="primary"
              class="readALL"
              @click="BeforelALL(scope.$index, scope.row)"
            >删除全部</el-button>
          </div>
        </el-tab-pane>
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
      count: 0,
      activeName: "first",
      //总数据
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
          message: "【系统通知】你的优惠卷已经过期",
          time: "2018-04-19 20:00:00",
          ifread: false
        }
      ],
      tableData1: [],
      tableData2: [],
      tableData3: []
    };
  },
  methods: {
    handleClick() {},
    Flagread(index, row) {
      this.tableData.splice(index, 1);
      if (
        JSON.stringify(this.tableData2).indexOf(
          JSON.stringify(this.tableData)
        ) == -1
      ) {
        this.tableData2.push(this.tableData);
      }
    },
    Del(index, row) {},
    Before(index, row) {},
    FlagReadALL() {
      this.tableData.splice(0);
    },
    DelALL(index, row) {},
    BeforelALL(index, row) {}
  },
  mounted() {},
  watch: {},
  computed: {
    count() {
      // this.count = this.tableData.length
    }
  }
};
</script>

<style scoped lang='scss'>
.main {
  height: calc(100vh - 100px);
  position: relative;
}
.read {
  background: rgb(255, 255, 255);
  border-radius: 5px;
}
.readALL {
  margin: 20px 0 20px 10px;
}
</style>