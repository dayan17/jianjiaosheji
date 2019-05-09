<template>
  <div class='biggestpage'>
    <div class='headerdiv'>
      <img class='headerimg'  src='../../public/images/home.png' @click="turn">
      <h4 class='shopcar'>购物车</h4>
      <p class="bianji">编辑</p>
    </div>
    
  <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20" infinite-scroll-immediate-check='false'>
    <li v-for='data in datalist' :key="data.productId">
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
import Vue from 'vue'


export default {
  data(){
    return {
        current:1,
         datalist:[],
         busy:false,
    }
  },
  methods:{
      turn(){
      this.$router.push('/home')
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
    display: flex;
    justify-content:space-between;
  } 
  .headerimg{
      width:0.25rem;
      height:0.25rem;
    }

    li{
      height:2.35rem;
      float:left;
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
  }
  .bianji{
    font-size: 0.16rem
  }
</style>

