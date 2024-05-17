<template>
  <div class="home-main">
    <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model:collapsed="state.collapsed"
      :trigger="null"
      collapsible
      collapsedWidth="60"
    >
      <div class="logo">
        <span v-if="!state.collapsed">春田花花幼儿园</span>
        <SmileOutlined v-else />
      </div>
      <Menu
        :collapsed="state.collapsed"
        @emitToggleCollapsed="emitToggleCollapsed"
        @currentMenuItem="currentMenuItem"
      ></Menu>
    </a-layout-sider>
    <a-layout>
      <headers></headers>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        :class="dataVisClassName"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
  </div>
</template>

<script setup>
import Headers from './layout/Headers.vue'
import Menu from './layout/Menu.vue'
import { reactive, onMounted, computed } from 'vue'
import {
  SmileOutlined
} from '@ant-design/icons-vue'
const state = reactive({
  collapsed: false,
  currentMenuItem: {
    key: ''
  }
})
onMounted(() => {
  console.log('mounted-vue3')
})

// emit收缩
const emitToggleCollapsed = () => {
  state.collapsed = !state.collapsed
}
const currentMenuItem = (obj) => {
  state.currentMenuItem = obj
}

const dataVisClassName = computed(() => {
  return state.currentMenuItem.key === '/data-visualization' ? 'data-visualization-style' : ''
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
  margin: 10px;
  line-height: 32px;
  text-align: center;
  color: #1890ff;
}
.data-visualization-style {
  padding: 0 !important;
}
</style>
