<template>
  <div class="index-box">
    <div class="contetn_left">
      <!-- <div class="pagetab">
        <div class="item">实时监测</div>
        <div class="item">统计分析</div>
      </div> -->
      <ItemWrap class="contetn_left-top contetn_lr-item" title="设备总览">
        <LeftTop />
      </ItemWrap>
      <ItemWrap class="contetn_left-center contetn_lr-item" title="用户总览">
        <LeftCenter />
      </ItemWrap>
      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="设备提醒"
        style="padding: 0 10px 16px 10px"
      >
        <LeftBottom />
      </ItemWrap>
    </div>
    <div class="contetn_center">
      <CenterMap class="contetn_center_top" title="设备分布图" />
      <ItemWrap class="contetn_center-bottom" title="安装计划">
        <CenterBottom />
      </ItemWrap>
    </div>
    <div class="contetn_right">
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="报警次数">
        <RightTop />
      </ItemWrap>
      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="报警排名(TOP8)"
        style="padding: 0 10px 16px 10px"
      >
        <RightCenter />
      </ItemWrap>
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="数据统计图 ">
        <RightBottom />
      </ItemWrap>
    </div>
  </div>
</template>

<script setup>
import ItemWrap from './components/ItemWrap.vue'
import LeftTop from './components/LeftTop.vue'
import LeftCenter from './components/LeftCenter.vue'
import LeftBottom from './components/LeftBottom.vue'
import CenterMap from './components/CenterMap.vue'
import CenterBottom from './components/CenterBottom.vue'
import RightTop from './components/RightTop.vue'
import RightCenter from './components/RightCenter.vue'
import RightBottom from './components/RightBottom.vue'
</script>

<style lang="scss" scoped>
.index-box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
  background-image: url('@/assets/img/pageBg.png');
}
//左边 右边 结构一样
.contetn_left,
.contetn_right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 540px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.contetn_center {
  flex: 1;
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .contetn_center-bottom {
    height: 315px;
  }
}

.contetn_lr-item {
  height: 310px;
}
</style>
