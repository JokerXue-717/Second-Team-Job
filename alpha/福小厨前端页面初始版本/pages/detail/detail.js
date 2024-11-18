Page({
  data: {
    detail: {},
    isCollected: false, // 用来标记是否已收藏
    comments: [
      { user: '小明', text: '这个菜好好吃！' },
      { user: '小红', text: '我也想试试这个做法。' },
      { user: '小李', text: '做的不错，改天再试试。' }
    ] // 示例评论数据
  },

  onLoad: function(options) {
    const postId = options.id; // 获取传递过来的 ID
    this.setDetailData(postId); // 设置详细信息数据
  },

  setDetailData: function(id) {
    const allPosts = [
      {
        id: 1,
        imageUrl: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.ofEdFm1q1TUqlClLy2g87QHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        title: '青椒炒肉丝',
        description: '青椒肉丝，我最爱的家常菜，快做起来',
        ingredients: '青椒，肉丝，酱油，盐',
        steps: ['1. 准备食材', '2. 切青椒', '3. 炒肉丝', '4. 加入青椒']
      },
      {
        id: 2,
        imageUrl: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.BhOH6OldHVf2cgOELiQKaAHaGt&w=262&h=237&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        title: '奶油蘑菇汤',
        description: '美味的奶油蘑菇汤',
        ingredients: '蘑菇，奶油，鸡汤',
        steps: ['1. 炒蘑菇', '2. 加入奶油', '3. 倒入鸡汤']
      },
      {
        id: 3,
        imageUrl: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.9PG56-bfZ9GMxkMw7u50fgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        title: '番茄鸡蛋汤',
        description: '求问：番茄鸡蛋汤怎么做才好喝？',
        ingredients: '番茄，鸡蛋，葱',
        steps: ['1. 打散鸡蛋', '2. 炒番茄', '3. 倒入鸡蛋']
      },
      {
        id: 4,
        imageUrl: 'https://ts2.cn.mm.bing.net/th?id=OSK.e423263a936e9404c7175b25b6aceb8e&w=164&h=220&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
        title: '蒜蓉娃娃菜',
        description: '简单易做，口感鲜美的蒜蓉娃娃菜',
        ingredients: '娃娃菜，蒜',
        steps: ['1. 蒜切碎', '2. 炒蒜', '3. 加入娃娃菜']
      }
    ];

    // 根据 ID 查找对应的菜谱
    const selectedPost = allPosts.find(post => post.id == id);
    
    if (selectedPost) {
      this.setData({
        detail: selectedPost
      });
    }
  },

  toggleCollect: function() {
    this.setData({
      isCollected: !this.data.isCollected // 切换收藏状态
    });

    // 显示收藏成功提示
    wx.showToast({
      title: this.data.isCollected ? '收藏成功' : '取消收藏',
      icon: 'success',
      duration: 2000
    });
  },

  goToReviews: function() {
    const postId = this.data.detail.id;
    wx.navigateTo({
      url: `/pages/user_reviews/user_reviews?id=${postId}`
    });
  }
});
