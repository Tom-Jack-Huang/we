<template>
    <div class="we-flex-col">
        <el-avatar :size="152" src="https://empty" @error="errorHandler">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
        </el-avatar>
        <div class="we-flex-row we-side-nick">
            {{nickName}}
            <i class="el-icon-share we-side-notice"></i>
        </div>
        <div class="we-side-leave">
            {{levelState}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeSideImg",
        props: {
            nickName: {
                type: String,
                default: ""
            },
            levelState:{
                type: String,
                default: ""
            }
        },
        methods: {
            errorHandler() {
                return true;
            }
        },
    }
</script>

<style scoped>
    @import url("homeSideImg.css");

</style>

