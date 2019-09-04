<template>
    <div class="app">
        <router-link to='/shopcar' ><div class="header">
          <img src="../../public/images/FDJ.png" alt="">
          <input type="text" id="ok" placeholder="搜索我的尖叫好物">
        </div></router-link>
        <div class="body">
        <img class="pic" src="../../public/images/furniture.png" alt="">
        </div>
    <ul class="choose">
      <router-link to="/sofa" tag='li' activeClass="active"><span>沙发</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>板凳</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>床</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>框架</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>餐桌</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>茶几和边桌</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>书桌</span><i class="iconfont icon-JT"></i></router-link>
    </ul>
        <img src="../../public/images/household.png" alt="" class="pic2">
        <ul class="choose2">
      <router-link to='/sofa' tag='li'><span>灯具</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>用餐</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>时尚生活</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>收纳</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>烹饪</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>纺织品</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>家饰</span><i class="iconfont icon-JT"></i></router-link>
      <router-link to='/sofa' tag='li'><span>卫浴</span><i class="iconfont icon-JT"></i></router-link>
      
    </ul>
    </div>
    
</template>

<style src="../assets/icon/font_787qi1g57h4/iconfont.css"></style>
<style scoped>
  .app{
    width: 3.75rem;
    height: 0.44rem;
  }

  .header{
    width: 2.70rem;
    height: 0.28rem;
    border-radius: 0.14rem;
    background: #f5f5f5;
    margin-left: 0.15rem;
    margin-top:0.15rem;
  }

  .header img{
    height: 100%;
  }

  #ok{
    background: #f5f5f5;
    display: inline-block;
    width: 80%;
    position: relative;
    bottom: 0.06rem;
    border: none;
  }

  .body{
    width: 3.45rem;
  }

  .body .pic{
    width: 100%;
    margin-left: 0.15rem;
    margin-top: 0.1rem;
  }

  .cloose{
    width: 3.45rem;
    margin-right: 0.15rem;
  }
  
  .choose li{
    width: 3.45rem;
    height: 0.49rem;
    margin-left: 0.15rem;
    border-bottom: 1px #f5f5f5 solid;
    display: flex;
    justify-content: space-between;
     }

  .choose li span{
    line-height: 0.49rem;
    margin-left: 0.15rem;
  }

  .choose li i{
    line-height: 0.49rem;
    width: 0.3rem;
  }

  .pic2{
    width: 3.45rem;
    margin-left: 0.15rem;
  }
 
 .cloose2{
    width: 3.45rem;
    margin-right: 0.15rem;
  }
  
  .choose2 li{
    width: 3.45rem;
    height: 0.49rem;
    margin-left: 0.15rem;
    border-bottom: 1px #f5f5f5 solid;
    display: flex;
    justify-content: space-between;
     }

  .choose2 li span{
    line-height: 0.49rem;
    margin-left: 0.15rem;
  }

  .choose2 li i{
    line-height: 0.49rem;
    width: 0.3rem;
  }
</style>
