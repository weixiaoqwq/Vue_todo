<template>
<div>
  <h1 class="test">{{msg}}</h1>
  <h2>{{Age}}</h2>
  <h2>{{sex}}</h2>
  <button @click="Age++">点我加1</button>
  <button @click="grtest">全局事件总线发送名字</button>
</div>
</template>

<script>
export default {
  name: "XueSheng",
  data(){
    return{
      msg:'欢迎',
      Age:this.age,
      Myname:'郑森元'
    }
  },
  props:['name','age','sex'],
  methods:{
    grtest(){
      console.log('发送')
      this.$bus.$emit('GetName',this.TestName)
    },
    TestName(name){
      console.log('这里是学生组件',name)
    }
  },
  // mounted() {
  //   this.$bus.$emit('GetName',this.Myname)
  // }
}
</script>

<style scoped>
  .test{
    color: red;
  }
</style>