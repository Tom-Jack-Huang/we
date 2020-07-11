<template>
    <div class="we-bg we-flex-col">
        <h1>安徽工程大学图书管理系统</h1>
        <label class="we-flex-row we-input-lab">
            <span>*</span>
            <Input prefix="md-person" v-model="userName" placeholder="用户名" class="we-input"/>
        </label>
        <label class="we-flex-row we-input-lab">
            <span></span>
            <Input prefix="md-person" v-model="email" placeholder="邮箱" class="we-input"/>
        </label>
        <label class="we-flex-row we-input-lab">
            <span></span>
            <Input prefix="md-person" v-model="phone" placeholder="手机号" class="we-input"/>
        </label>
        <label class="we-flex-row we-input-lab">
            <span></span>
            <Input prefix="md-person" v-model="qq" placeholder="QQ" class="we-input"/>
        </label>
        <label class="we-flex-row we-input-lab">
            <span>*</span>
            <Input prefix="md-lock" v-model="password" type="password" placeholder="密码" class="we-input"/>
        </label>
        <label class="we-flex-row we-input-lab">
            <span>*</span>
            <Input prefix="md-lock" v-model="repeatPassword" type="password" placeholder="确认密码" class="we-input"/>
        </label>
        <Button type="primary" class="we-login-btn" @click="registerBtnClick">注册</Button>
    </div>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "register",
        data() {
            return {
                userName: '',
                email: '',
                phone: '',
                qq: '',
                repeatPassword: '',
                password: ''
            }
        },
        methods: {
            registerBtnClick() {
                if (this.userName.length<1) {
                    this.$Message.warning("请输入用户名");
                    return;
                }
                if (this.password.length<1) {
                    this.$Message.warning("请输入密码");
                    return;
                }
                if (this.repeatPassword.length<1) {
                    this.$Message.warning("请输入确认密码");
                    return;
                }
                if (this.password !== this.repeatPassword) {
                    this.$Message.warning("两次密码不一致");
                    return;
                }
                let param = {
                    userName:this.userName,
                    email:this.email,
                    phone:this.phone,
                    qq:this.qq,
                    password:this.password
                };
                api.registerApi(param).then((data)=>{
                    console.log(data);
                    if (data.result) {
                        this.$Message.success("注册成功去登录吧！");
                        setTimeout(()=>{
                            this.$router.push('Login');
                        },500);
                    } else {
                        this.$Message.error(data.msg);
                    }
                }).catch((error)=>{

                });

            }
        },
    }
</script>

<style scoped>
    @import url("./register.css");

</style>