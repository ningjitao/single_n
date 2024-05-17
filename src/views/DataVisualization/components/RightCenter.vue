<template>
  <div class="dv-capsule-chart">
    <template v-if="mergedConfig">
      <div class="label-column">
          <div v-for="item in data" :key="item.name">
              {{ item.name }}
          </div>
          <div>&nbsp;</div>
      </div>
      <div class="capsule-container">
          <div class="capsule-item" v-for="(capsule, index) in capsuleLength" :key="index">
              <div class="capsule-item-column" :style="`width: ${capsule * 100}%; background-color: ${mergedConfig.colors[index % mergedConfig.colors.length]
              };`">
                  <div v-if="mergedConfig.showValue" class="capsule-item-value">
                      {{ capsuleValue[index] }}
                  </div>
              </div>
          </div>

          <div class="unit-label">
              <div v-for="(label, index) in labelData" :key="label + index">
                  {{ label }}
              </div>
          </div>
      </div>

      <div class="unit-text" v-if="mergedConfig.unit">
          {{ mergedConfig.unit }}
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, reactive } from 'vue'
import merge from 'lodash/merge'
import cloneDeep from 'lodash/cloneDeep'

const config = ref({
  showValue: true,
  unit: '次'
})
const { proxy } = getCurrentInstance()
const data = ref([])
const mergedConfig = ref(null)
const capsuleValue = ref([])
const capsuleLength = ref([])
const labelData = ref([])
const defaultConfig = reactive({
  // Colors (hex|rgb|rgba|color keywords) ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
  colors: [
    '#37a2da',
    '#32c5e9',
    '#67e0e3',
    '#9fe6b8',
    '#ffdb5c',
    '#ff9f7f',
    '#fb7293'
  ],
  unit: '',
  showValue: false
})

const getData = () => {
  proxy.$http.get('/right-center/data').then(res => {
    console.log(res, '报警排名')
    data.value = res.data.datalist
    calcData()
  })
}
const calcData = () => {
  mergeConfig()
  calcCapsuleLengthAndLabelData()
}
const mergeConfig = () => {
  mergedConfig.value = merge(cloneDeep(defaultConfig), config.value || {})
}
const calcCapsuleLengthAndLabelData = () => {
  if (!data.value.length) return
  const newcapsuleValue = data.value.map((item) => item.value)
  const maxValue = Math.max(...newcapsuleValue)
  capsuleValue.value = newcapsuleValue
  capsuleLength.value = newcapsuleValue.map((v) =>
    maxValue ? v / maxValue : 0
  )
  const oneFifth = maxValue / 5
  const newlabelData = Array.from(
    new Set(new Array(6).fill(0).map((v, i) => Math.ceil(i * oneFifth)))
  )
  labelData.value = newlabelData
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>
.dv-capsule-chart {
    position: relative;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px;
    color: #fff;

    .label-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        padding-right: 10px;
        text-align: right;
        font-size: 12px;

        div {
            height: 20px;
            line-height: 20px;
        }
    }

    .capsule-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .capsule-item {
        box-shadow: 0 0 3px #999;
        height: 10px;
        margin: 5px 0px;
        border-radius: 5px;

        .capsule-item-column {
            position: relative;
            height: 8px;
            margin-top: 1px;
            border-radius: 5px;
            transition: all 0.3s;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .capsule-item-value {
                font-size: 12px;
                transform: translateX(100%);
            }
        }
    }

    .unit-label {
        height: 20px;
        font-size: 12px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .unit-text {
        text-align: right;
        display: flex;
        align-items: flex-end;
        font-size: 12px;
        line-height: 20px;
        margin-left: 10px;
    }
}
</style>
