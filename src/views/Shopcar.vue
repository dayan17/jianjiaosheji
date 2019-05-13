<template>
  <!--///////////////////////////// header/////////////////////////////////////////////////// -->
  <div class='biggestpage'>
    <div class='headerdiv'>
      <img class='headerimg'  src='../../public/images/home.png' @click="turn">
      <h4 class='shopcar'>购物车</h4>
      <p class="bianji" @click='mybianji()'>{{isbianji?bianji:wancheng}}</p>
    </div>
  <!--///////////////////////////// shopcar/////////////////////////////////////////////////// -->

  <!--//////////////////////////购物车为空时/////////////////////// -->

    <div class='middlediv' v-if="shopcarlist.length===0">
      <p class='middledivp'>您的购物车还是空的</p>
      <div class='button'>
      <mt-button class='buttona' size="small" type="danger">查看收藏</mt-button>
      <mt-button class='buttonb' size="small" type="danger" @click='turn'>去逛逛</mt-button>
      </div>
    </div>
  <!--//////////////////////////购物车不为空时///////////////////// -->
    <ul class='shopcarul' v-if='shopcarlist.length!==0'>
      <input type="checkbox"  @change='allchecked()' v-model='isallchecked'> 全选

      <li class='shopcarli' v-for='data,index in shopcarlist' :key="data.productId">  
        <!-- 数量加减 -->
        <div class='xuanzejiajian'>
          <input class='xuanzetubiao' type="checkbox" @change='change()' v-model='checkgroup' :value='data'>
          <ul class='jiajiankuang'>
          <span class='jian'  @click="dev(data)">-</span>
          <span class='shuliang'>{{data.productStatus}}</span>          
          <span class='jia' @click="add(data)">+</span>
          </ul>      
        </div>
    <!-- 选择框 -->
        <div class='shangpinxiangqing'>
          <img class='shangpinimg' :src='data.productImg'>
          <ul>
              <li class='shangpinming'>{{data.productTitle}}</li>
                <li class='shangpinjia'>￥{{data.sellPrice}} </li>
                  <li class='shuliangx'>x{{data.productStatus}}</li> 
          </ul>
                 <button @click='shopcarlist.splice(index, 1)'>删除</button>
          </div>
          </li>
        <p>总价￥{{sum}}</p>
        <button @click="$router.push(`/home`)">去结算</button>
    </ul>

  <!--///////////////////////////// 推荐/////////////////////////////////////////////////// -->

        <p class='weinin'>- 为您推荐 -</p>

  <ul class='tuijianul' v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0" infinite-scroll-immediate-check='false'>
    <li class='tuijianli' v-for='data,index in datalist' :key="data.productId" @click="toDetail(data.productId,index)">
          <img class='tuijianimg' :src="data.productImg">
          <p class='tuijianp'>{{data.productTitle}}</p>
          <h6>￥{{data.sellPrice}}</h6>
          <p class='tuijianp'>{{data.prizeOrSlogan}}</p>

    </li>
  </ul>
  </div>
</template>



<script>
import axios from 'axios';
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import Vue from 'vue'
import bus from '../../eventbus.js'


export default {
  data(){
    return {
      isbianji:true,
      wancheng:'完成',
        bianji:'编辑',
        isallchecked:false,
        sum:0,
        current:1,
         datalist:[],
         checkgroup:[],
         isShow:false,
         shopcarlist:[
         ],
         busy:false
    }
  },
  methods:{
      mybianji(){
        this.isbianji = !this.isbianji
        },
      allchecked(){
        if(this.isallchecked){
          this.checkgroup = this.shopcarlist
        }else{
          this.checkgroup = []
        }
      this.computedsum()
      },

      add(data){
        data.productStatus++
      this.computedsum()

    },
      dev(data){
        data.productStatus--;
        if(data.productStatus===0){
          data.productStatus = 1
        }
        this.computedsum()

      },
      change(){
        if(this.checkgroup.length === this.shopcarlist.length){
          this.isallchecked = true
        }else{
          this.isallchecked = false
        }
        this.computedsum()
      },
      computedsum(){
          var mysum=0
          for(var i=0;i<this.checkgroup.length;i++){
            mysum+=this.checkgroup[i].productStatus * this.checkgroup[i].sellPrice
          }
          this.sum = mysum;
      },
      turn(){
      this.$router.push('/home')
      },
      toDetail(id,index){
        // console.log(index)
        axios({
        url:`/recommend/cart?currentPage=${this.current}&_=1557389979078`,
        }).then(result=>{
          console.log(result.data.data)
          // if(result.data.data){
            this.shopcarlist =[...this.shopcarlist,result.data.data[index]] 
          // }
          // this.shopcarlist =[...this.shopcarlist,result.data.data[0]] 
        })
         
      },
      loadMore(){
        console.log('到底了')
        this.busy = true 
        this.current++
      axios({
        url:`/recommend/cart?currentPage=${this.current}&_=1557389979078`,
      }).then(result=>{
        console.log(result)
        this.datalist = [...this.datalist,...result.data.data]
        console.log(this.datalist) 
        this.busy = false

      })
   //  注册登录权限管理  路由拦截器  git

        
      },

  },
  mounted() {
    axios({
      url:`/recommend/cart?currentPage=1&_=1557389979078`,
    }).then(result=>{
      console.log(result)
      this.datalist = result.data.data
      console.log(this.datalist)
    })


    this.$store.state.isTabbarShow = false
  },
  beforeMount() {
    const username = localStorage.getItem("username")
    if(username!==''){

    }else{
      this.$router.push('/login')
    }
  },
  destroyed() {
    this.$store.state.isTabbarShow = true
  }
}
</script>


<style lang="scss" scoped>
  .tuijianul{
    overflow:hidden;
  }
  .shangpinjia{
    font-size: 0.08rem;
  }
  .shuliangx{
    font-size: 0.1rem;
    color:#999
  }
  .shangpinming{
    font-size: .14rem 
  }
  .shangpinxiangqing{
    display: flex;
    justify-content: space-between; 
     align-items: center;

  }
  .shangpinimg{
    width:.8rem;
    height:.8rem;
  }
  .xuanzejiajian{
    width: 100%;
    height:0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between
  }
  .jiajiankuang{
    display: inline-block;
  }
  .shuliang{
    width:0.3rem;
    height: 0.2rem;
    background: white;
    display: inline-block;
    text-align: center; 
  }
  .jian{
    width:0.2rem;
    height:0.2rem;
    background: #ccc;
    display: inline-block;
    text-align: center;
  }
  .jia{
    width:0.2rem;
    height:0.2rem;
    background: #ccc;
    display: inline-block;
    text-align: center;
  }
  .headerdiv{
    height:0.4rem;
    display: flex;
    background: white;
    justify-content:space-between;
    align-items: center;
  } 
  .headerimg{
      width:0.25rem;
      height:0.25rem;
      padding-left:0.1rem;
    }

  .weinin{
    height:0.6rem;
    line-height: 0.6rem;
    background:white;
    width:100%;
    text-align:center;
  }
  
  .middlediv{
    width:100%;
    height:0.7rem;

  } 
   .middledivp{
     margin-top:0.16rem;
      font-size:0.14rem;
      text-align: center;
    }
    .button{
      text-align: center;
      margin-top: 0.05rem;
    }
    .buttona{
          background-color: #ffd444;
          color:black;
          text-align: center;
          margin-right: 0.02rem;
        }   
    .buttonb{
          background-color: #ffd444;
          color:black;
          text-align: center;
          margin-left: 0.02rem;

    }
    .tuijianli{
      height:2.35rem;
      float:left;
      background:white;
    }
  .tuijianimg{
    width:1.85rem;
    height:1.85rem;
   }
  .tuijianp{
    font-size: 0.10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #808080;
    width: 1.8rem;
    }

  .shopcar{
    font-weight: 600
    height 0.4rem    
    line-height 0.4rem;
    text-align :center
  }
  .bianji{
    font-size: 0.16rem
    height 0.4rem;
    line-height:0.4rem;
    text-align:center;
    padding-right:0.1rem;
  }
  .shopcarul{
    background: white;
  }
</style>





