<template>
  <div class="centermap">
    <div class="maptitle">
      <div class="zuo"></div>
      <span class="titletext">{{ title }}</span>
      <div class="you"></div>
    </div>
    <div class="mapwrap">
      <BorderBox13>
        <div class="quanguo" @click="getData('china')" v-if="code !== 'china'">中国</div>
        <div id="CenterMap"></div>
      </BorderBox13>
    </div>
  </div>
</template>

<script setup>
// import 'echarts/map/js/china.js'
import { message } from 'ant-design-vue'
import BorderBox13 from './components/BorderBox13'
import { getCurrentInstance, nextTick, ref, defineProps, onMounted } from 'vue'
import DataApi from '@/api/data-visualiza/index'
import { optionHandle, regionCodes } from './components/centerMap.js'
// import { registerMap, getMap } from 'echarts/core'
import chinaMap from '@/assets/json/china.json'

const { proxy } = getCurrentInstance()
const option = ref({})
const code = ref('china')

defineProps({
  title: {
    type: String,
    default: '地图'
  }
})
const getData = async (regionCode) => {
  proxy.$http.get(DataApi.centerMap).then(res => {
    console.log(res, '设备分布')
    dataSetHandle(res.data.regionCode, res.data.dataList)
  })
}
const dataSetHandle = async (regionCode, list) => {
  const geojson = await getGeojson(regionCode)
  const cityCenter = {}
  const mapData = []
  // 获取当前地图每块行政区中心点
  geojson.features.forEach((element) => {
    cityCenter[element.properties.name] = element.properties.centroid || element.properties.center
  })
  // 当前中心点如果有此条数据中心点则赋值x，y当然这个x,y也可以后端返回进行大点，前端省去多行代码
  list.forEach((item) => {
    if (cityCenter[item.name]) {
      mapData.push({
        name: item.name,
        value: cityCenter[item.name].concat(item.value)
      })
    }
  })
  nextTick(async () => {
    option.value = await optionHandle(regionCode, list, mapData)
    await initEcharts()
  })
}
const getGeojson = (regionCode) => {
  return new Promise((resolve) => {
    if (regionCode === 'china') {
      const mapjson = chinaMap
      code.value = regionCode
      resolve(mapjson)
    }
  })
}
const initEcharts = async () => {
  const echart = proxy.$echarts
  const e = echart.init(document.getElementById('CenterMap'))
  echart.registerMap(code.value, { geoJSON: chinaMap })
  e.setOption(option.value)
  e.on('click', function (params) {
    mapClick(params)
  })
  window.onresize = function () {
    e.resize()
  }
}
onMounted(() => {
  getData(code.value)
})

const mapClick = (params) => {
  console.log(params, '点击')
  const xzqData = regionCodes[params.name]
  if (!xzqData) {
    getData(xzqData.adcode)
  } else {
    message.warning('暂无下级地市')
  }
}
</script>

<style lang="scss" scoped>
.centermap {
  margin-bottom: 30px;

  .maptitle {
    height: 60px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    box-sizing: border-box;

    .titletext {
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 6px;
      background: linear-gradient(92deg, #0072ff 0%, #00eaff 48.8525390625%, #01aaff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0 10px;
    }

    .zuo,
    .you {
      background-size: 100% 100%;
      width: 29px;
      height: 20px;
      margin-top: 8px;
    }

    .zuo {
      background: url("@/assets/img/xiezuo.png") no-repeat;
    }

    .you {
      background: url("@/assets/img/xieyou.png") no-repeat;
    }
  }

  .mapwrap {
    height: 580px;
    width: 100%;
    // padding: 0 0 10px 0;
    box-sizing: border-box;
    position: relative;

    .quanguo {
      position: absolute;
      right: 20px;
      top: -46px;
      width: 80px;
      height: 28px;
      border: 1px solid #00eded;
      border-radius: 10px;
      color: #00f7f6;
      text-align: center;
      line-height: 26px;
      letter-spacing: 6px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 237, 237, 0.5), 0 0 6px rgba(0, 237, 237, 0.4);
      z-index: 10;
    }
  }
}
#CenterMap {
  width: 100%;
  height: 100%;
}
</style>
