import Mock from 'mockjs'
// layout左侧菜单栏
Mock.mock(
  '/api/layout/menu',
  'get', [
    {
      menuName: 'Test',
      id: 9999,
      router: '/test'
    },
    {
      menuName: '数据可视化',
      id: 999,
      router: '/data-visualization'
    },
    {
      menuName: 'Navigation One',
      id: 1,
      icon: '<RadarChartOutlined />',
      children: [
        { menuItemName: 'Option1', id: '1-1', router: '' },
        { menuItemName: 'Option2', id: '1-2', router: '' },
        { menuItemName: 'Option3', id: '1-3', router: '' },
        { menuItemName: 'Option4', id: '1-4', router: '' }
      ]
    },
    {
      menuName: 'Navigation Two',
      id: 2,
      icon: '<AlertOutlined />',
      children: [
        { menuItemName: 'Option5', id: '2-5', router: '' },
        { menuItemName: 'Option6', id: '2-6', router: '' },
        { menuItemName: 'Option7', id: '2-7', router: '' }
      ]
    },
    {
      menuName: 'Navigation Three',
      id: 3,
      icon: '<AccountBookOutlined />',
      children: [
        { menuItemName: 'Option8', id: '3-8', router: '' },
        { menuItemName: 'Option9', id: '3-9', router: '' },
        { menuItemName: 'Option10', id: '3-10', router: '' }
      ]
    }
  ])
