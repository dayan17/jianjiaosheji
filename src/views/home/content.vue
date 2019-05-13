<template>
    <div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
       return{
           datalist:[]
       }
    },
    mounted(){
        axios({
            url:"https://m.wowdsgn.com/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1557382633572",
            headers:{
                'Host': 'm.wowdsgn.com'
                'Referer': 'https://m.wowdsgn.com/pages/index'
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
            }
        }).then( res =>{
            this.datalist=res.data.data
        })

    },
    destoryed(){
        
    }
}
</script>