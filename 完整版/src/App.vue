<template>
  <div id="app">    
    <!-- 显示组件的内容 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script scoped>
  // import Tabbar from '@/components/tabbar/tabbar'
  
  // export default {
  //   components: {
  //     Tabbar
  //   }
  // }
</script>
<style>
  /* 加载默认的CSS文件 */
  @import './assets/css/reset.css'
</style>
