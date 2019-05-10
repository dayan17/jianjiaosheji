<template>
    <div>
        <div class="register">注册
            <router-link to="/login" tag="span">登录</router-link>
        </div>
        <div class="register-input">
            <input type="text" placeholder="请设置用户名" ref="number" @blur="numberEvent">
            <p class="register-border"></p>
            <input type="text" placeholder="请设置名称" ref="name" @blur="nameEvent">
        </div>
        <div class="register-input">
            <input type="text" placeholder="请设置密码" ref="password" @blur="passwordEvent">
        </div>
        <span class="alert" ref="alert">{{alertContent}}</span>
        <div class="register-button" @click="handClick" ref="register">注册</div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                numberReg:/^\w{6,16}$/,
                alertContent:'用户名不能包含特殊字符，需在6到16位内'
            }
        },
        mounted() {
            this.$store.state.isTabbarShow = false
        },
        methods:{
            numberEvent(){
                if(this.numberReg.test(this.$refs.number.value)){
                    console.log('用户名成功')
                    this.$refs.alert.style.visibility = 'hidden'
                }else{
                    console.log('用户名不能包含特殊字符，需在6到16位内')
                    this.$refs.alert.style.visibility = 'visible'
                    this.alertContent = "用户名不能包含特殊字符，需在6到16位内"
                }
            },
            nameEvent(){
                if(this.numberReg.test(this.$refs.name.value)){
                    console.log('名称成功')
                    this.$refs.alert.style.visibility = 'hidden'
                }else{
                    console.log('名称不能包含特殊字符，需在6到16位内')
                    this.$refs.alert.style.visibility = 'visible'
                    this.alertContent = "名称不能包含特殊字符，需在6到16位内"
                }
            },
            passwordEvent(){
                if(this.numberReg.test(this.$refs.password.value)){
                    console.log('密码成功')
                    this.$refs.alert.style.visibility = 'hidden'
                }else{
                    console.log('密码不能包含特殊字符，需在6到16位内')
                    this.$refs.alert.style.visibility = 'visible'
                    this.alertContent = "密码不能包含特殊字符，需在6到16位内"
                }
            },
            handClick(){
                if(this.numberReg.test(this.$refs.number.value)&&this.numberReg.test(this.$refs.name.value)&&this.numberReg.test(this.$refs.password.value)){
                    axios({
                        method:'post',
                        url:'/registers/checkename',
                        data:{
                            username:this.$refs.number.value
                        }
                    }).then(res=>{
                        console.log(res.data)
                        if(res.data.allowregister===true){
                            axios({
                                method:'post',
                                url:'/registers/validates',
                                data:{
                                    username:this.$refs.number.value,
                                    password:this.$refs.password.value,
                                    name:this.$refs.name.value
                                }
                            }).then(res=>{
                                // alert('注册成功')
                                this.$router.push('/login')
                            }).catch(err=>{
                                alert('注册失败')
                            })
                        }else{
                            alert('用户名已存在')
                        }
                    }).catch(res=>{
                        console.log(res.data)
                    })
                }else{
                    this.$refs.alert.style.visibility = 'visible'
                    this.alertContent = "输入有误"
                }
            }
        },
        destroyed() {
            this.$store.state.isTabbarShow = true
        },
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
        height:.01rem;
        margin:0 auto;
    }
    .register-button{
        width:calc(100%-0.3rem);
        margin:.15rem;
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