import { createApp } from 'vue'
import App from './App.vue'

// 使用路由
// import router from './router/router'
import router from './router/index'
//引入bootstrap
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.css'
//引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//使用vuex
import store from './store'
//使用naiveui
import naive from 'naive-ui'
//使用字体
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
//媒体查询
import "../public/scss/index.scss"
//网络请求
import {RequestCenter} from "@/http/request_center.js";


const app = createApp(App)
    app.config.globalProperties.$requestCenter = new RequestCenter()
    app.use(router)
    app.use(store)
    app.use(naive)
    app.use(ElementPlus)
    app.mount('#app')
