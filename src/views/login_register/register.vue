<template>
    <div>
        <div class="register">注册
            <router-link to="/login" tag="span">登录</router-link>
        </div>
        <div class="register-input">
            <input type="text" placeholder="请输入账号" ref="number">
            <p class="register-border" ></p>
            <input type="text" placeholder="请输入用户名">
        </div>
        <div class="register-input">
            <input type="text" placeholder="请输入密码">
            <p class="register-border"></p>
            <input type="text" placeholder="请重复密码">
        </div>
        <div class="register-button">注册</div>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.$refs.number.onblur = this.handNumber
        },
        methods:{
            handNumber(){
                console.log(this.$refs.number.value)
            }
        }
    }
</script>

<style scoped>
    .register{
        background:white;
        height:.4rem;
        width:100%;
        font-weight:bold;
        line-height:.4rem;
        text-align:center;
    }
    .register span{
        font-weight:100;
        position:absolute;
        right:.1rem;
    }
    .register-input{
        width:calc(100%-0.3rem);
        margin:.15rem;
        background:white;
        height:1rem;
    }
    .register-input input{
        border:none;
        padding-left:.15rem;
        width:100%;
        height:.49rem;
        box-sizing:border-box;
        outline:none
    }
    .register-input .register-border{
        width:3.2rem;
        background: #ccc;
        height:1px;
        margin:0 auto;
    }
    .register-button{
        width:calc(100%-0.3rem);
        margin:.6rem .15rem .15rem .15rem;
        background:rgb(255, 214, 50);
        text-align:center;
        line-height:.4rem;
        height:.4rem;
    }
</style>