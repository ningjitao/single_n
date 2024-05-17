<template>
  <div class="countup-wrap">
    <slot name="prefix"></slot>
    <span ref="elRef"></span>
    <slot name="suffix"></slot>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, defineProps, defineEmits, defineExpose } from 'vue'
import { CountUp } from 'countup.js'

const props = defineProps({
  endVal: {
    type: [Number, String],
    required: true,
    default: 1
  },
  startVal: {
    type: [Number, String],
    default: 0
  },
  duration: {
    type: [Number, String],
    default: 2.5
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  loop: {
    type: [Boolean, Number, String],
    default: false
  },
  delay: {
    type: Number,
    default: 0
  },
  options: {
    type: Object,
    default: undefined
  }
})

const emits = defineEmits(['init', 'finished'])

const elRef = ref(null)
const countUp = ref(null)

const initCountUp = () => {
  if (!elRef.value) return
  const startVal = Number(props.startVal)
  const endVal = Number(props.endVal)
  const duration = Number(props.duration)
  countUp.value = new CountUp(elRef.value, endVal, {
    startVal,
    duration,
    ...props.options
  })
  if (countUp.value.error) {
    console.error(countUp.value.error)
    return
  }
  emits('init', countUp.value)
}

const startAnim = (cb) => {
  countUp.value?.start(cb)
}

watch(
  () => props.endVal,
  (value) => {
    if (props.autoplay) {
      countUp.value?.update(value)
    }
  }
)

const finished = ref(false)
let loopCount = 0
const loopAnim = () => {
  loopCount++
  startAnim(() => {
    const isTruly = typeof props.loop === 'boolean' && props.loop
    if (isTruly || props.loop > loopCount) {
      delay(() => {
        countUp.value?.reset()
        loopAnim()
      }, props.delay)
    } else {
      finished.value = true
    }
  })
}

watch(finished, (flag) => {
  if (flag) {
    emits('finished')
  }
})

onMounted(() => {
  initCountUp()
  if (props.autoplay) {
    loopAnim()
  }
})

onUnmounted(() => {
  cancelAnimationFrame(delayRafId)
  countUp.value?.reset()
})

let delayRafId
const delay = (cb, seconds = 1) => {
  let startTime
  function count (timestamp) {
    if (!startTime) startTime = timestamp
    const diff = timestamp - startTime
    if (diff < seconds * 1000) {
      delayRafId = requestAnimationFrame(count)
    } else {
      cb()
    }
  }
  delayRafId = requestAnimationFrame(count)
}

const restart = () => {
  initCountUp()
  startAnim()
}

defineExpose({
  init: initCountUp,
  restart
})
</script>

<style lang="scss" scoped>
</style>
