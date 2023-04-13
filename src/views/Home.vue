<template>
<!--	<Header></Header>-->
	<div class="home-wrap">
		<common-list-page></common-list-page>
		<div class="home-btm">
			<span>想要查看更多符合条件的用户？请搜索</span>
			<a href="#">前往搜索</a>
		</div>
	</div>
</template>

<script>
import Header from '../components/head/Header.vue'
import Footer from '../components/foot/Footer.vue'
import CommonListPage from '../components/CommonListPage.vue'
	export default {
		// eslint-disable-next-line vue/multi-word-component-names,no-mixed-spaces-and-tabs
	  name: 'Home',
		// eslint-disable-next-line no-mixed-spaces-and-tabs
	  components:{Header,Footer,CommonListPage}
	}
</script>

<style lang="less" scoped>
	.home-wrap{
		padding-top: 74px;
		width: 90%;
		margin: 0 auto;
	}
	.home-nav{
		padding: 10px 0;
		margin-top: 15px;
		border-radius: 3px;
		overflow: hidden;
		box-shadow: 2px 1px 5px #dedede;
		ul{
			width: 100%;
			text-align: center;
			li{
				float: left;
				width: 33.33%;
				list-style: none;
				span{
					color: rgb(243, 124, 50);
					font-size: 16px;
					font-weight: 400;
				}
			}
			.home-like{
				border-left: 1px solid #dcdcdc;
				border-right: 1px solid #dcdcdc;
			}
		}
	}
	.home-btm{
		padding: 20px 0;
		margin: 20px 0;
		text-align: center;
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		span{
			color: #333;
			padding-right: 20px;
		}
		a{
			display: block;
      background: linear-gradient(to right,#AAFFA9 0%,#11FFBD 100%);
			//background: linear-gradient(to right,#9cecfb 0%,#65C7F7 50%,#0052d4 100%);
			color: #333;
			padding: 10px;
			text-decoration: none;
			width: 100px;
			border-radius: 4px;
		}
	}
</style>