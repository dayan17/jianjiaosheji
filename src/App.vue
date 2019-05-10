<template>
  <div id="app">
 <Tabbar v-show="isTabbarShow"></Tabbar>
  <router-view></router-view>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
// import { mapState } from 'vuex'
export default {
  components:{
      Tabbar
  },
  computed: {
    isTabbarShow(){
      return this.$store.state.isTabbarShow
    }
  },
}
</script>

<style lang="scss" >
*{
  margin:0;
  padding:0;
}
li{
  list-style: none;
}
div{
  font-size:0.16rem
}
  html{background:#f3f3f3}
</style>


