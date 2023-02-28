
<template>
  <div class="header">
    <h1>{{ info.user }}</h1>
  </div>
</template>

<script setup>
import { getLocal } from '../common/utils';
const info = JSON.parse(getLocal('info'))
console.log(info)

</script>

<style scoped>
.header {
  background-color: var(--color-background-content);
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 0 100px;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  z-index: 5;
}

</style>
