import http from "./http"
import {apis} from "../global/config.js"

export class RequestCenter{
	getAll(){
		return http({
			url:apis.getAll,
			method:'get'
		})
	}
	webLogin(){
		return http({
			url:apis.webLogin,
			method:'get'
		})
	}
	deleteLoginWxMiniCodeImg(params){
		return http({
			url:apis.deleteLoginWxMiniCodeImg,
			method:"get",
			params:params
		})
	}
	checkWebToken(){
		return http({
			url:apis.checkWebToken,
			method:"get"
		})
	}
}