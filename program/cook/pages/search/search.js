Page({
  data: {
    searchQuery: '',           // 搜索框内容
    recipeDetails: null,       // 存储获取到的配方详情
  },

  // 处理输入框文本
  onInput: function(event) {
    this.setData({
      searchQuery: event.detail.value
    });
  },

  // 执行搜索功能
  search: function() {
    console.log('搜索内容:', this.data.searchQuery);

    // 显示加载提示
    wx.showLoading({
      title: '正在搜索...'
    });

    // 调用云函数并传递 category 参数
    wx.cloud.callFunction({
      name: 'getRecipes', // 云函数名称
      data: { category: this.data.searchQuery },  // 传递 category 参数
      success: res => {
        wx.hideLoading(); // 隐藏加载提示

        if (res.result.success) {
          this.setData({
            recipeDetails: res.result.data
          });
          console.log('配方详情:', res.result.data);
        } else {
          wx.showToast({
            title: '未找到配方信息',
            icon: 'none'
          });
        }
      },
      fail: err => {
        wx.hideLoading(); // 隐藏加载提示
        console.error('查询失败:', err);
        wx.showToast({
          title: '查询失败，请重试',
          icon: 'none'
        });
      }
    });
  }
});
