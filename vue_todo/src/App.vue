<template>
  <div id="app">
    <MyHeader :addTodo="addTodo"></MyHeader>
    <MyTodos :TodoObj="TodoObj" :DelTodo="DelTodo"></MyTodos>
    <MyFooter :TodoObj="TodoObj" :DelDone="DelDone"></MyFooter>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyTodos from "@/components/MyTodos";
import MyFooter from "@/components/MyFooter";


export default {
  name: 'App',
  components: {MyFooter, MyTodos, MyHeader},
  mounted() {
    console.log($)
    console.log(this.uuidv4())
  },
  methods:{
    addTodo(Obj){
      this.TodoObj.unshift(Obj)
    },
    DelTodo(index){
      console.log(index)
      this.TodoObj.splice(index,1)
    },
    //删除done为true的数据
    DelDone(){
      this.TodoObj = this.TodoObj.filter(item => !item.done)
    },
  },
  data(){
    return{
      TodoObj:[
        {id:this.uuidv4(),todo:'玩电脑',done:false},
        {id:this.uuidv4(),todo:'玩手机',done:false},
        {id:this.uuidv4(),todo:'睡觉',done:false}
      ]
    }
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 500px;
  border: 1px solid black;
  margin: 100px auto;
  /*box-sizing: content-box;*/
  padding: 10px;
}
</style>
