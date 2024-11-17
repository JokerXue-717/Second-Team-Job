Page({
  data: {
    // 模拟菜谱数据
    recipes: [
      {
        id: 1,
        name: "糖醋排骨",
        imageUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.8b01b5b78783a1c2a7604facc3cd8de9?rik=AHxC1DSiFKDZdg&riu=http%3a%2f%2fi2.chuimg.com%2f033acb7e889e11e6b87c0242ac110003_640w_640h.jpg%3fimageView2%2f2%2fw%2f660%2finterlace%2f1%2fq%2f90&ehk=686Q8eAcXFLQJAkiNpEKO2Nt8q7LvJGPQP48ZHPr%2ftM%3d&risl=&pid=ImgRaw&r=0",
        authorId: 101,
        authorName: "王子聪",
        authorAvatar: "https://c-ssl.duitang.com/uploads/item/202002/25/20200225104057_BcSNB.jpeg"
      },
      {
        id: 2,
        name: "可乐鸡翅",
        imageUrl: "https://tse2-mm.cn.bing.net/th/id/OIP-C.p4_e9uIshNtsfuSCkH-xeQHaHa?rs=1&pid=ImgDetMain",
        authorId: 102,
        authorName: "小白",
        authorAvatar: "https://c-ssl.duitang.com/uploads/blog/202107/03/20210703203747_81635.thumb.1000_0.jpeg"
      },
      {
        id: 3,
        name: "青椒肉丝",
        imageUrl: "https://tse2-mm.cn.bing.net/th/id/OIP-C.rPYpvlFhavxsvo6WaGG-ogHaHa?rs=1&pid=ImgDetMain",
        authorId: 102,
        authorName: "小红",
        authorAvatar: "https://www.keaitupian.cn/ueditor/php/upload/image/20211201/1638340530918576.jpg"
      },
      {
        id: 4,
        name: "鱼香肉丝",
        imageUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.5d44778784c4b52b8928d9cc0acc90ee?rik=iwAHpLemS5hFyA&riu=http%3a%2f%2fi2.chuimg.com%2f3b4fd10681f211e6b87c0242ac110003_800w_533h.jpg%3fimageView2%2f2%2fw%2f660%2finterlace%2f1%2fq%2f90&ehk=M51H6iDzMEFeZT4Y4LuLNyhxqKaoTby%2bHE7LmZYm3MA%3d&risl=&pid=ImgRaw&r=0",
        authorId: 102,
        authorName: "小黄",
        authorAvatar: "https://c-ssl.duitang.com/uploads/blog/202207/22/20220722231325_3754c.jpg"
      },
      {
        id: 5,
        name: "油闷大虾",
        imageUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.e10660e8e341dc7610d4377df96fbe1e?rik=Kn2i%2bcvpeSp%2b1Q&riu=http%3a%2f%2fcp1.douguo.com%2fupload%2fcaiku%2f6%2fd%2f0%2fyuan_6dd80b66e2e694247e7d080a1cf30200.jpg&ehk=kHh5aWFQRSrE2pLNuTxxrA0aY%2bRLGB7B%2bKKA8Ar5lOc%3d&risl=&pid=ImgRaw&r=0",
        authorId: 102,
        authorName: "小蓝",
        authorAvatar: "https://pic.qqtn.com/up/2019-11/2019112017124090533.jpg"
      },
      {
        id: 6,
        name: "红烧肉",
        imageUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.50115750712448f0e0c24482835ede98?rik=%2brc4%2bmSn%2fZUttA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50058%2f4033.jpg_wh300.jpg&ehk=xs9nHXaFhVfSzIiTRzBTKSzfzR%2fGqH0guYw4Gg7ywGE%3d&risl=&pid=ImgRaw&r=0",
        authorId: 102,
        authorName: "小绿",
        authorAvatar: "https://c-ssl.duitang.com/uploads/blog/202101/27/20210127193414_44f57.jpg"
      },
      {
        id: 7,
        name: "红烧茄子",
        imageUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.2f285224c3e56864765ffae81cb91bb8?rik=KS6OtKdtb6KzAw&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50088%2f3503.jpg_wh300.jpg&ehk=vKHYjaxbcqaEdyK9PeOGZt8vMnusXx%2bCNLOTbifgK34%3d&risl=&pid=ImgRaw&r=0",
        authorId: 102,
        authorName: "小紫",
        authorAvatar: "https://c-ssl.duitang.com/uploads/blog/202207/18/20220718154307_fe65a.jpg"
      },
      {
        id: 8,
        name: "水煮肉片",
        imageUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.1f58efceb8c46e1c0d13c96b32035517?rik=nZf9VMgQXH%2f93w&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20210813ac%2f597%2fw1920h1077%2f20210813%2f2d6d-18df2e3eddb1ba5fd692d2bb32264f2c.jpg&ehk=TncqiepHY3dexZV%2bzXj96tCFcB1B2Mh6jVbrht3zmN8%3d&risl=&pid=ImgRaw&r=0",
        authorId: 102,
        authorName: "小橙",
        authorAvatar: "https://c-ssl.duitang.com/uploads/blog/202010/13/20201013144701_246a2.jpg"
      },
      // 更多菜谱...
    ]
  },

  // 跳转到指定菜谱的详细页面
  navigateToRecipeDetail(e) {
    const recipeId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/recipe_detail/recipe_detail?id=${recipeId}`
    });
  },

  // 跳转到发布者主页
  navigateToAuthorHome(e) {
    const authorId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/author_home/author_home?id=${authorId}`
    });
  }
});
