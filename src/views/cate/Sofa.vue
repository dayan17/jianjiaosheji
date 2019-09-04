<template>
    <div>
       <div class="headers">
           <a href="/home"><img src="../../../public/images/home.png" alt=""></a>
           <h3>沙发</h3>
           <a href="/Category"><img src="../../../public/images/category.png" alt=""></a>
       </div>
        <ul class="around url">
           <li><div @click="char(35,1)" :class="current===1?'soft-nav':''"><i class="iconfont icon-shafa"></i><span>All</span></div></li>
           <li><div @click="char(20,2)" :class="current===2?'soft-nav':''">沙发</div></li>
           <li><div @click="char(21,3)" :class="current===3?'soft-nav':''">椅凳</div></li>
           <li><div @click="char(24,4)" :class="current===4?'soft-nav':''">柜架</div></li>
           <li><div @click="char(2012,5)" :class="current===5?'soft-nav':''">休闲椅</div></li>
           <li><div @click="char(2210,6)" :class="current===6?'soft-nav':''">餐桌</div></li>
           <li><div @click="char(2211,7)" :class="current===7?'soft-nav':''">茶几和边桌</div></li>
           <li><div @click="char(2212,8)" :class="current===8?'soft-nav':''">书桌</div></li>
           <li><div @click="char(2310,9)" :class="current===9?'soft-nav':''">床</div></li>
       </ul>
       <ul class="sofa">
           <li class="sofa-li" v-for="data in datalist" :key="data.productId">
               <img :src="data.productImg" alt="">
                <div>{{data.productTitle}}</div>
                <span>￥{{data.sellPrice}}</span>
           </li>
       </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            datalist:[],
            isShow:'',
            current:1
        }
    },
    methods:{
        char(index,a){
            this.current=a
            axios({
               url:`/pages/category/${index}?currentPage=1&sort=onShelfTime&order=desc&_=1557552854848`  
            }).then(res=>{
                this.datalist=res.data.data
            })
        }
    },
    mounted() {
        this.$store.state.isTabbarShow = false
        axios({
            url:`/pages/category/20?currentPage=1&sort=onShelfTime&order=desc&_=1557552854848`
        }).then(res=>{
            this.datalist=res.data.data
        })
    },
    destroyed() {
        this.$store.state.isTabbarShow = true
    }
}
</script>

<style scoped>
    .active{
        background:red
    }
    .soft-nav{
        background:#ccc;
    }
    .sofa{
       width:100%;
       overflow: hidden;
    }
    .sofa-li{
        width:49%;
        float: left;
        margin-left: 0.01rem;
        border:1px #f5f5f5 solid;
        padding-bottom:.3rem;
        background:white;
    }

    .sofa-li img{
        width:100%;
    }
    .sofa-li div{
        color:#808080;
        font-size:.14rem;
        white-space: nowrap;
        overflow: hidden;
        text-align:center; 
        text-overflow: ellipsis;

    }
    .sofa-li span{
        font-size:.14rem;
        margin-left:.2rem;
    }
    .headers{
        height: 0.4223rem;
        display: flex;
        justify-content: space-between;
        
    }

    .headers a{
       
        height: 100%;
       
    }

    .headers img{
        height: 70%;
        margin-top: 0.06rem;
    }

    .headers h3{
        line-height: 0.42rem;
    }

    .around{
        width:100%;
        overflow-x: scroll;
        /* position: absolute; */
        white-space: nowrap;
    }

    .around li{
        height:1rem;
        width:1rem;
        position:relative;
        display:inline-block
    }
    .around li div{
        width:.8rem;
        height:.8rem;
        text-align:center;
        line-height:.8rem;
        border:1px #f3f3f3 solid;
        margin:.08rem auto 0 auto;
        font-size:.14rem;
        color:white;
        font-weight:600;
    }
    .around li div span{
        display:inline-block;
    }
    .url{
        widows: 1.0558rem;
        background: url(https://img.wowdsgn.com/category/background/10.jpg?imageslim)
    }
</style>

