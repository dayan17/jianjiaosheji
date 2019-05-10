<template>
  <div class="me">
    <div class="me-index">我</div>
    <div class="me-head" @click="handClick">
      <div class="portrait"></div>
      <span>kerwin</span>
      <i class="iconfont icon-iconleft"></i>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    methods:{
      handClick(){
        this.$router.push('/register')
      }
    },
    beforeMount(){
      console.log('你成功了，你知道吗')
      const token = localStorage.getItem("username");
      console.log(token)
      axios({
        url:'/checktoken',
        headers:{
          'Authorization':token?token:''
        }
      }).then(res=>{
        console.log(res.data)
          if(res.data.ok===0){
            console.log(res.data)
            this.$router.push("/login")
            // console.log(res.data)
          }else{
            console.log(res.data.ok);
            // $("#username").html(localStorage.getItem("username"))
            // $("#profile").prop("src",res.userprofile)
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
  }
  .me-head .portrait{
    width:0.5rem;
    height:0.5rem;
    border-radius:50%;
    background:orange;
  }
  .me-head span{
    margin-left:.2rem;
    font-size:.2rem;
  }
  .me-head .icon-iconleft{
    position:relative;
    font-size:.16rem;
    left:2rem;
    top:.15rem
  }
</style>