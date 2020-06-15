<template>
  <div>
    <div class="main p-20">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="未读消息" name="first">
        
          <div class="read">
            <el-table :data="tableData" style="width: 100%" :show-header="false">
              <el-table-column prop="message" width="900px"></el-table-column>
              <el-table-column prop="time"></el-table-column>
              <el-table-column>
                <el-button type="info" @click='read' plain>标为已读</el-button>
              </el-table-column>
            </el-table>
            <el-button type="primary" class="readALL">全部标为已读</el-button>
          </div>
        </el-tab-pane>

        <el-tab-pane label="已读消息" name="second">
         <div class="read">
            <el-table :data="tableData2" style="width: 100%" :show-header="false">
              <el-table-column prop="message" width="900px"></el-table-column>
              <el-table-column prop="time"></el-table-column>
              <el-table-column>
                <el-button type="info" plain>删除</el-button>
              </el-table-column>
            </el-table>
            <el-button type="primary" class="readALL">删除全部</el-button>
          </div>
        </el-tab-pane>

        <el-tab-pane label="回收站" name="third">
         <div class="read">
            <el-table :data="tableData3" style="width: 100%" :show-header="false">
              <el-table-column prop="message" width="900px"></el-table-column>
              <el-table-column prop="time"></el-table-column>
              <el-table-column>
                <el-button type="info" plain>还原</el-button>
              </el-table-column>
            </el-table>
            <el-button type="primary" class="readALL">删除全部</el-button>
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
      activeName: "first",
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
      ],
      tableData1:[],
      tableData2:[],
      tableData3:[],
    };
  },
  methods: {
    handleClick(){
      this.
    },
    read(index){
      this.tableData.splice(index,1)
      // this.tableData1.push(item)
    }
   
  },
  mounted() {},
  watch: {
    
  },
  computed: {
  
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
.readALL{
  margin:20px 0 20px 10px;
}
</style>