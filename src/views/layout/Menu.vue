<template>
  <div>
      <a-menu theme="dark" mode="inline" :open-keys="state.openKeys"  @openChange="onOpenChange" :default-selected-keys="state.defaultSelect" @click="handleMenuItem">
      <a-sub-menu :key="item.id" v-for="item in state.menuList">
        <template v-slot:title><span>{{item.menuName}}</span></template>
        <a-menu-item :key="menuItem.id" v-for="(menuItem) in item.children">
          {{menuItem.menuItemName}}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup name="Menu">
import { reactive, getCurrentInstance } from 'vue'
import API from '@/api/home'
const { proxy } = getCurrentInstance()
const state = reactive({
  defaultSelect: ['1-1'],
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
  console.log(e, '-----')
}

const onOpenChange = (openKey) => {
  const latestOpenKey = openKey.find(key => state.openKeys.indexOf(key) === -1)
  if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = openKey
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : []
  }
}
</script>

<style lang="scss" scoped>

</style>
