<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Resources from "./components/Resources.vue";
import Services from "./components/Services.vue";
import Supplies from "./components/Supplies.vue";
import Pools from "./components/Pools.vue";
import AppHeader from "./shared/AppHeader";
import FilterForm from "./components/FilterForm";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    Home,
    Resources,
    Services,
    Supplies,
    Pools,
    AppHeader,
    FilterForm
  }
};
</script>

<style lang="scss">
@import "./styles/css-reset.css";
body {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  #app {
    flex: 1 0 auto;
  }
}
</style>
