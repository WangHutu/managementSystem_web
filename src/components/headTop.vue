
<template>
  <div>
    <h1>{{ info.user }}</h1>
  </div>
</template>

<script setup>
import { getLocal } from '../common/utils';
const info = JSON.parse(getLocal('info'))
console.log(info)

</script>
