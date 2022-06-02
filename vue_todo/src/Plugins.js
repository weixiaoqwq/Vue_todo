import Vue from "vue";
import {v4 as uuidv4} from "uuid";
// import  $ from 'jquery'

export default {
    install(){
        Vue.prototype.uuidv4 = uuidv4
        // Vue.prototype.$ = $
        console.log('开始安装插件')
    }
}