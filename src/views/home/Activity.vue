<template>
  <div>
     <!-- v-if="data.moduleId!='1316'" -->
        <swiper></swiper>
        <div v-for="data in datalist" :key="data.moduleId"  class="ban">
           
            <!-- {{data.moduleContent.}} -->
            <img :src="data.moduleContent.bannerImgSrc">
        </div>
		<div class="i">已经到底了</div>

	</div>
</template>

<script>
import swiper from './swiper/aswiper'
import axios from 'axios'
export default {
    data(){
    return{
        isCreated:true,
        datalist:[]
    }     
    },
    mounted(){
        axios({
            url:"/v2/page?pageId=1&tabId=10010&currentPage=1&pageSize=8&_=1557457290451",
        }).then(res =>{
            // console.log(res.data.data.modules[1].moduleContent.banners[0].bannerImgSrc)
            this.datalist= res.data.data.modules
            console.log(this.datalist)
        })

    },
    components:{
        swiper
    }
}
</script>
<style scoped>
    img{
        width: 100%;
    }
    .ban{
        /* height: 290px; */
        margin-top:0.13rem;
        background:white;
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
    .i{
      text-align: center;
    }
</style>

