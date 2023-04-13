<template>
    <a @click="showModal = true">登录</a>
    <n-modal
        v-model:show="showModal"
        class="custom-card"
        preset="card"
        :style="bodyStyle"
        :bordered="false"
        :segmented="segmented"
    >
    <template #header-extra class="head-logo">
        <span style="font-size: 12px;">请登录~~</span>
    </template>
    <n-card class="card-cont">
        <n-tabs type="line" animated default-value="oasis" justify-content="space-evenly">
            <n-tab-pane name="oasis" tab="扫码登录">
                <img src="../../assets/home/foot-ewm.png" alt="" class="wx-ewm">
                <p class="wx-xtit">扫一扫,快速登录</p>
            </n-tab-pane>
        </n-tabs>
    </n-card>
    </n-modal>
</template>

<script>
import { ref } from "vue";
    export default{
        name:'Header',
        setup(){
            return{
                options: [
                    {
                    label: "个人资料",
                    key: "profile",
                    // icon: renderIcon(UserIcon)
                    },
                    {
                    label: "编辑资料",
                    key: "editProfile",
                    // icon: renderIcon(EditIcon)
                    },
                    {
                    label: "退出登录",
                    key: "logout",
                    // icon: renderIcon(LogoutIcon)
                    }
                ],
                bodyStyle: {
                    width: '600px'
                },
                showModal: ref(false)
            }
        }
    }
</script>

<style lang="less" scoped>
    .head-logo{
        width: 30px;
        height: 30px;
        .img{
            width: 15px;
            height: 15px;
        }
    }
    .card-cont{
        text-align: center;
        .login{
            text-align: center;
        }
        .wx-ewm{
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .wx-xtit{
            font-size: 12px;
            color: #bababa;
        }
        .other{
            padding: 20px 0 10px 0;
            h5{
                padding: 10px 0;
                color: #bababa;
            }
            .other-img {
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: center;
                .email{
                    width: 42px;
                    height: 42px;
                    margin: 0 10px;
                }
            }
        }
    }
</style>