<template>
  <div id="CapsuleChart"></div>
</template>

<script setup>
import { defineProps, onMounted, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
const props = defineProps({
  config: {
    type: [Object, Array],
    default: () => {
      return {}
    }
  },
  data: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const getData = () => {
  const echart = proxy.$echarts
  const e = echart.init(document.getElementById('CapsuleChart'))
  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '用户总览',
        type: 'pie',
        radius: [50, 100],
        center: ['50%', '50%'],
        itemStyle: {
          borderRadius: 10
        },
        label: {
          formatter: (params) => {
            return params.name + '\n\n' + params.value + '个' + '   ' + params.percent + '%'
          },
          color: '#3a7af7'
        },
        labelLine: {
          length: 20,
          length2: 30
        },
        data: [
          { value: props.data.lockNum, name: '离线' },
          { value: props.data.onlineNum, name: '在线' },
          { value: props.data.offlineNum, name: '锁定' }
        ]
      },
      {
        type: 'pie',
        radius: [50, 100],
        center: ['50%', '50%'],
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: true,
          position: 'center',
          formatter: function (params) {
            return '总数' + '\n\n' + props.data.totalNum
          },
          fontSize: 18,
          fontWeight: '700',
          fontFamily: 'Microsoft YaHeis'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: props.data.lockNum, name: '离线' },
          { value: props.data.onlineNum, name: '在线' },
          { value: props.data.offlineNum, name: '锁定' }
        ]
      }
    ]
  }
  e.setOption(option)
  window.onresize = function () {
    e.resize()
  }
}
onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>
#CapsuleChart {
  height: 100%;
  width: 100%;
}
</style>
