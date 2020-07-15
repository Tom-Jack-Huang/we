<template>
    <div class="we-flex-col">
        <img src="../../assets/hh.jpg" alt="" class="we-home-avatar">
        <div class="we-flex-row we-side-nick">
            {{nickName}}
            <Icon type="ios-notifications" class="we-side-notice" />
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
    }
</script>

<style scoped>
    @import url("homeSideImg.css");

</style>

