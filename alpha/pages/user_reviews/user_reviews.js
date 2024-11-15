Page({
  data: {
    // 用户评价数据
    reviews: [
      {
        content: "非常好吃，味道浓郁，回味无穷！",
        reviewerName: "王子聪",
        reviewerAvatar: "https://c-ssl.duitang.com/uploads/item/202002/25/20200225104057_BcSNB.jpeg",
        rating: 5
      },
      {
        content: "这道菜做得很棒，大家可以尝试一下。",
        reviewerName: "小洪",
        reviewerAvatar: "https://c-ssl.duitang.com/uploads/blog/202207/22/20220722231325_3754c.jpg",
        rating: 4
      },
      {
        content: "还不错，味道有点重。",
        reviewerName: "小白",
        reviewerAvatar: "https://www.keaitupian.cn/cjpic/frombd/0/253/4074769201/2224037508.jpg",
        rating: 3
      },
      {
        content: "还不错，味道有点重。",
        reviewerName: "小绿",
        reviewerAvatar: "https://www.keaitupian.cn/cjpic/frombd/2/253/3313151248/3056277959.jpg",
        rating: 3
      },
      {
        content: "还不错，味道有点重。",
        reviewerName: "小紫",
        reviewerAvatar: "https://gd-hbimg.huaban.com/d84daecd9a8c747e7561d7d1e836a957ebc66607557e-dAZQYo_fw658",
        rating: 3
      }
    ]
  },

  // 返回按钮点击事件
  goBack() {
    wx.navigateBack({
      delta: 1 // 返回上一个页面
    });
  }
});
