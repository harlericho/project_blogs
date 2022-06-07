<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <blog-component />
</template>

<script>
import BlogComponent from "./components/BlogComponent.vue";
export default {
  name: "App",
  components: {
    BlogComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
