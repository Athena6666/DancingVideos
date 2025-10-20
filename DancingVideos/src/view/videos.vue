<template>
  <div class="common-layout">
    <el-container>
      <el-header class="layout-header">Header</el-header>
      <el-main class="layout-main">Main</el-main>
      <el-footer class="layout-footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .layout-header {
    background: red;
  }

  .layout-main {
    background: yellow;
    flex: 1;
    /*自动撑满中间剩余空间*/
  }

  .layout-footer {
    background: blue;
  }
}
</style>