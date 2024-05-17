<template>
  <div id='CenterBottom'></div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import DataApi from '@/api/data-visualiza/index'

const option = ref({})
const { proxy } = getCurrentInstance()

const getData = () => {
  proxy.$http.get(DataApi.centerBottom).then(async res => {
    console.log(res, '安装计划')
    await setOption(res.data)
    initEcharts()
  })
}
const setOption = async (newData) => {
  const echarts = proxy.$echarts
  option.value = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,.6)',
      borderColor: 'rgba(147, 235, 248, .8)',
      textStyle: {
        color: '#FFF'
      },
      formatter: function (params) {
        // 添加单位
        let result = params[0].name + '<br>'
        params.forEach(function (item) {
          if (item.value) {
            if (item.seriesName === '安装率') {
              result += item.marker + ' ' + item.seriesName + ' : ' + item.value + '%</br>'
            } else {
              result += item.marker + ' ' + item.seriesName + ' : ' + item.value + '个</br>'
            }
          } else {
            result += item.marker + ' ' + item.seriesName + ' :  - </br>'
          }
        })
        return result
      }
    },
    legend: {
      data: ['已安装', '计划安装', '安装率'],
      textStyle: {
        color: '#B4B4B4'
      },
      top: '0'
    },
    grid: {
      left: '50px',
      right: '40px',
      bottom: '30px',
      top: '20px'
    },
    xAxis: {
      data: newData.category,
      axisLine: {
        lineStyle: {
          color: '#B4B4B4'
        }
      },
      axisTick: {
        show: false
      }
    },
    yAxis: [
      {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#B4B4B4'
          }
        },

        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#B4B4B4'
          }
        },
        axisLabel: {
          formatter: '{value}% '
        }
      }
    ],
    series: [
      {
        name: '已安装',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#956FD4' },
            { offset: 1, color: '#3EACE5' }
          ])
        },
        data: newData.barData
      },
      {
        name: '计划安装',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(156,107,211,0.8)' },
            { offset: 0.2, color: 'rgba(156,107,211,0.5)' },
            { offset: 1, color: 'rgba(156,107,211,0.2)' }
          ])
        },
        z: -12,
        data: newData.lineData
      },
      {
        name: '安装率',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
          color: '#F02FC2'
        },
        data: newData.rateData
      }
    ]
  }
}
const initEcharts = () => {
  const echarts = proxy.$echarts
  const myChart = echarts.init(document.getElementById('CenterBottom'))
  myChart.setOption(option.value)

  window.onresize = function () {
    myChart.resize()
  }
}
onMounted(() => {
  getData()
})
</script>

<style lang='scss' scoped>
#CenterBottom {
  width: 100%;
  height: 100%;
}
</style>
