import axios from "axios"
// import {apiBase} from "../global/config"

const http = axios.create({
	baseURL:"/api",
})

//请求拦截器
http.interceptors.request.use((config)=>{
	config.headers = config.headers || {};
	if (localStorage.getItem("WZH-WebToken")) {
		let webHeaders = "X-Web-Access-Token"
		config.headers[webHeaders]= localStorage.getItem("WZH-WebToken") || "";
	}
	return config;
})
//返回拦截器
http.interceptors.response.use((res)=>{
	//请求成功
	return res.data;
},(error)=>{
	//请求出错
	new Error(error)
});

export default http;