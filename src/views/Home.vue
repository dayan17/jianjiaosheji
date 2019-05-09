<template>
  <div>
    home
 <ul>
      <router-link to="/home/recommend" tag="li" activeClass="highLight">推荐</router-link>

      <router-link to="/home/furniture" tag="li" activeClass="highLight">家具</router-link>

      <router-link to="/home/family" tag="li" activeClass="highLight">家居</router-link>

      <router-link to="/home/activity" tag="li" activeClass="highLight">活动</router-link>
 </ul>

            <router-view></router-view>

  </div>
</template>

<style lang="scss" scoped>
  ul{
  height:50px;
  line-height: 50px;
  text-align: center;
  display: flex;
  li{
    color:black;
    flex:1;
  }
  }

  .highLight{
      border-bottom: 3px solid #309;
      color:hotpink;

}

</style>