<template>
    <div class="we-bg we-flex-col">
        <h1>安徽工程大学图书管理系统</h1>
        <div class="we-input-lab">
            <el-input prefix-icon="el-icon-user-solid" v-model="userName" placeholder="用户名/邮箱" class="we-input"/>
        </div>
        <div class="we-input-lab">
            <el-input prefix-icon="el-icon-s-tools" v-model="password" type="password" placeholder="密码"
                      class="we-input"/>
        </div>
        <el-button type="primary" class="we-login-btn" @click="loginBtnClick">登录</el-button>
        <div class="we-login-bottom we-flex-row">
            <el-checkbox>记住密码</el-checkbox>
            <router-link to="/register">注册</router-link>
        </div>
        <div class="we-share">
            <el-button type="primary" @click="shareBtn">分享</el-button>
        </div>
    </div>
</template>

<script>
    import api from "@/api/api";
    import wx from 'weixin-js-sdk'

    export default {
        name: "Login",
        data() {
            return {
                userName: '',
                password: ''
            }
        },
        methods: {
            loginBtnClick() {
                if (this.userName.length < 1) {
                    this.$message.warning("请输入用户名");
                    return;
                }
                if (this.password.length < 1) {
                    this.$message.warning("请输入密码");
                    return;
                }
                api.loginApi({"userName": this.userName, "password": this.password}).then((data) => {
                    console.log(data);
                }).catch((error) => {

                });
            },
            shareBtn() {
                wx.updateAppMessageShareData({
                    title: '老黄的邀请', // 分享标题
                    desc: '婚礼', // 分享描述
                    link: 'http://192.168.31.21:8085/login', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: '../../assets/logo.png', // 分享图标
                    success: function (data) {
                        // 设置成功
                        console.log(data);
                    }
                });
            }
        },
        mounted() {
            api.wxTokenApi({urlStr: location.href.split('#')[0]}).then((data)=>{
                console.log(data);
                if (data.result) {
                    wx.config({
                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打
                        appId: data.data.appId, // 必填，公众号的唯一标识
                        timestamp: data.data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
                        signature: data.data.signature,// 必填，签名
                        jsApiList: ['updateAppMessageShareData'] // 必填，需要使用的JS接口列表
                    });

                }
            }).catch((error)=>{
                console.log(error);
            });

        }
    }
</script>

<style scoped>
    @import url("./login.css");
</style>