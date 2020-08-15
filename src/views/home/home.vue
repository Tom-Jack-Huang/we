<template>
    <el-container>
        <el-aside width="290px" class="we-side">
            <ul class="we-flex-col we-side-ul">
                <li>
                    <HomeSideImg :nick-name="userName" :level-state="leave"></HomeSideImg>
                </li>
                <li class="we-side-items">
                    <HomeSideItem title="主页" icon-class-name="icon-zhuyemian" :is-activity="activityNum===1"
                                  @click.native="itemClick(1)"></HomeSideItem>
                    <HomeSideItem title="图书管理" icon-class-name="icon-shiwuzhongxin_tushuguan" :is-now-show-more="false"
                                  :is-activity="activityNum===2" @click.native="itemClick(2)">
                        <div class="we-flex-col"
                             :class="{'we-hidden':activityNum!==2,'we-side-more-color':activityNum===2}">
                            <div class="we-tu-title we-tu-title-f we-mouse-state"
                                 :class="{'we-tu-title-sel':activitySubNum === 1}" @click="itemSubClick(1)">图书查询
                            </div>
                            <div class="we-tu-title we-mouse-state" :class="{'we-tu-title-sel':activitySubNum === 2}"
                                 @click="itemSubClick(2)">图书推荐
                            </div>
                            <div class="we-tu-title we-mouse-state" :class="{'we-tu-title-sel':activitySubNum === 3}"
                                 @click="itemSubClick(3)">图书采购
                            </div>
                        </div>
                    </HomeSideItem>
                    <HomeSideItem title="期刊管理" icon-class-name="icon-shu" @click.native="itemClick(3)"
                                  :is-activity="activityNum===3"></HomeSideItem>
                    <HomeSideItem title="借阅管理" icon-class-name="icon-book_icon" :is-now-show-more="false"
                                  @click.native="itemClick(4)" :is-activity="activityNum===4">
                        <div class="we-flex-col"
                             :class="{'we-hidden':activityNum!==4}">
                            <div class="we-tu-title we-tu-title-f we-mouse-state"
                                 :class="{'we-tu-title-sel':activitySubNum === 4}" @click="itemSubClick(4)">借出图书
                            </div>
                            <div class="we-tu-title we-mouse-state" :class="{'we-tu-title-sel':activitySubNum === 5}"
                                 @click="itemSubClick(5)">逾期未还
                            </div>
                            <div class="we-tu-title we-mouse-state" :class="{'we-tu-title-sel':activitySubNum === 6}"
                                 @click="itemSubClick(6)">预约图书
                            </div>
                        </div>
                    </HomeSideItem>
                    <HomeSideItem title="读者管理" icon-class-name="icon-duzheguanli" @click.native="itemClick(5)"
                                  :is-activity="activityNum===5"></HomeSideItem>
                    <HomeSideItem title="工作人员管理" icon-class-name="icon-renyuanxinxi" @click.native="itemClick(6)"
                                  :is-activity="activityNum===6"></HomeSideItem>
                    <HomeSideItem title="设置" icon-class-name="icon-shezhi" @click.native="itemClick(7)"
                                  :is-activity="activityNum===7"></HomeSideItem>
                </li>
            </ul>

        </el-aside>
        <el-container>
            <el-main class="we-content">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    import HomeSideImg from "../../components/home/homeSideImg";
    import HomeSideItem from "../../components/home/homeSideItem";

    export default {
        name: "home",
        components: {HomeSideItem, HomeSideImg},
        data() {
            return {
                userName: '大王饶命',
                leave: '一级管理员',
                activityNum: 1,
                activitySubNum: 1,
            }
        },
        methods: {
            itemClick(num) {
                if (this.activityNum !== num) {
                    if (num ===2) {
                        this.activitySubNum = 1;
                    } else {
                        this.activitySubNum = 4;
                    }

                    this.activityNum = num;
                }

            },
            itemSubClick(num) {
                if (this.activitySubNum !== num) {
                    this.activitySubNum = num;
                }
            }
        },
    }
</script>

<style scoped>
    @import url("./home.css");
</style>