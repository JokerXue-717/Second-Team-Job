Page({
  data: {
    posts: [] // 动态数据
  },

  // 跳转到搜索页面
  navigateToSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search', // 请确保路径正确
    });
  },

  // 跳转到分类页面
  navigateToCategory: function (event) {
    const category = event.currentTarget.dataset.category;
    wx.navigateTo({
      url: `/pages/category/category?category=${category}`, // 确保路径正确
    });
  },

  onLoad: function () {
    wx.cloud.callFunction({
      name: 'getPosts',
      data: {},
      success: res => {
        if (res.result.success) {
          this.setData({ posts: res.result.data });
        } else {
          console.error('获取动态失败', res.result.error);
        }
      },
      fail: err => {
        console.error('调用云函数失败', err);
      }
    });
  },
});
