<template>
  <div>
    <ul class="todos">
      <MyItem v-for="todo in TodoObj" :key="todo.id" :todo="todo" :DelTodo="DelTodo"/>
    </ul>
  </div>
</template>

<script>
import MyItem from "@/components/MyItem";
export default {
  name: "MyTodos",
  components: {MyItem},
  props:['TodoObj','DelTodo'],
}
</script>

<style scoped>
  .todos{
    width: 100%;
    margin-top: 10px;
    border: 1px solid black;
    list-style: none;
    padding: 5px 5px 0 5px;
    box-sizing: border-box;
  }

</style>