<template>
  <div class="login_container">
    <div>
    <div>
      <Register></Register>
    </div>
      <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="5"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
        style="height:100%"
      ></vue-particles>
    </div>
  </div>
</template>

<script>
import Register from "../components/login/Register";
export default {
  name: "Register",
  props: {},
  components: {
    Register
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};

</script>

<style scoped lang='scss'>
.login_container {
  background: url("../assets/image/fs.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>