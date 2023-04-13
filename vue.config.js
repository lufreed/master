const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath:"./",
	//关于WebSocketClient.js报错解决方式
	devServer:{
		// port:8080,//端口配置
		// https:false,
		proxy: {
			'/api': {
				target: 'https://yqwzh.ink/SchoolCupid/',//这里填入你要请求的接口的前缀
				// target: 'http://10.90.1.136:8080/SchoolCupid/',//这里填入你要请求的接口的前缀
				// target: 'http://127.0.0.1:8080/SchoolCupid/',//这里填入你要请求的接口的前缀

				ws:true,//代理websocked
				changeOrigin:true,//虚拟的站点需要更管origin
				secure: true,                   //是否https接口
				pathRewrite:{
					'^/api':''//重写路径
				}
			}
		},
		host:'0.0.0.0',
		// client:{
		// 	webSocketURL:'ws://127.0.0.1:8080/ws',
		// },
		// headers:{
		// 	'Access-Control-Allow-Origin':'*',
		// }
	},
	transpileDependencies: true,
	lintOnSave:false,//关闭语法检查
})
