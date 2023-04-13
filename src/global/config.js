export const serverUrl = "https://yqwzh.ink/SchoolCupid"
// export const serverUrl = "http://10.90.1.136:8080/SchoolCupid"
// export const serverUrl = "http://127.0.0.1:8080/SchoolCupid"
//
export const ftpUrl = `${serverUrl}`
// export const appLogo = `${ftpUrl}/ic_logo.png`
export const apiBase = `${serverUrl}`


export const apis = {
	getAll: `/api/user`,
	webLogin:`api/web/login`,
	webLoginSocket:`/api/web/login/checkWebToken/`,
	deleteLoginWxMiniCodeImg:`/api/web/login/deleteLoginWxMiniCodeImg`,
	checkWebToken:`/api/web/login/checkWebToken`
}