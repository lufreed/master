<template>
        <!-- 注册开始 -->
        <div class="show-page">
        <div class="show-cont">
            <div class="show-box">
                <h3>1分钟注册,遇见有缘人!</h3>
                <div class="show-info">
                    <div class="show-infos gender">
                        <label for="">性别 </label>
                        <input type="radio" name="男" id="">男
                        <input type="radio" name="女" id="">女
                </div>
                <div class="show-infos school">
                    <label for="">所属院校 </label>
                    <select name="" id="">
                        <option value="">请选择院校</option>
                        <option value="">人工智能学院</option>
                    </select>
                </div>
                <div class="show-infos reg">
                    <n-button>免费注册</n-button>
                </div>
                <a href="">立即登录</a>
                </div>
            </div>
        </div>
    </div>
    <!-- 注册结束 -->
    <!-- 轮播开始 -->
    <!-- <div class="show-carousel">
        <n-carousel autoplay interval='2000' loop>
            <img
            class="carousel-img"
            src="../assets/bg.jpg"
            >
            <img
            class="carousel-img"
            src="../assets/home/bg-2.png"
            >
            <img
            class="carousel-img"
            src="../assets/home/bg-3.png"
            >
            <img
            class="carousel-img"
            src="../assets/home/bg-4.png"
            >
        </n-carousel>
    </div> -->
    <!-- 轮播结束 -->
    <!-- 列表开始 -->
    <div class="show-list">
        <div class="show-tit">
            <h3>
                <img src="../assets/home/tj.png" alt="">
                推荐人员</h3>
            <div class="list-xq">
                <ul>
                    <li>
                        <div>
                            <img src="../assets/home/3.png" alt="">
                        </div>
                        <div class="list-tit">
                            用户名
                        </div>
                        <div class="list-xtit">
                            22岁<span>教师</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/home/3.png" alt="">
                        </div>
                        <div class="list-tit">
                            用户名
                        </div>
                        <div class="list-xtit">
                            22岁<span>教师</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/home/3.png" alt="">
                        </div>
                        <div class="list-tit">
                            用户名
                        </div>
                        <div class="list-xtit">
                            22岁<span>教师</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/home/3.png" alt="">
                        </div>
                        <div class="list-tit">
                            用户名
                        </div>
                        <div class="list-xtit">
                            22岁<span>教师</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/home/3.png" alt="">
                        </div>
                        <div class="list-tit">
                            用户名
                        </div>
                        <div class="list-xtit">
                            22岁<span>教师</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/home/3.png" alt="">
                        </div>
                        <div class="list-tit">
                            用户名
                        </div>
                        <div class="list-xtit">
                            22岁<span>教师</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 列表结束 -->
</template>

<script>
    export default{
        name:'ShowPage',
    }
</script>

<style lang="less" scoped>
    .carousel-img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    .show-page{
        background: url('../assets/bg.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 70px 0 0 100px;
    }
    .show-info{
        text-align: center;
        padding: 20px;
        .show-infos{
            padding: 10px 0;
        }
        .gender{
            label{
                margin-right: 30px;
            }
            input:last-child{
                margin-left: 20px;
            }
        }
        .school select{
            margin-left: 10px;
            width: 140px;
            border: 1px solid #c8c8c8;
            padding: 4px;
        }
        .reg button{
            background: #fae4e7;
            // background: rgba(85, 169, 246, 0.56);
            // background: rgba(167, 173, 230, 0.8);
            width: 200px;
        }
        a{
            color: #333;
        }
    }
    .show-list{
        overflow: hidden;
        padding: 30px 20px;
        background: #f0f0f0;
        .show-tit{
            width: 90%;
            margin: 0 auto;
            h3{
                font-size: 18px;
                color: #666;
                margin-bottom: 10px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                padding: 10px 0;
                border-top: 1px solid #fff;
                border-bottom: 1px solid #fff;
                align-items: center;
                display: flex;
                img{
                    padding-right: 10px;
                }
            }
        }
        .list-xq{
            overflow: hidden;
            background: #fff;
            padding: 10px 20px;
            ul{
                width: 100%;
                li{
                    list-style: none;
                    float: left;
                    padding: 10px;
                    margin: 10px 20px;
                    box-shadow: 1px 1px 6px #eceaea;
                    img{
                        width: 180px;
                        height: 200px;
                        object-fit: cover;
                        border: 1px solid #f8f3f3;
                    }
                    .list-xtit span{
                        padding: 0 10px;
                        text-overflow: ellipsis;
                        width: 20px;
                    }
                }
            }
        }
    }
    .show-cont{
        width: 360px;
        height: 350px;
        .show-box{
            padding: 20px;
            background-color: #fff;
            box-shadow: 1px 2px 4px #eceaea;
            h3{
                font-family: serif;
                text-align: center;
                border-bottom: 1px solid #c8c8c8;
                padding-bottom: 10px;
            }
        }
    }
</style>