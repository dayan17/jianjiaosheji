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
    <input type="checkbox"  @change='allchecked()' v-model='isallchecked'> 
    <ul class='shopcarul' v-if='shopcarlist.length!==0'>
      <li class='shopcarli' v-for='data,index in shopcarlist' :key="data.id">  
        <!-- 数量加减 -->
        <div>
          <ul>
          <span @click="dev(data)">-</span>
          <span>{{data.number}}</span>          
          <span @click="add(data)">+</span>
          </ul>      
        </div>
    <!-- 选择框 -->
        <input type="checkbox" @change='change()' v-model='checkgroup' :value='data'>
        {{data.name}} 
        ￥{{data.price}} 
        <span>x{{data.number}}</span> 
                 <button @click='shopcarlist.splice(index, 1)'>删除</button>

          </li>
        <p>总价￥{{sum}}</p>
        <button @click="$router.push(`/home`)">去结算</button>
    </ul>

  <!--///////////////////////////// 推荐/////////////////////////////////////////////////// -->

        <p class='weinin'>- 为您推荐 -</p>

  <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20" infinite-scroll-immediate-check='false'>
    <li class='tuijianli' v-for='data in datalist' :key="data.productId" @click="toDetail(data.productId)">
          <img class='tuijianimg'  :src="data.productImg">
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
         shopcarlist:[
           {
             name:'商品1',
             price:10,
             number:1,
             id:1
           },
           {
             name:'商品2',
             price:20,
             number:1,
             id:2
           },
           {
             name:'商品3',
             price:30,
             number:1,
             id:3
           }
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
        data.number++
      this.computedsum()

    },
      dev(data){
        data.number--;
        if(data.number===0){
          data.number = 1
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
            mysum+=this.checkgroup[i].number * this.checkgroup[i].price
          }
          this.sum = mysum;
      },
      turn(){
      this.$router.push('/home')
      },
      toDetail(index){
      this.$router.push(`/detail/${index}`)
      },
      loadMore(){
        console.log('到底了')
        this.busy = true 
        console.log(this.busy)

        this.current++
      axios({
        url:`/recommend/cart?currentPage=${this.current}&_=1557389979078`,
      }).then(result=>{
        console.log(result)
        this.datalist = [...this.datalist,...result.data.data]
        console.log(this.datalist) 
        this.busy = false

      })

    
      }
  },
  mounted() {
    axios({
      url:`/recommend/cart?currentPage=1&_=1557389979078`,
    }).then(result=>{
      console.log(result)
      this.datalist = result.data.data
      console.log(this.datalist)
    })
  },
}
</script>


<style lang="scss" scoped>
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
</style>





