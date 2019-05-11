<template>
    <div>
        <div class="head">
              <div class="o"><img src="../../public/images/logo.png" alt=""></div>
              <div class="search r">
                  <i class="iconfont icon-icon-test"></i>
                  <span>搜索我的流传宝贝</span>  
              </div>
        </div>
        <ul>
              <router-link to="/home/recommend" tag="li" activeClass="highLight">推荐</router-link>
              <router-link to="/home/furniture" tag="li" activeClass="highLight">家具</router-link>
              <router-link to="/home/family" tag="li" activeClass="highLight">家居</router-link>
              <router-link to="/home/activity" tag="li" activeClass="highLight">活动</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<style src="../assets/home_iconfont/iconfont.css"></style>
<style scoped>
.head{
      height: 0.4rem;
      clear:both;
      display:flex;
      /* justify-content: center; */
      padding-top:0.1rem;
      background:white;
      border-bottom:0.01rem solid #f3f3f3;
      position: relative;
    }
.o{
  width: 0.71rem;
  height: 0.5rem;
  position: absolute;
  top: -0.01rem;
  left: 0.02rem;
}
 .search{
      height: 0.27rem;
      width: 2.52rem;
      background-color:#f5f5f5;
      border:.01rem solid #f5f5f5;
      border-radius:0.14rem;
      color:#757575;
      position: absolute;
      top: 0.1rem;
      left: 0.74rem;
    }
img{
  width: 100%;
  height: 100%;
}
  ul{
  height:0.4rem;
  line-height: 0.4rem;
  text-align: center;
  display: flex;
  background:white;
  }
  li{
    color:#757575;
    flex:1;
  }
  .highLight{
      border-bottom: 0.03rem solid black;
      color:black;
}
  *{
      margin:0;
      padding:0
    }
    .iconfont icon-icon-test{
    padding-left:0.03rem;
    padding-top: 0.03rem; }

    span{margin-left:0.05rem; }
   
</style>