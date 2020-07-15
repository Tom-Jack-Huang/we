<template>
    <div class="ivu-layout">
        <Layout>
            <Sider hide-trigger :width="290" class="we-side we-flex-col">
            <HomeSideImg :nick-name="userName" :level-state="leave"></HomeSideImg>
                <div class="we-side-items">
                    <HomeSideItem></HomeSideItem>
                    <HomeSideItem></HomeSideItem>
                    <HomeSideItem></HomeSideItem>
                    <HomeSideItem></HomeSideItem>
                    <HomeSideItem></HomeSideItem>
                </div>
            </Sider>
            <Layout>
                <Content class="we-content">Content</Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import HomeSideImg from "../../components/home/homeSideImg";
    import HomeSideItem from "../../components/home/homeSideItem";
    export default {
        name: "home",
        components: {HomeSideItem, HomeSideImg},
        data() {
            return {
                'userName': '大王饶命',
                'leave':'一级管理员'
            }
        }
    }
</script>

<style scoped>
    @import url("./home.css");
</style>