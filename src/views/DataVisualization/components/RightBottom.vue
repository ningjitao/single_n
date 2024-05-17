<template>
  <div class="right_bottom_wrap beautify-scroll-def" :class="{ 'overflow-y-auto': !indexConfig.rightBottomSwiper }">
    <component
      :is="comName"
      :list="state.list"
      v-model="state.scroll"
      :singleHeight="state.defaultOption.singleHeight"
      :step="state.defaultOption.step"
      :limitScrollNum="state.defaultOption.limitScrollNum"
      :hover="state.defaultOption.hover"
      :singleWaitTime="state.defaultOption.singleWaitTime"
      :wheel="state.defaultOption.wheel"
    >
      <ul class="right_bottom">
        <li class="right_center_item" v-for="(item, i) in state.list" :key="i">
          <span class="orderNum">{{ i + 1 }}</span>
          <div class="inner_right">
            <div class="dibu"></div>
            <div class="flex">
             <div class="info">
                <span class="labels">设备ID：</span>
                <span class="text-content zhuyao"> {{ item.gatewayno }}</span>
              </div>
              <div class="info">
                <span class="labels">型号：</span>
                <span class="text-content"> {{ item.terminalno }}</span>
              </div>
              <div class="info">
                <span class="labels">告警值：</span>
                <span class="text-content warning"> {{ montionFilter(item.alertvalue) }}</span>
              </div>
            </div>

            <div class="flex">
              <div class="info">
                <span class="labels shrink-0"> 地址：</span>
                <span class="ciyao truncate" style="font-size: 12px; width: 220px" :title="handleAddress(item)">
                  {{ handleAddress(item) }}</span
                >
              </div>
              <div class="info time shrink-0">
                <span class="labels">时间：</span>
                <span class="text-content" style="font-size: 12px"> {{ handleTime(item.createtime) }}</span>
              </div>
            </div>
            <div class="info">
              <span class="labels">报警内容：</span>
              <span class="text-content ciyao" :class="{ warning: item.alertdetail }">
                {{ item.alertdetail || "无" }}</span
              >
            </div>
          </div>
        </li>
      </ul>
    </component>
  </div>
</template>

<script setup>

import SeamlessScroll from './components/SeamlessScroll.vue'
import { ref, computed, onMounted, reactive, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import EmptyCom from './components/EmptyCom.vue'
import DataApi from '@/api/data-visualiza/index'

const settingStore = useStore()
const state = reactive({
  defaultOption: {
    ...settingStore.state.settings.defaultOption
  },
  list: [],
  scroll: true
})
const indexConfig = ref({
  leftBottomSwiper: true, // 左轮播
  rightBottomSwiper: true // 右下轮播
})
const { proxy } = getCurrentInstance()

const getData = () => {
  proxy.$http.get(DataApi.RightBottom).then((res) => {
    console.log('设备提醒', res)
    state.list = res.data.datalist
  })
}

const comName = computed(() => {
  if (indexConfig.value.rightBottomSwiper) {
    return SeamlessScroll
  } else {
    return EmptyCom
  }
})
function montionFilter (val) {
  // console.log(val);
  return val ? Number(val).toFixed(2) : '--'
}
const handleAddress = (item) => {
  return `${item.provinceName}/${item.cityName}/${item.countyName}`
}
const handleTime = (val) => {
  let time = ''
  if (val) {
    time = val.split(' ')[0]
  }
  return time
}
onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/variable.scss';
.right_bottom {
  width: 100%;
  height: 100%;

  .right_center_item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 10px;
    font-size: 14px;
    color: #fff;

    .orderNum {
      margin: 0 20px 0 -20px;
    }

    .inner_right {
      position: relative;
      height: 100%;
      width: 400px;
      flex-shrink: 0;
      line-height: 1.5;

      .dibu {
        position: absolute;
        height: 2px;
        width: 104%;
        background-image: url("@/assets/img/zuo_xuxian.png");
        bottom: -12px;
        left: -2%;
        background-size: cover;
      }
      .flex {
        display: flex;
      }
    }

    .info {
      margin-right: 20px;
      display: flex;
      align-items: center;

      .labels {
        flex-shrink: 0;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
      }

      .zhuyao {
        color: $primary-color;
        font-size: 15px;
      }

      .ciyao {
        color: rgba(255, 255, 255, 0.8);
      }

      .warning {
        color: #e6a23c;
        font-size: 15px;
      }
    }
  }
}

.right_bottom_wrap {
  overflow: hidden;
  width: 100%;
  height: 252px;
}

.overflow-y-auto {
  overflow-y: auto;
}
.defaul-state-style {
  font-size: 12px;
}
.online-style {
  color: green;
}
.offline-style {
  color: #f00
}
</style>
