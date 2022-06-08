<template>
  <img alt="Vue logo" src="./assets/logo.png" id="logo" />
  <h4>Blogs</h4>
  <blog-component />
</template>
<script>
import BlogComponent from "./components/BlogComponent.vue";
export default {
  name: "App",
  components: { BlogComponent },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
#logo {
  width: 100px;
  margin-bottom: 40px;
}
</style>
