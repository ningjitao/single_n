<template>
  <div>
    传递值：{{childProp}} -- {{nameProp}}
  </div>
</template>

<script setup name="TestChild">
import { defineProps } from 'vue'
defineProps({
  childProp: Object,
  nameProp: String
})
</script>
<style lang="scss" scoped>
</style>
