<template>
  <div id="item">
    <input type="checkbox" id="cbox" v-model="todo.done">
    <span id="wc" :class="itemClass">{{ todo.todo }}</span>
    <button @click="DelTodo(todo.id)">删除</button>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props:['todo','DelTodo'],
  data(){
    return{
      MyTodo:this.todo.done,
      itemClass:{
        'ok':false
      }
    }
  },
  mounted() {
    console.log(this)
  }
  ,
  methods:{

  }
}
</script>

<style scoped>
#item{
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid black;
  height: 35px;
  line-height: 23px;
  position: relative;
}
#wc{
  margin-left: 10px;
}
#item>button{
  position: absolute;
  right: 10px;
}
.ok{
  color: red;
}
</style>