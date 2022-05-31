<template>
  <div>
    <schoolName></schoolName>
    <XueSheng name="郑森元" age="18" sex="男"></XueSheng>
    <button @click="test">全局弹窗1</button>
    <button @click="Tipe">全局提示</button>

  </div>
</template>

<script>
import SchoolName from "./components/SchoolName";
import XueSheng from "@/components/XueSheng";

export default {
  name: "App",
  components: {
    SchoolName,
    XueSheng
  },
  methods: {
    test() {
      this.hello()
    },

  },
  mounted() {
    this.$bus.$on('GetName', (data) => {
      data('123')
    })
  }
}
</script>

<style scoped>

</style>