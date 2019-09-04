<template>
  <div id="app">
    <Tabbar v-show="isTabbarShow"></Tabbar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar";
export default {
  components: {
    Tabbar
  },
  computed: {
    isTabbarShow() {
      return this.$store.state.isTabbarShow;
    }
  }
};
</script>

<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
div {
  font-size: 0.16rem;
}
body {
  height: 100%;
}
html {
  background: #f3f3f3;
  height: 100%;
}
.main {
  flex: 1;
  overflow: auto;
  margin-bottom: 0.5rem;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>


