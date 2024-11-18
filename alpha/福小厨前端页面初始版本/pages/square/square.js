Page({
  // 返回到 ai_home 页面
  navigateBack: function() {
    wx.redirectTo({
      url: '/pages/ai_home/ai_home', // 请确保此路径正确
    });
  },

  navigateToSearch: function() {
    // 执行页面跳转到搜索页面
    wx.navigateTo({
      url: '/pages/search/search', // 请确保此路径正确
    });
  },

  navigateToCategory: function(event) {
    const category = event.currentTarget.dataset.category;
    // 根据类别跳转到不同的菜品分类页面
    wx.navigateTo({
      url: `/pages/category/category?category=${category}`, // 确保此路径正确
    });
  },

  // 其他方法...
});
