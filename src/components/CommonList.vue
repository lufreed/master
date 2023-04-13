<template>
    <div class="home-list">
	<h4 class="home-tj">每日推荐 |</h4>
	<div class="home-list-box">
		<ul>
			<li>
				<div class="list-img">
					<img src="../assets//home/head-logo.png" alt="">
				</div>
				<div class="list-detail">
					<h4>
						<span>用户名</span>
					</h4>
					<p class="list-xq">
						<span>20岁</span>
						<span>女</span>
						<!-- <span><img src="../assets/home/female.png" alt=""></span> -->
						<span>165cm</span>
					</p>
					<p class="list-xq">xxx学院</p>
				</div>
			</li>
			<li>
				<div class="list-img">
					<img src="../assets//home/head-logo.png" alt="">
				</div>
				<div class="list-detail">
					<h4>
						<span>用户名</span>
					</h4>
					<p class="list-xq">
						<span>20岁</span>
						<span>女</span>
						<!-- <span><img src="../assets/home/female.png" alt=""></span> -->
						<span>165cm</span>
					</p>
					<p class="list-xq">xxx学院</p>
				</div>
			</li>
			<li>
				<div class="list-img">
					<img src="../assets//home/head-logo.png" alt="">
				</div>
				<div class="list-detail">
					<h4>
						<span>用户名</span>
					</h4>
					<p class="list-xq">
						<span>20岁</span>
						<span>女</span>
						<span></span>
						<!-- <span><img src="../assets/home/female.png" alt=""></span> -->
						<span>165cm</span>
					</p>
					<p class="list-xq">xxx学院</p>
				</div>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
    export default{
        name:'Common'
    }
</script>

<style lang="less" scoped>
    .home-list{
		padding: 20px 0;
		margin: 30px 0;
		.home-tj{
			margin-bottom: 10px;
		}
		h4{
			font-size: 18px;
			color: #333;
		}
		.home-list-box{
			overflow: hidden;
			ul{
				overflow: hidden;
				margin: 0;
				padding: 0;
				li{
					list-style: none;
					float: left;
					padding: 12px 20px;
					border-radius: 4px;
					box-shadow: 1px 1px 4px #dcdcdc;
					margin: 10px;
					font-size: 14px;
					display: flex;
					.list-img{
						border: 1px solid #dededec3;
					}
					.list-img img{
						width: 180px;
						height: 180px;
					}
					.list-detail{
						padding: 0 10px;
						min-width: 200px;
						h4{
							font-size: 16px;
							margin: 10px 0 4px;
							font-weight: 500;
						}
						.list-xq {
							margin-bottom: 0;
							span:nth-child(2){
								padding: 0 10px;
								img{
									width: 20px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>