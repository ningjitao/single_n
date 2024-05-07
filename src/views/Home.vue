<template>
  <div class="home-main">
    <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="state.collapsed" :trigger="null" collapsible>
      <div class="logo">这是一个logo图片</div>
      <Menu></Menu>
    </a-layout-sider>
    <a-layout>
      <headers></headers>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
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
      </a-layout-content>
    </a-layout>
  </a-layout>
  </div>
</template>

<script setup>
import Headers from './layout/Headers.vue'
import Menu from './layout/Menu.vue'
import TestChildVue from './components/TestChild.vue'
import { reactive, ref, onMounted, computed, watch } from 'vue'

const state = reactive({
  collapsed: false,
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
onMounted(() => {
  console.log('mounted-vue3')
})
</script>

<style lang="scss" scoped>
.home-main {
  height: 100%;
}
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  line-height: 32px;
  text-align: center;
  color: #1890ff;
}
</style>
