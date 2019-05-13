<template>
  <div class="me">
    <div class="me-index">我</div>
    <router-link to="myupdated" class="me-head">
      <div class="portrait">
        <img src="../../public/images/132.jpg">
      </div>
      <span>{{item}}</span>
      <i class="iconfont icon-iconleft"></i>
    </router-link>
    <div class="me-order">
      <div class="order-span">全部订单</div>
      <div class="me-state">
        <i class="iconfont icon-qianbao"></i>
        <span>待付款</span>
        <i class="iconfont icon-iconleft"></i>
      </div>
      <div class="me-state">
        <i class="iconfont icon-daifahuo"></i>
        <span>待发货</span>
        <i class="iconfont icon-iconleft"></i>
      </div>
      <div class="me-state">
        <i class="iconfont icon-daishouhuo"></i>
        <span>待收货</span>
        <i class="iconfont icon-iconleft"></i>
      </div>
      <div class="me-state">
        <i class="iconfont icon-daipinglun"></i>
        <span>待评论</span>
        <i class="iconfont icon-iconleft"></i>
      </div>
      <div class="me-state">
        <i class="iconfont icon-tuikuan"></i>
        <span>退换货</span>
        <i class="iconfont icon-iconleft"></i>
      </div>
    </div>
    <div class="me-setup">
      <div>
        <span>我的收藏</span>
        <i class="iconfont icon-iconleft"></i>
      </div>
      <div>
        <span>我的礼券</span>
        <i class="iconfont icon-iconleft"></i>
      </div>
      <div>
        <span>客服电话</span>
        <i class="iconfont icon-iconleft"></i>
      </div>
    </div>
    <div class="me-signout" @click="signOut">退出登录</div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        item:localStorage.getItem("token")
      }
    },
    methods:{
      signOut(){
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        this.$router.push('/login')
        alert('请重新登录')
      }
    },
    beforeMount(){
      const token = localStorage.getItem("username");
      axios({
        url:'/checktoken',
        headers:{
          'Authorization':token?token:''
        }
      }).then(res=>{
        // console.log(res.data)  //{ok:1}
          if(res.data.ok===0){
            this.$router.push("/login")
          }else{
            console.log('你成功了，你知道吗')
          }
      })
    }
  }
</script>

<style src="../assets/me_iconfont/iconfont.css"></style>
<style scoped>
  *{
    margin:0;
    padding:0;
  }
  ul{
    list-style:none;
  }
  a{
    text-decoration: none;
  }
  .me{
    font-size:0.16rem;
  }
  .me-index{
    height:0.4rem;
    background:white;
    font-weight: bold;
    text-align:center;
    line-height:0.4rem;
  }
  .me-head{
    width:100%;
    height:0.7rem;
    margin-top:0.15rem;
    margin-bottom:.15rem;
    background:white;
    overflow:hidden;
    display:flex;
    padding:.1rem;
    box-sizing:border-box;
    position:relative;
  }
  .me-head .portrait{
    width:0.5rem;
    height:0.5rem;
    border-radius:50%;
    background:orange;
    overflow:hidden;
  }
  .me-head .portrait img{
    width:100%;
  }
  .me-head span{
    margin-left:.2rem;
    margin-top:.1rem;
    color:black;
  }
  .me-head .icon-iconleft{
    position:absolute;
    font-size:.16rem;
    right:.15rem;
    top:.25rem;
    color:#ccc;
  }
  .me-order{
    width:100%;
    background:white;
    padding-left:.2rem;
    box-sizing:border-box;
    font-size:.14rem;
  }
  .me-order .order-span{
    height:.5rem;
    box-sizing:border-box;
    border-bottom:.01rem solid #ccc;
    line-height:.5rem;
  }
  .me-order .me-state{
    height:.5rem;
    margin-left:.2rem;
    box-sizing:border-box;
    border-bottom:.01rem solid #ccc;
    line-height:.5rem;
    position:relative;
    text-indent:.05rem;
  }
  .me-order .me-state:last-of-type{
    border:none
  }
  .me-order .me-state span{
    font-size:.14rem;
  }
  .me-order .me-state .icon-qianbao,.icon-daifahuo,.icon-daishouhuo,.icon-daipinglun,.icon-tuikuan{
    position:absolute;
    left:-0.25rem;
    top:0rem;
    font-size:.18rem;
  }
  .me-order .me-state .icon-daishouhuo{
    font-size:.22rem;
    left:-0.28rem;
  }
  .me-order .me-state .icon-tuikuan{
    font-size:.2rem;
    left:-0.26rem;
  }
  .me-order .me-state .icon-iconleft{
    position:absolute;
    font-size:.16rem;
    right:.15rem;
    top:0rem;
    color:#ccc;
  }
  .me-setup{
    width:100%;
    margin-top:.15rem;
    margin-bottom:.15rem;
    background:white;
  }
  .me-setup div{
    height:.5rem;
    box-sizing:border-box;
    border-bottom:.01rem solid #ccc;
    line-height:.5rem;
    position:relative;
  }
  .me-setup div:last-of-type{
    border:none
  }
  .me-setup div span{
    margin-left:.15rem;
  }
  .me-setup div .icon-iconleft{
    position:absolute;
    font-size:.16rem;
    right:.15rem;
    top:0rem;
    color:#ccc;
  }
  .me-signout{
    width:100%;
    height:.5rem;
    background:white;
    color:red;
    text-align:center;
    line-height:.5rem;
  }
</style>