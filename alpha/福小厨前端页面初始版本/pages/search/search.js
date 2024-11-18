Page({
  data: {
    searchQuery: ''
  },

  // 处理文本输入
  onInput: function(event) {
    this.setData({
      searchQuery: event.detail.value
    });
  },

  // 执行搜索
  search: function() {
    console.log('搜索内容:', this.data.searchQuery);
    wx.showToast({
      title: '搜索内容: ' + this.data.searchQuery,
      icon: 'none'
    });
  }
});
