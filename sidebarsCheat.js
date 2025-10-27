const sidebars = {
  cheatSidebar: [
    // 主页介绍
    'intro',

    // 和平精英
    {
      type: 'category',
      label: '和平精英',
      items: [
        'hpjy/intro',    // 创建文档
      ],
    },
    // PUBG移动端
    {
      type: 'category',
      label: 'PUBG移动端',
      items: [
        'pubgmobile/intro',    // 创建文档
      ],
    },
    // 其他游戏
    {
      type: 'category',
      label: '其他游戏',
      items: [
        'other/intro',
      ],
    }
  ],
};

export default sidebars;
