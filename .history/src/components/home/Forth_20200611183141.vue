<template>
  <div>
    <div class="main p-l-20 p-r-20 flex">
      <el-table :data="tableData" style="width: 100%" class="p-10 table">
        <el-table-column label="Order_No">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.num}}</span>
          </template>
        </el-table-column>

        <el-table-column label="Price" width="200">
          <template slot-scope="scope">
            <span style="margin-left: 10px">￥{{scope.row.price}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="status" label="Status" width="100" filter-placement="bottom-end">
          <template slot-scope="scope">
            <div v-if="scope.row.status === 0">
              <el-tag
                :type="scope.row.status === 1 ? 'danger' : 'success'"
                disable-transitions
              >pedding</el-tag>
            </div>
            <div v-if="scope.row.status === 1">
              <el-tag
                :type="scope.row.status === 1 ? 'danger' : 'success'"
                disable-transitions
              >success</el-tag>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <el-card class="m-lr-20 f1">
        <div slot="header" class="clearfix flex j-between">
          <el-dropdown>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-dropdown>
          <span>Todo list</span>
        </div>
        <div class="content">
          <div v-for="(item,index) in todolist" :key="index">       
          <div class="flex a-center m-b-10">
           <div><input type="checkbox" class='Ipt' checked="checked" v-model="checkedItem"></div>
            <div class="m-l-10">{{item.name}}</div>
          </div>
          </div>
        </div>
        <div class="line m-tb-30"></div>
        <!-- 
          <div class="flex a-center  m-b-10">
            <div clss="circle">
              <span>
                <input type="checkbox" class="Checkbox" id="check1" />
                <label for="check1"></label>
              </span>
            </div>
            <div class="m-l-30">fork this repository</div>
          </div>

          <div class="flex a-center  m-b-10">
            <div clss="circle">
              <span>
                <input type="checkbox" class="Checkbox" id="check1" />
                <label for="check1"></label>
              </span>
            </div>
            <div class="m-l-30">follow author</div>
          </div>

          <div class="flex a-center  m-b-10">
            <div clss="circle">
              <span>
                <input type="checkbox" class="Checkbox" id="check1" />
                <label for="check1"></label>
              </span>
            </div>
            <div class="m-l-30">vue-admin</div>
          </div>

          <div class="flex a-center  m-b-10">
            <div clss="circle">
              <span>
                <input type="checkbox" class="Checkbox" id="check1" />
                <label for="check1"></label>
              </span>
            </div>
            <div class="m-l-30">vue</div>
          </div>

          <div class="flex a-center  m-b-10">
            <div clss="circle">
              <span>
                <input type="checkbox" class="Checkbox" id="check1" />
                <label for="check1"></label>
              </span>
            </div>
            <div class="m-l-30">element-ui</div>
          </div>

          <div class="flex a-center  m-b-10">
            <div clss="circle">
              <span>
                <input type="checkbox" class="Checkbox" id="check1" />
                <label for="check1"></label>
              </span>
            </div>
            <div class="m-l-30">axios</div>
          </div>

          <div class="flex a-center  m-b-10">
            <div clss="circle">
              <span>
                <input type="checkbox" class="Checkbox" id="check1" />
                <label for="check1"></label>
              </span>
            </div>
            <div class="m-l-30">webpack</div>
        </div>-->

        <div class="flex F12 j-around">
        <div>items left</div>
        <div><input type="text" value="All" class="ALL"></div>
        <div>Active</div>
        <div>Completed</div>
        </div>
      </el-card>

      <el-card class="f1">
        <div class="Image">
          <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt />
        </div>
        <div v-for="(item,index) in progress" :key="index" class="m-t-10">
          <div>{{item.name}}</div>
          <div v-if="item.progress === 1">
            <el-progress :percentage="item.progress*100" status="success"></el-progress>
          </div>
          <div v-if="item.progress < 1">
            <el-progress :percentage="item.progress*100"></el-progress>
          </div>
        </div>
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
    return {
      tableData: [],
      progress: [],
      todolist:[
        {name:'star this repository',tick:false},
        {name:'fork this repository',tick:false},
        {name:'follow author',tick:false},
        {name:'vue-admin',tick:false},
        {name:'vue',tick:false},
        {name:'element-ui',tick:false},
        {name:'axios',tick:true},
        {name:'webpack',tick:true},
      ]
    };
  },
  methods: {
    formatter(row, column) {
      //用来格式化内容
      return row.status;
    },

    getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          console.log(res.data.data);
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData1() {
      axios
        .get("/api/progress")
        .then(res => {
          console.log(res.data.data);
          this.progress = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData2() {
      axios
        .get("/api/progress")
        .then(res => {
          console.log(res.data.data);
          this.progress = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.getData1();
    this.getData2();
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
.el-table {
  width: 100%;
}
.table {
  flex: 2;
}
.el-card {
  padding: 0 !important;
}
img {
  width: 100%;
  height: 100%;
}
.circle{
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.ALL{
  border: 1px solid palevioletred;
  width: 60px;
  height: 20px;
  text-align: center;
}
.line{
  width: 100%;
  height: 1px;
  background: #a6a6a6;
}
</style>