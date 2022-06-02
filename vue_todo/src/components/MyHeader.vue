<template>
  <div>
    <input placeholder="输入回车添加" id="shuru" @keyup.enter="add">
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  props:['addTodo'],
  methods:{
    add(e){
      //校验不允许为空
      if(!e.target.value.trim()){
       return
      }
       //去除空格
      let TodoStr = e.target.value.trim()
      //去除特殊符号
      TodoStr = TodoStr.replace(/[^\w\u4e00-\u9fa5]/g,'')

      let ls={
        id:this.uuidv4(),
        todo:TodoStr,
        done:false
      }
      this.addTodo(ls)
      e.target.value=''
    }
  }
}
</script>

<style scoped>
#shuru{
  width: 100%;
  border: 1px solid black;
  outline: none;
  height: 20px;
  box-sizing: border-box;
  padding: 5px;
  line-height: 20px;
}
</style>