<template>
  <div>
    <div class="side">
      <div v-for="(item,index) in list" :key="index">
        <el-row>
          <el-col :span="12">
            <el-menu
              default-active="activeIndex"
              class="el-menu-vertical-demo"
              background-color="#344055"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item>
                <i :class="item.Icon"></i>
                <span>{{item.titleName}}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
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
      list: [
        {
          titleName: "首页",
          Icon: "el-icon-location",
          page: "/"
        },
        {
          titleName: "已发表",
          Icon: "el-icon-menu",
          page: "/published"
        },
        {
          titleName: "统计",
          Icon: "el-icon-menu",
          page: "/statistics"
        },
        {
          titleName: "发表文章",
          Icon: "el-icon-check",
          page: "/publish"
        },
        {
          titleName: "标签页",
          Icon: "el-icon-setting",
          page: "/tabs"
        },
        {
          titleName: "导出excel",
          Icon: "el-icon-setting",
          page: "/export"
        },
        {
          titleName: "图片上传",
          Icon: "el-icon-setting",
          page: "/upload"
        },
        {
          titleName: "退出系统",
          Icon: "el-icon-delete",
          page: "/quit"
        }
      ],
      activeIndex:'/'
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-col-12 {
  width: 100%;
}
.el-menu-vertical-demo {
  width: 200px;
}

</style>