const sidebars = {
  cheatSidebar: [
    // 主页介绍
    'intro',

    // 和平精英
    {
      type: 'category',
      label: '和平精英',
      items: [
        // 页面介绍
        'hpjy/intro',
        // 2025年10月
        {
          type: 'category',
          label: '2025/10',
          items: [
            'hpjy/2025/10/FSKernelPlus2.1/index',
            'hpjy/2025/10/YushengHepingPublicWelfareReformDocument/index',
            'hpjy/2025/10/REandPeaceFilePublicWelfarePAKV11/index',    // 创建文档
          ],
        },  
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
        'other/LOLLEOPublicWelfareKernel/index',
        'other/GrassStealingNotesBuiltinMODMenu/index',        
        'other/KoreanFantasy/index',        
      ],
    }
  ],
};

export default sidebars;
