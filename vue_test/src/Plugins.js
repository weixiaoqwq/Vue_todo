import Vue from "vue";

export default {
    install(){
        console.log('测试一下插件')



        //定义一个全局弹窗
        Vue.prototype.hello=()=>{
            alert('你好你好啊')
            //定义了一个全局的弹窗
        }

        Vue.mixin({
            methods:{
                //全局输出一个提示
                Tipe(){
                    console.log('这是一个全局提示')
                }
            }
        })
    }
}