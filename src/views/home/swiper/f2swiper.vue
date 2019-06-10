<template>
    <div class="aaa">
       <mt-swipe :auto="4000" >
       <mt-swipe-item v-for='data in datalist' :key="data.parentProductId">	
			
			<div class="d"><img :src="data.productImg"></div>
			 <!-- {{data}} -->
		</mt-swipe-item>
        
	   </mt-swipe>
    </div>
</template>
<script> 
import axios from 'axios'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
	data(){
		return{
            datalist:[]
		}
	},
  mounted(){
	  axios({
		  url:"/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1557467034463"
	  }).then(res =>{
          console.log(res.data.data.modules[2].moduleContent.products[0])
            this.datalist= res.data.data.modules[2].moduleContent.products
        })
	  
  }
  }
</script>
<style scoped>
img{
	width: 100%;
    height: 100%;
}
.d{
    width: 3.1rem;
}
.mint-swipe{
    width: 100%;
    height: 2.12rem;
}
</style>
