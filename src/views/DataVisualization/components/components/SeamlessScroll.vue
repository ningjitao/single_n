<template>
  <div
    v-if="props.wheel && props.hover"
    ref="realBoxRef"
    :style="realBoxStyle"
    @mouseenter="
      () => {
        hoverStop && stopMove()
      }
    "
    @mouseleave="
      () => {
        hoverStop && startMove()
      }
    "
    @wheel="
      (e) => {
        hoverStop && onWheel(e)
      }
    "
  >
    <div ref="slotListRef" :style="floatStyle">
      <slot></slot>
    </div>
    <div :style="floatStyle">
      <slot></slot>
    </div>
  </div>

  <div
    v-else
    :style="realBoxStyle"
    ref="realBoxRef"
    @mouseenter="
      () => {
        hoverStop && stopMove()
      }
    "
    @mouseleave="
      () => {
        hoverStop && startMove()
      }
    "
  >
    <div ref="slotListRef" :style="floatStyle">
      <slot></slot>
    </div>
    <div :style="floatStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  onBeforeMount,
  onMounted,
  ref,
  watch,
  nextTick,
  defineExpose,
  defineProps,
  defineEmits
} from 'vue'
import throttle from 'lodash/throttle'
const props = defineProps({
  // 是否开启自动滚动
  modelValue: {
    type: Boolean,
    default: true
  },
  // 原始数据列表
  list: {
    type: Array,
    default: () => {
      return []
    }
  },
  // 步进速度，step 需是单步大小的约数
  step: {
    type: Number,
    default: 1
  },
  // 开启滚动的数据量
  limitScrollNum: {
    type: Number,
    default: 3
  },
  // 是否开启鼠标悬停
  hover: {
    type: Boolean,
    default: false
  },
  // 控制滚动方向
  direction: {
    type: String,
    default: 'up'
  },
  // 单步运动停止的高度
  singleHeight: {
    type: Number,
    default: 0
  },
  // 单步运动停止的宽度
  singleWidth: {
    type: Number,
    default: 0
  },
  // 单步停止等待时间 (默认值 1000ms)
  singleWaitTime: {
    type: Number,
    default: 1000
  },
  // 是否开启 rem 度量
  isRemUnit: {
    type: Boolean,
    default: false
  },
  // 开启数据更新监听
  isWatch: {
    type: Boolean,
    default: true
  },
  // 动画时间
  delay: {
    type: Number,
    default: 0
  },
  // 动画方式
  ease: {
    type: String,
    default: 'ease-in'
  },
  // 动画循环次数，-1 表示一直动画
  count: {
    type: Boolean,
    default: -1
  },
  // 拷贝几份滚动列表
  copyNum: {
    type: Number,
    default: 1
  },
  // 开启鼠标悬停时支持滚轮滚动
  wheel: {
    type: Boolean,
    default: false
  },
  // 启用单行滚动
  singleLine: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['count', 'stop'])
// const scrollRef = ref(null)
const slotListRef = ref(null)
const realBoxRef = ref(null)
const reqFrame = ref(null)
const singleWaitTimeout = ref(null)
const realBoxWidth = ref(0)
const realBoxHeight = ref(0)
const xPos = ref(0)
const yPos = ref(0)
const isHover = ref(false)
const _count = ref(0)
const isScroll = computed(() =>
  props.list ? props.list.length >= props.limitScrollNum : false
)
const realBoxStyle = computed(() => {
  return {
    width: realBoxWidth.value ? `${realBoxWidth.value}px` : 'auto',
    transform: `translate(${xPos.value}px,${yPos.value}px)`,
    transition: `all ${
      typeof props.ease === 'string'
        ? props.ease
        : 'cubic-bezier(' +
          props.ease.x1 +
          ',' +
          props.ease.y1 +
          ',' +
          props.ease.x2 +
          ',' +
          props.ease.y2 +
          ')'
    } ${props.delay}ms`,
    overflow: 'hidden',
    display: props.singleLine ? 'flex' : 'block'
  }
})
const isHorizontal = computed(
  () => props.direction === 'left' || props.direction === 'right'
)

function dataWarm (list) {
  if (list && typeof list !== 'boolean' && list.length > 100) {
    console.warn(
      `数据达到了${list.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`
    )
  }
}
const floatStyle = computed(() => {
  return isHorizontal.value
    ? {
        float: 'left',
        overflow: 'hidden',
        display: props.singleLine ? 'flex' : 'block',
        flexShrink: props.singleLine ? 0 : 1
      }
    : { overflow: 'hidden' }
})
const baseFontSize = computed(() => {
  return props.isRemUnit
    ? parseInt(
      globalThis.window.getComputedStyle(
        globalThis.document.documentElement,
        null
      ).fontSize
    )
    : 1
})
const realSingleStopWidth = computed(
  () => props.singleWidth * baseFontSize.value
)

const realSingleStopHeight = computed(
  () => props.singleHeight * baseFontSize.value
)

const step = computed(() => {
  let singleStep
  const _step = props.step
  if (isHorizontal.value) {
    singleStep = realSingleStopWidth.value
  } else {
    singleStep = realSingleStopHeight.value
  }
  if (singleStep > 0 && singleStep % _step > 0) {
    console.error(
      '如果设置了单步滚动，step 需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确。~~~~~'
    )
  }
  return _step
})

const cancle = () => {
  cancelAnimationFrame(reqFrame.value)
  reqFrame.value = null
}
const animation = (
  _direction,
  _step,
  isWheel
) => {
  reqFrame.value = requestAnimationFrame(function () {
    const h = realBoxHeight.value / 2
    const w = realBoxWidth.value / 2
    if (_direction === 'up') {
      if (Math.abs(yPos.value) >= h) {
        yPos.value = 0
        _count.value += 1
        emit('count', _count.value)
      }
      yPos.value -= _step
    } else if (_direction === 'down') {
      if (yPos.value >= 0) {
        yPos.value = h * -1
        _count.value += 1
        emit('count', _count.value)
      }
      yPos.value += _step
    } else if (_direction === 'left') {
      if (Math.abs(xPos.value) >= w) {
        xPos.value = 0
        _count.value += 1
        emit('count', _count.value)
      }
      xPos.value -= _step
    } else if (_direction === 'right') {
      if (xPos.value >= 0) {
        xPos.value = w * -1
        _count.value += 1
        emit('count', _count.value)
      }
      xPos.value += _step
    }
    if (isWheel) {
      return
    }
    const { singleWaitTime } = props
    if (singleWaitTimeout.value) {
      clearTimeout(singleWaitTimeout.value)
    }
    if (realSingleStopHeight.value) {
      if (Math.abs(yPos.value) % realSingleStopHeight.value < _step) {
        singleWaitTimeout.value = setTimeout(() => {
          move()
        }, singleWaitTime)
      } else {
        move()
      }
    } else if (realSingleStopWidth.value) {
      if (Math.abs(xPos.value) % realSingleStopWidth.value < _step) {
        singleWaitTimeout.value = setTimeout(() => {
          move()
        }, singleWaitTime)
      } else {
        move()
      }
    } else {
      move()
    }
  })
}
const move = () => {
  cancle()
  if (isHover.value || !isScroll.value || _count.value === props.count) {
    emit('stop', _count.value)
    _count.value = 0
    return
  }
  animation(
    props.direction,
    step.value,
    false
  )
}
const initMove = () => {
  dataWarm(props.list)
  if (isHorizontal.value) {
    let slotListWidth = (slotListRef.value).offsetWidth
    slotListWidth = slotListWidth * 2 + 1
    realBoxWidth.value = slotListWidth
  }
  if (isScroll.value) {
    realBoxHeight.value = (realBoxRef.value).offsetHeight
    if (props.modelValue) {
      move()
    }
  } else {
    cancle()
    yPos.value = xPos.value = 0
  }
}
const startMove = () => {
  isHover.value = false
  move()
}

const stopMove = () => {
  isHover.value = true
  if (singleWaitTimeout.value) {
    clearTimeout(singleWaitTimeout.value)
  }
  cancle()
}

const hoverStop = computed(
  () => props.hover && props.modelValue && isScroll.value
)
const throttleFunc = throttle((e) => {
  cancle()
  const singleHeight = realSingleStopHeight.value
    ? realSingleStopHeight.value
    : 15
  if (e.deltaY < 0) {
    animation('down', singleHeight, true)
  }
  if (e.deltaY > 0) {
    animation('up', singleHeight, true)
  }
}, 30)

const onWheel = (e) => {
  throttleFunc(e)
}
const reset = () => {
  cancle()
  isHover.value = false
  initMove()
}
const Reset = () => {
  reset()
}
defineExpose({
  Reset
})

watch(
  () => props.list,
  () => {
    if (props.isWatch) {
      nextTick(() => {
        reset()
      })
    }
  },
  {
    deep: true
  }
)

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      startMove()
    } else {
      stopMove()
    }
  }
)

watch(
  () => props.count,
  (newValue) => {
    if (newValue !== 0) {
      startMove()
    }
  }
)

onBeforeMount(() => {
  cancle()
  clearTimeout(singleWaitTimeout.value)
})

onMounted(() => {
  if (isScroll.value) {
    initMove()
  }
})
</script>

<style lang="scss" scoped>
</style>
