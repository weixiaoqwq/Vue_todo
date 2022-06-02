<template>
  <div id="footer">
    <input type="checkbox" @click="TodoAll" :checked="All">
    <span>已完成{{doneNum}}/{{TodoObj.length}}</span>
    <button id="DelOk" @click="DelDone">删除全部已经完成</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['TodoObj','DelDone'],
  computed:{
    //TodoObj的done属性为true的数量
    doneNum(){
      return this.TodoObj.filter(item=>item.done).length;
    }
  }
  ,
  methods:{
    TodoAll(){
      this.All=!this.All
      if(this.All){
        //把done全部变成true
        this.TodoObj.forEach(item=>item.done=true);
      }else{
        //把done全部变成false
        this.TodoObj.forEach(item=>item.done=false);
      }
    }

  },
  data(){
    return {
      All:false
    }
  },
  updated(){
    //判断done是否全部为ture
    if(this.TodoObj.every(item=>item.done)) {
      this.All = true;
    }else{
      this.All = false;
    }
  }
}
</script>

<style scoped>
#footer{
  width: 100%;
  border: 1px solid black;
  padding: 5px 12px;
  box-sizing: border-box;
  margin-top: 10px;
  position: relative;
}
#footer>span{
  margin-left: 10px;
}
#DelOk{
  position: absolute;
  right: 10px;
}
</style>