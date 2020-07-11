<template>
    <div class="we-bg we-flex-col">
        <h1>安徽工程大学图书管理系统</h1>
        <label class="we-input-lab">
            <Input prefix="md-person" v-model="userName" placeholder="用户名/邮箱" class="we-input"/>
        </label>
        <label class="we-input-lab">
            <Input prefix="md-lock" v-model="password" type="password" placeholder="密码" class="we-input"/>
        </label>
        <Button type="primary" class="we-login-btn" @click="loginBtnClick">登录</Button>
        <div class="we-login-bottom we-flex-row">
            <Checkbox >记住密码</Checkbox>
            <router-link to="/register">注册</router-link>
        </div>
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
                if (this.userName.length<1) {
                    this.$Message.warning("请输入用户名");
                    return;
                }
                if (this.password.length<1) {
                    this.$Message.warning("请输入密码");
                    return;
                }
                api.loginApi({"userName":this.userName,"password":this.password}).then((data)=>{
                    console.log(data);
                }).catch((error)=>{

                });
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    @import url("./login.css");
</style>