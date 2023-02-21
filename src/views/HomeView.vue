<script setup>
import mainWrap from '../components/mainWrap.vue'
import headTop from '../components/headTop.vue'
</script>

<template>
  <div>
    <headTop></headTop>
    <mainWrap></mainWrap>
    <el-backtop :right="30" :bottom="100" class="green"/>
  </div>
</template>
