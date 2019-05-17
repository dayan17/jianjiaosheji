<template>
  <div id="app">
<<<<<<< HEAD
 <Tabbar v-show="isTabbarShow"></Tabbar>
  <section>
    <router-view></router-view>
  </section>
=======
      <div class="main">
        <router-view></router-view>
      </div>  
      <Tabbar v-show="isTabbarShow"></Tabbar>
>>>>>>> 00c9b5dfd71525727bbf744127f698b2cc8d9a5a
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
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
  font-size:0.16rem;
}
<<<<<<< HEAD
  section{
    margin-bottom:.5rem
  }
  html{background:#f3f3f3}
=======
body{
  height:100%;
}
  html{
    background:#f3f3f3;
    height:100%
  }
  .main{
    flex:1;
    overflow:auto;
    margin-bottom:0.5rem;
  }
  #app{
    height:100%;
    display:flex;
    flex-direction:column;
  }
>>>>>>> 00c9b5dfd71525727bbf744127f698b2cc8d9a5a
</style>


