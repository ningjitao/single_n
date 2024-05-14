<template>
  <div>
    <a-button type="primary" @click="addCount">Count: {{count}}</a-button>
        <a-divider />
        {{testComputed}}
        <a-divider />
        <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
        >
          <a-form-item ref="name" label="名称" name="name">
            <a-input v-model:value="formState.name" />
          </a-form-item>
        </a-form>
        <a-divider />
        <TestChildVue
          :childProp="formState"
          nameProp="testChildProp"
        />
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'
import TestChildVue from './TestChild.vue'
const state = reactive({
  arrList: ['sss', 'aaa', 'ddd']
})
const formState = reactive({
  name: ''
})
const count = ref(0)
const rules = {
  name: { required: true, trigger: ['change', 'blur'], message: 'please xxx' }
}
function addCount () {
  count.value++
}

const testComputed = computed(() => {
  return state.arrList.length ? '计算属性1234' : 'wu'
})

watch(formState, (obj) => {
  console.log(obj, '监听-val')
})
</script>
<style lang="scss" scoped>
</style>
