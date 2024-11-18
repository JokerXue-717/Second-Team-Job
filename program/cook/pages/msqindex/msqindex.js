// pages/index/index.js
Page({
  data: {
    posts: [
      {
        id: 1,
        imageUrl: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.ofEdFm1q1TUqlClLy2g87QHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', 
        title: '青椒炒肉丝',
        description: '青椒肉丝，我最爱的家常菜，快做起来'
      },
      {
        id: 2,
        imageUrl: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.BhOH6OldHVf2cgOELiQKaAHaGt&w=262&h=237&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', 
        title: '奶油蘑菇汤',
        description: '美味的奶油蘑菇汤'
      },
      {
        id: 3,
        imageUrl: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.9PG56-bfZ9GMxkMw7u50fgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', 
        title: '番茄鸡蛋汤',
        description: '求问：番茄鸡蛋汤怎么做才好喝？'
      },
      {
        id: 4,
        imageUrl: 'https://ts2.cn.mm.bing.net/th?id=OSK.e423263a936e9404c7175b25b6aceb8e&w=164&h=220&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1', 
        title: '蒜蓉娃娃菜',
        description: '简单易做，口感鲜美的蒜蓉娃娃菜'
      }
    ]
  },



  // 点击图片进入详情页
  navigateToDetail: function(event) {
    const postId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${postId}`
    });
  },

  // 点击加号进入发布页
  navigateToPublish: function() {
    wx.navigateTo({
      url: '/pages/publish/publish'
    });
  }
});
