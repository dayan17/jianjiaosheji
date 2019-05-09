<template>
  <div class="me">
    <div class="me-index">我</div>
    <div class="me-head">
      <div class="portrait"></div>
      <span>kerwin</span>
      <i class="iconfont icon-iconleft"></i>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      
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
    margin-left:.1rem;
    margin-top:.05rem;
    font-size:.2rem;
  }
  .me-head .icon-iconleft{
  }
</style>