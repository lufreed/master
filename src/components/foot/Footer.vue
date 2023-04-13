<template>
    <div class="foot">
        <!-- <div class="foot-top">
            <div class="top-left">
                <div class="left-img">
                    <img src="../../assets/home/foot-ewm.png" alt="">
                </div>
                <div class="left-tit">
                    <h2>脱单新体验 寻爱就现在</h2>
                    <p>更多优质异性,在线等你脱单</p>
                    <h3>扫码关注更多</h3>
                </div>
            </div>
            <div class="top-right">
                <h1>偶遇缘分 预见幸福</h1>
                <div class="right-tit">
                    一分钟找到对的Ta
                </div>
                <a>免费注册 快速脱单</a>
            </div>
        </div> -->
        <div class="foot-list">
            <div class="list-li">
                <ul>
                    <li>
                        <h4>关于我们</h4>
                    </li>
                    <li>网站介绍</li>
                    <li>人工客服</li>
                    <li>联系我们</li>
                </ul>
                <ul>
                    <li>
                        <h4>奇妙缘分</h4>
                    </li>
                    <li>爱情故事</li>
                    <li>恋爱宝典</li>
                    <li>新手上路</li>
                </ul>
                <ul>
                    <li>
                        <h4>注册登录</h4>
                    </li>
                    <li>会员注册</li>
                    <li>会员登录</li>
                    <li>注意事项</li>
                </ul>
                <ul>
                    <li>
                        <h4>联系方式</h4>
                    </li>
                    <ul>
                        <li>邮箱:1915576655@qq.com</li>
                        <li>微信:campusservice</li>
                        <li>手机:159069761415</li>
                    </ul>
                </ul>
<!--                <ul>-->
<!--                    <li>扫码关注</li>-->
<!--                    <ul>-->
<!--                        <li class="list-img">-->
<!--                            <img src="../../assets/home/foot-ewm.png" alt="">-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </ul>-->
            </div>
            <div class="foot-cont">
                <div>茫茫人海中，能够相遇是一种缘分</div>
            </div>
            <div class="foot-btm">
                <p>版权所有 @ pro六人小组</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Footer',
    }
</script>

<style lang="less" scoped>
    ul{
		padding-left: 0 !important;
	}
    .foot{
        overflow: hidden;
    }
    .foot-top{
        background: url('@/assets/home/foot-bg.jpg') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px 0;
        .top-left{
            display: flex;
            align-items: center;
            .left-img{
                width: 200px;
                height: 200px;
                img{
                    width: 200px;
                    height: 200px;
                }
            }
            .left-tit{
                color: #fff;
                padding-top: 20px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                p{
                    margin: 10px 0;
                }
            }
        }
        .top-right{
            color: #333;
            padding-top: 10px;
            h1{
                font-family: Arial, Helvetica, sans-serif;
            }
            .right-tit{
                padding: 4px 0;
                font-size: 16px;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 4px;
                margin: 4px 0 8px 0;
                color: #ef6f6f;
            }
            a{
                padding: 4px 0;
                text-decoration: underline;
                color: #333;
            }
            a:hover{
                color: #fff;
                cursor: pointer;
            }
        }
    }
    .foot-list{
        overflow: hidden;
        //background: #B3FFAB;
        background: #abc3ff1f;
        padding: 20px 0;
        .list-li{
            display: flex;
            justify-content: space-around;
            width: 90%;
            margin: 0 auto;
            li{
                list-style: none;
                color: #464646;
                padding: 2px 0;
            }
            h4{
                padding: 10px 0 8px;
                font-size: 16px;
                font-weight: 500;
            }
        }
        .list-img{
            img{
                width: 100px;
                height: 100px;
            }
        }
    }
    .foot-cont{
        color: #666;
        padding: 10px 0;
        width: 80%;
        margin: 0 auto;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
    }
    .foot-btm{
        padding-top: 20px;
        text-align: center;
        color: #666
    }
</style>