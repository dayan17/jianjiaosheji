<template>
    <div>
        <div class="login-nav">
            <router-link tag="span" to="/home">首页</router-link>
            <span class="login-span">登录</span>
            <router-link tag="span" to="/register">注册</router-link>
        </div>
        <div class="login-input">
            <div class="login-password-test">
                <p>密码登录</p>
            </div>
            <input type="text" placeholder="请输入用户名" ref="username">
            <p class="login-border"></p>
            <input type="text" placeholder="请输入密码" ref="password">
        </div>
        <span class="alert" ref="alert">{{alertContent}}</span>
        <div class="login-button" ref="login" @click="handClick" @touchstart="start" @touchend="end">确认</div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                alertContent:'用户名或密码错误'
            }
        },
        methods:{
            handClick(){
                // console.log('aaaa')
                axios({
                    method:'post',
                    url:'/logins/validate',
                    data:{
                        username:this.$refs.username.value,
                        password:this.$refs.password.value
                    }
                }).then(res=>{
                    // console.log(res.data)
                    if(res.data.ok === 1){
                        // console.log(res.data.token)
                        localStorage.setItem("token",res.data.token.name)
                        localStorage.setItem("username",this.$refs.username.value)
                        this.$router.push('/home')
                        this.$refs.alert.style.visibility = 'hidden'
                    }else{
                        this.$refs.alert.style.visibility = 'visible'
                    }
                })
            },
            start(){
                this.$refs.login.style.background = '#ff0036'
            },
            end(){
                this.$refs.login.style.background = 'rgb(255, 214, 50)'
            }
        },
        mounted() {
            this.$store.state.isTabbarShow = false
        },
        destroyed() {
            this.$store.state.isTabbarShow = true
        }
    }
</script>

<style scoped>
    .login-nav{
        background:white;
        height:.4rem;
        width:100%;
        line-height:.4rem;
        display:flex;
        justify-content:space-between
    }
    .login-nav .login-span{
        font-weight:bold;
    }
    .login-nav span:first-of-type{
        margin-left:.1rem
    }
    .login-nav span:last-of-type{
        margin-right:.1rem
    }
    .login-input{
        width:calc(100%-0.3rem);
        margin:.15rem;
        background:white;
    }
    .login-input .login-password-test{
        width:100%;
        height:.4rem;
        background:#f9f9f9;
        text-align:center;
        line-height:.4rem;
        font-size:.14rem;
    }
    .login-input .login-password-test p{
        width:.8rem;
        height:100%;
        box-sizing:border-box;
        border-bottom:.03rem solid black;
        margin:0 auto;
    }
    .login-input input{
        border:none;
        padding-left:.15rem;
        width:100%;
        height:.49rem;
        box-sizing:border-box;
        outline:none
    }
    .login-input .login-border{
        width:3.2rem;
        background: #ccc;
        height:.01rem;
        margin:0 auto;
    }
    .login-button{
        width:calc(100%-0.3rem);
        margin:.39rem .15rem .15rem .15rem;
        background:rgb(255, 214, 50);
        text-align:center;
        line-height:.4rem;
        height:.4rem;
    }
    .alert{
        color:red;
        margin-left:.2rem;
        visibility:hidden;
    }
</style>