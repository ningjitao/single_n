<template>
  <div class="menu-div-style">
    <div style="display:flex; justify-content:center">
      <a-button
        class="menu-button"
        @click="toggleCollapsed"
      >
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>
    <a-menu
      theme="dark"
      mode="inline"
      v-model:openKeys="state.openKeys"
      @openChange="onOpenChange"
      v-model:selectedKeys="state.defaultSelect"
      @click="handleMenuItem"
    >
    <div
      :key="item.id"
      v-for="item in state.menuList"
    >
      <a-sub-menu
        v-if="item.children"
        :key="item.id"
      >
        <template v-slot:title>
          <RadarChartOutlined />
          <span>{{item.menuName}}</span>
        </template>
        <a-menu-item
          :key="menuItem.id"
          v-for="menuItem in item.children"
        >
          {{menuItem.menuItemName}}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item
        v-else
        :key="item.router"
      >
        <RadarChartOutlined />
        <span>{{item.menuName}}</span>
      </a-menu-item>
    </div>
    </a-menu>
  </div>
</template>

<script setup name="Menu">
import { reactive, getCurrentInstance, defineProps, defineEmits } from 'vue'
import API from '@/api/home'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RadarChartOutlined
} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { proxy } = getCurrentInstance()
defineProps({
  collapsed: Boolean
})
const emitToggleCollapsed = defineEmits(['emitToggleCollapsed', 'currentMenuItem'])
const state = reactive({
  defaultSelect: ['1'],
  openKeys: [],
  rootSubmenuKeys: [],
  menuList: []
})
proxy.$http.get(API.getMenuList).then(res => {
  state.menuList = [...res.data]
  state.openKeys = [res.data[0].id]
  res.data.forEach(element => {
    state.rootSubmenuKeys.push(element.id)
  })
})

const handleMenuItem = (e) => {
  const currentRouter = router.currentRoute.value.path
  if (e.key !== currentRouter) {
    router.push(e.key)
  }
  emitToggleCollapsed('currentMenuItem', e)
}

const onOpenChange = (openKey) => {
  // const latestOpenKey = openKey.find(key => state.openKeys.indexOf(key) === -1)
  // if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //   state.openKeys = openKey
  // } else {
  //   state.openKeys = latestOpenKey ? [latestOpenKey] : []
  // }
}
// 收缩按钮
const toggleCollapsed = () => {
  emitToggleCollapsed('emitToggleCollapsed')
}
</script>

<style lang="scss" scoped>
.menu-div-style {
  .menu-button {
    background-color: #000c17;
    border: #000c17;
    color: #fff;
  }
}
</style>
