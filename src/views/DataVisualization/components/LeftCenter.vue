<template>
  <div class="right_bottom">
    <CapsuleChart v-if="showDom" :config="config" style="width: 100%; height: 260px" :data="data" />
  </div>
</template>

<script setup>
import CapsuleChart from './echarts/CapsuleChart.vue'
import { ref, onMounted, getCurrentInstance } from 'vue'
import DataApi from '@/api/data-visualiza/index'

const { proxy } = getCurrentInstance()
const data = ref({})
const showDom = ref(false)
const config = ref({
  showValue: true,
  unit: '次'
})
const getData = () => {
  proxy.$http.get(DataApi.leftCenter).then(res => {
    console.log('用户总览', res)
    data.value = res.data
    showDom.value = true
  })
}
onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>
.right_bottom {
  box-sizing: border-box;
  padding: 0 16px;
}
</style>
