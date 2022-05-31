<template>
  <div>
    <h1 class="test">{{name}}</h1>
    <div>{{banji}}</div>

  </div>
</template>

<script>
export default {
  name: "SchoolName",
  data(){
    return{
      name:'郑森元',
      banji:'20xx2'
    }
  }
}
</script>

<style scoped>
  .test{
    color: blue;
  }
</style>