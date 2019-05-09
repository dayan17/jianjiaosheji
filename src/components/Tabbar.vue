<template>
  <div>
        <ul>
    <router-link tag="li" to="/home" activeClass="highLight">首页</router-link>
    <router-link tag="li" to="/category" activeClass="highLight">分类</router-link>
    <router-link tag="li" to="/shopcar" activeClass="highLight">购物车</router-link>
    <router-link tag="li" to="/me" activeClass="highLight">我</router-link>
        </ul>

  </div>
</template>


<script>
export default {
  
}
</script>


<style lang="scss" scoped> 
  div{
    position: fixed;
    left: 0;
    bottom: 0;
    background: #DCB5FF;
    height: 0.5rem;
    line-height: 0.5rem;
    width:100%;
      ul{
        display: flex;
        li{
          flex:1;
          text-align: center;
        }
      }
  }
</style>