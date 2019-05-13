<template>
  <div>
        <swiper></swiper>
        <div v-for="data in datalist" :key="data.moduleId"  v-if="data.moduleId!='188'" class="ban">
            <p class="t">{{data.moduleName}}</p>
            <p class="b">{{data.moduleDescription}}</p>
            <div class="w l"  v-for="data,index in data.moduleContent.products" v-if="index<6">     
                <img :src="data.productImg" alt="" >
                <p class="u">{{data.productName}}</p>
                <p class="y">￥{{data.sellPrice}}</p>
            </div>
          
            <!-- <swiperr v-if="isShow"></swiperr> -->
           <!-- <img :src="data.moduleContent.bannerImgSrc"> -->
           <!-- <p class="y">{{data.moduleContent.productImg}}</p> -->
           <!-- <img src="data.moduleContent.productImg" alt=""> -->
        </div>
		<div class="i">已经到底了</div>
	</div>
</template>

<script>
import swiper from './swiper/fswiper'
// import swiperr from './swiper/f2swiper'
import axios from 'axios'
export default {  
    data(){
        return{
            isCreated:true,
            datalist:[],
            // isShow:true
        }  
    },
    mounted(){
        axios({
            url:"/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1557485807160",
        }).then(res =>{
            // console.log(res.data.data.modules[1].moduleContent.banners[0].bannerImgSrc)
            this.datalist= res.data.data.modules
            // this.tablelist=this.datalist[2].moduleContent.products
            // console.log(this.datalist[2].moduleContent.products)
            // this.data1=this.datalist[2].moduleContent.products[0]
            // console.log(this.data1)
        })
        // this.isShow=false
    },
    components:{
        swiper,
        // swiperr
    }
}
</script>
<style scoped>
     img{
        width: 100%;
        height: 2.08rem;
    }
    .ban{
        margin-top:0.13rem;
        background:white;
        margin-bottom: 0.13rem;
       /* border:1px solid black; */
       overflow: hidden;
    }
    .ban .t{
        font-size: 0.12rem;
        text-align: center;
        padding-top:0.33rem;
    }
    .ban .b{
        font-size:0.10rem;
        color:#808080;
        padding-top:0.23rem;
        text-align: center;
        padding-bottom:0.23rem;
    }
    .u{
       font-size:0.12rem;
       height: 0.24rem;
       color:#808080;
       margin-bottom: 0.03rem;
    }
    .y{
        font-size: 0.1rem;
    }
    .i{
      text-align: center;
    }
    .w{
        width:50%;
    }
    .l{
        float: left;
    }
</style>