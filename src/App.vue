<template>
  <div id="app">
 <Tabbar></Tabbar>
  <router-view></router-view>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
export default {
  components:{
      Tabbar
  }
}
</script>

<style lang="scss">
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


