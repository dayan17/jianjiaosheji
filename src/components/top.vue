<template>
    <div class="top" ref="toTop" @click="handClick">顶部</div>
</template>

<script>
export default {
    mounted() {
        window.onscroll =this.handleScroll;
    },
    destroyed() {
        window.onscroll = null
    },
    methods:{
        handleScroll(){
            if( (document.documentElement.scrollTop || document.body.scrollTop) >= 500){
                this.$refs.toTop.style.display = 'block'
            }else{
                this.$refs.toTop.style.display = 'none'
            }
        },
        handClick(){
            var topScoll = setInterval(()=>{
                if(document.documentElement.scrollTop>0){
                    document.documentElement.scrollTop -= 120
                }else{
                    clearInterval(topScoll)
                }
            },16)
        },
    }
    }
</script>

<style scoped>
.top{
  position:fixed;
  width:.3rem;
  height:.3rem;
  background:white;
  text-align:center;
  color:#686868;
  line-height:.3rem;
  border-radius:50%;
  font-size:.12rem;
  right:.2rem;
  bottom:1.5rem;
  display:none;
}

</style>