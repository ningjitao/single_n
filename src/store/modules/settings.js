export default {
  namespaced: true,
  state: {
    defaultOption: {
      step: 3, // 数值越大速度滚动越快
      hover: true, // 是否开启鼠标悬停stop
      wheel: false, // 在开启鼠标悬停的情况下是否开启滚轮滚动，默认不开启
      openWatch: true, // 开启数据实时监控刷新dom
      direction: 4, // 0向下 1向上 2向左 3向右
      limitScrollNum: 1, // 开始无缝滚动的数据量 this.dataList.length
      singleHeight: 280, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
      singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
      singleWaitTime: 3000 // 单步运动停止的时间(默认值1000ms)
      // step:3
    }
  },
  mutations: {

  },
  actions: {

  }
}
