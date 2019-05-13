<template>
    <div class="information">
      <div v-show="isShow?'information-block':''">
        <div class="information-index">
          <span @click="$router.push('/me')" class="information-return">返回</span>
          <span>个人信息</span>
        </div>
        <div class="information-order" @click="isShow=!isShow">
            <div class="information-state">
                <span>昵称</span>
                <i class="iconfont icon-iconleft"></i>
            </div>
        </div>
        <div class="information-order">
            <div class="information-state">
                <span>签名</span>
                <i class="iconfont icon-iconleft"></i>
            </div>
        </div>
      </div>
      <div v-show="isShow?'':'information-block'">
        <div class="information-index">
          <span @click="isShow=!isShow" class="information-return">返回</span>
          <span>昵称</span>
          <span class="name-preservation" @click="save">保存</span>
        </div>
        <div class="information-a">
          <input type="text" class="information-input" v-model="content" ref="input">
          <div class="information-delete" v-show="content!=''" @click="content=''">×</div>
          <span class="alert" ref="alert">名称不能包含特殊字符，需在2到8位内</span>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      isShow:true,
      content:'',
      nameReg:/^[A-Za-z0-9\u4e00-\u9fa5]{2,8}$/
    }
  },
  methods:{
    save(){
      if(this.nameReg.test(this.$refs.input.value)){
        this.$refs.alert.style.visibility = 'hidden'
        axios({
          method:"post",
          url:"/information/update",
          data:{
            name:this.$refs.input.value
          }
        }).then(res=>{
          if(res.data.ok===1){
            localStorage.setItem("token",this.$refs.input.value)
            this.$router.push('/me')
            alert("修改成功")
          }
        })
      }else{
        this.$refs.alert.style.visibility = 'visible'
        return;
      }
    }
  },
  mounted(){
    this.$store.state.isTabbarShow = false
  },
  destroyed(){
    this.$store.state.isTabbarShow = true
  }
}
</script>

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
  .information{
    font-size:0.16rem;
  }
  .information-block{
    display:block
  }
  .information-index{
    height:0.4rem;
    background:white;
    font-weight: bold;
    text-align:center;
    line-height:0.4rem;
    position:relative;
  }
  .information-delete{
    position:absolute;
    right:.1rem;
    top:.15rem;
    width:.15rem;
    height:.15rem;
    border-radius:50%;
    background:#ccc;
    color:#f1f1f1;
    text-align:center;
    line-height:.15rem;
  }
  .information-return{
    position:absolute;
    left:.1rem;
    top:0;
    font-weight:100;
  }
  .name-preservation{
    position:absolute;
    right:.1rem;
    top:0;
    font-weight:100;
  }
  .information-a{
    background:white;
    width:100%;
    height:.5rem;
    margin-top:.15rem;
    position:relative;
  }
  .information-input{
    outline:none;
    border:none;
    width:100%;
    height:100%;
    padding-left:.1rem;
    font-size:.18rem;
    box-sizing:border-box;
    margin-bottom:.15rem;
  }
  .information-order{
    width:100%;
    background:white;
    padding-left:.2rem;
    box-sizing:border-box;
    font-size:.14rem;
  }
  .information-order div:first-of-type{
    margin-top:.15rem;
  }
  .information-order .information-state{
    height:.5rem;
    margin-left:.2rem;
    box-sizing:border-box;
    border-bottom:.01rem solid #ccc;
    line-height:.5rem;
    position:relative;
    text-indent:.05rem;
  }
  .information-order .information-state:last-of-type{
    border:none
  }
  .information-order .information-state span{
    font-size:.18rem;
  }
  .information-order .information-state .icon-iconleft{
    position:absolute;
    font-size:.16rem;
    right:.15rem;
    top:0rem;
    color:#ccc;
  }
  .alert{
    color:red;
    margin-left:.15rem;
    visibility: hidden;
  }
</style>