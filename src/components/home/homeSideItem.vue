<template>
    <div class="we-side-item">
        <div class="we-flex-row we-mouse-state">
            <i class="iconfont" :class="[thisIconClassName,selectStateIcon]" ></i>
            <div :class="{'we-side-item-title':true,'we-side-item-activity':isActivity}">
                {{title}}
            </div>
            <i :class="{'el-icon-arrow-right':!isActivity,'el-icon-arrow-down':isActivity,'nowShow':isNowShowMore}" ></i>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "homeSideItem",
        props: {
            title: {
                type: String,
                default: ''
            },
            iconClassName: {
                type: String,
                default: ''
            },
            isNowShowMore:{
                type: Boolean,
                default: true
            },
            isActivity:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                thisIconClassName: this.iconClassName +(this.isActivity?' we-side-item-icon-activity':''),
                selectStateIcon:''
            }
        },
        watch: {
            isActivity(obj) {
                if (obj) {
                   this.selectStateIcon = 'we-side-item-icon-activity';
                } else  {
                    this.selectStateIcon = '';
                }
            }
        },
    }
</script>

<style scoped>
    @import url("./homeSideItem.css");
</style>