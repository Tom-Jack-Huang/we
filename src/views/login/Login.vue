<template>
    <div class="we-bg we-flex-col">
        <h1>安徽工程大学图书管理系统</h1>
        <Input prefix="md-person" v-model="userName" placeholder="用户名/邮箱" class="we-input"/>
        <Input prefix="md-lock" v-model="password" type="password" placeholder="密码" class="we-input"/>
        <Button type="primary" class="we-login-btn" @click="loginBtnClick">登录</Button>
    </div>
</template>

<script>
    import api from "@/api/api";

    export default {
        name: "Login",
        data(){
            return{
                userName:'',
                password:''
            }
        },
        methods:{
            loginBtnClick() {
                api.loginApi({"userName":this.userName,"password":this.password}).then((data)=>{
                    console.log(data);
                }).catch((error)=>{
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
    @import url("./login.css");
</style>