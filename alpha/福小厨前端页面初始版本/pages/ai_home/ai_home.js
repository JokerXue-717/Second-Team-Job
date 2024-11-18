Page({
  data: {
    inputContent: '', // 当前输入内容
    messages: [
      { type: 'ai', text: '您好，我是你的 AI 助手，有什么可以帮您？', avatarUrl: '/images/logo.png' }, // 初始对话
    ],
    userAvatarUrl: '', // 用户头像
    aiAvatarUrl: 'https://example.com/ai-avatar.jpg', // AI 头像链接
  },

  onLoad(options) {
    // 获取传递的用户头像
    if (options.avatarUrl) {
      this.setData({
        userAvatarUrl: decodeURIComponent(options.avatarUrl), // 传递过来的头像 URL
      });
    }
  },

  onInputChange(e) {
    this.setData({
      inputContent: e.detail.value,
    });
  },

  onSendMessage() {
    const { inputContent, messages, userAvatarUrl, aiAvatarUrl } = this.data;
    if (!inputContent.trim()) {
      wx.showToast({ title: '请输入内容', icon: 'none' });
      return;
    }

    // 用户消息
    this.setData({
      messages: [...messages, { type: 'user', text: inputContent, avatarUrl: userAvatarUrl }], 
      inputContent: '',
    });

    // 模拟 AI 回复（可以连接后端接口）
    setTimeout(() => {
      this.setData({
        messages: [...this.data.messages, { type: 'ai', text: '这是 AI 的回复', avatarUrl: aiAvatarUrl }],
      });
    }, 1000);
  },

  navigateToAi() {
    wx.redirectTo({ url: '/pages/ai_home/ai_home' });
  },

  // 修改此处，点击 "食谱广场" 按钮跳转到 square 页面
  navigateToRecipes() {
    wx.redirectTo({ url: '/pages/square/square' }); // 确保路径正确
  },

  // 修改跳转到 msqindex 页面
  navigateToFoodCircle() {
    wx.redirectTo({ url: '/pages/msqindex/msqindex' }); // 修改跳转路径
  },

  // 修改此处，点击 "我的" 按钮跳转到 wode2 页面
  navigateToProfile() {
    wx.redirectTo({ url: '/pages/wode2/wode2' }); // 修改跳转路径
  },
});
