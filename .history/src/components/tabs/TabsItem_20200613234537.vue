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

        <el-tab-pane :label="`已读消息(${count1})`" name="second">
          <div class="read">
            <el-table :data="tableData2" style="width: 100%" :show-header="false">
              <el-table-column prop="message" width="900px"></el-table-column>
              <el-table-column prop="time"></el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button plain type="info" @click="Del(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button type="primary" class="readALL" @click="DelALL">删除全部</el-button>
          </div>
        </el-tab-pane>

        <el-tab-pane :label="`回收站(${count2})`" name="third">
          <div class="read">
            <el-table :data="tableData3" style="width: 100%" :show-header="false">
              <el-table-column prop="message" width="900px"></el-table-column>
              <el-table-column prop="time"></el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button plain type="info" @click="Before(scope.$index, scope.row)">还原</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button type="primary" class="readALL" @click="BeforelALL">删除全部</el-button>
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
      flag:false,
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
      tableData3: [],
      tableData4: [],
      tableData5: [],
      tableData6: [],
      tableData7: [],
    };
  },
  methods: {
    handleClick() {},
    Flagread(index, row) {
      this.tableData1 = this.tableData;
      this.tableData1.splice(index, 1);
      this.tableData2.push(row);
    },
    Del(index, row) {
      this.tableData2.splice(index, 1);
      this.tableData3.push(row);
    },
    Before(index, row) {
      this.tableData3.splice(index, 1);
      this.tableData1.push(row);
    },
    FlagReadALL() {
      if (this.tableData.length !== 0) {
        this.tableDat4 = this.tableData4.concat(this.tableData);
      }
      this.tableData4 = [];
    },
    DelALL() {
      this.tableData3.concat(this.tableData2);
    },
    BeforelALL() {
      if(this.flag = true){
        this.tableDat7 = []
      }
    }
  },
  mounted() {
    this.tableData4 = this.tableData
  },
  watch: {},
  computed: {
    count() {
      return this.tableData1.length;
    },
    count1() {
      return this.tableData2.length;
    },
    count2() {
      return this.tableData3.length;
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