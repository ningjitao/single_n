import Mock from 'mockjs'

// layout左侧菜单栏
Mock.mock(
  '/api/layout/menu',
  'get', [
    {
      menuName: 'Navigation One',
      id: 1,
      children: [
        { menuItemName: 'Option1', id: '1-1' },
        { menuItemName: 'Option2', id: '1-2' },
        { menuItemName: 'Option3', id: '1-3' },
        { menuItemName: 'Option4', id: '1-4' }
      ]
    },
    {
      menuName: 'Navigation Two',
      id: 2,
      children: [
        { menuItemName: 'Option5', id: '2-5' },
        { menuItemName: 'Option6', id: '2-6' },
        { menuItemName: 'Option7', id: '2-7' }
      ]
    },
    {
      menuName: 'Navigation Three',
      id: 3,
      children: [
        { menuItemName: 'Option8', id: '3-8' },
        { menuItemName: 'Option9', id: '3-9' },
        { menuItemName: 'Option10', id: '3-10' }
      ]
    }
  ])
