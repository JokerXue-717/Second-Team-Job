Page({
  data: {
    recipe: {
      name: "", // 食谱名称
      imageUrl: "", // 图片URL
      ingredients: "", // 食材列表
      steps: [], // 制作步骤
      reviews: [] // 评论列表
    }
  },
  onLoad: function(options) {
    const recipeId = options.id;
    wx.cloud.callFunction({
      name: 'getRecipeDetails',
      data: { recipeId },
      success: res => {
        if (res.result.success) {
          this.setData({ recipe: res.result.data });
        } else {
          console.error('获取食谱详情失败', res.result.error);
        }
      },
      fail: err => {
        console.error('调用云函数失败', err);
      }
    });
  },
  
  // 跳转到更多评价页面
  navigateToMoreReviews() {
    wx.navigateTo({
      url: '/pages/more_reviews/more_reviews', // 替换为实际的页面路径
    });
  },

  // 返回按钮点击事件
  goBack() {
    wx.navigateBack({
      delta: 1 // 返回上一个页面
    });
  }
});
