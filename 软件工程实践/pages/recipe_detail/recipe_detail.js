Page({
  data: {
    recipe: {
      name: "糖醋排骨",
      imageUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.8b01b5b78783a1c2a7604facc3cd8de9?rik=AHxC1DSiFKDZdg&riu=http%3a%2f%2fi2.chuimg.com%2f033acb7e889e11e6b87c0242ac110003_640w_640h.jpg%3fimageView2%2f2%2fw%2f660%2finterlace%2f1%2fq%2f90&ehk=686Q8eAcXFLQJAkiNpEKO2Nt8q7LvJGPQP48ZHPr%2ftM%3d&risl=&pid=ImgRaw&r=0",
      ingredients: "猪肉排骨500g，白糖30g，醋40ml，酱油30ml，料酒20ml，葱姜蒜适量。",
      steps: [
        "排骨洗净，切段，用清水焯水备用。",
        "锅中加油，放入葱姜蒜炒香，加入糖，醋，酱油和料酒，煮开后加入排骨。",
        "中小火煮30分钟，至排骨入味，汤汁浓稠即可。"
      ],
      reviews: [
        {
          content: "非常好吃，味道浓郁，回味无穷！",
          reviewerName: "小明",
          reviewerAvatar: "https://example.com/avatar.jpg",
          rating: 5
        },
        // 更多评价
      ]
    }
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
