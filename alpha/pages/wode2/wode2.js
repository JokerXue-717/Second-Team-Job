Page({
  data: {
    avatarUrl: '', // 用户头像URL
    nickname: '', // 用户昵称
    introduction: '', // 用户介绍
    collections: 0, // 收藏菜谱数量
    following: 0, // 关注数量
    posts: 0, // 帖子数量
    points: 0 // 用户积分
  },
  onLoad: function() {
    this.getUserProfile(); // 获取用户信息
  },
  getUserProfile: function() {
    wx.cloud.callFunction({
      name: 'getUserProfile',
      data: {},
      success: res => {
        if (res.result.success) {
          this.setData({
            avatarUrl: res.result.data.avatarUrl,
            nickname: res.result.data.nickName,
            introduction: res.result.data.introduction,
            collections: res.result.data.collections,
            following: res.result.data.following,
            posts: res.result.data.posts,
            points: res.result.data.points
          });
        } else {
          console.error('获取用户信息失败', res.result.error);
        }
      },
      fail: err => {
        console.error('调用云函数失败', err);
      }
    });
  },
  logout: function() {
    wx.removeStorageSync('userToken'); // 清除本地存储的用户Token
    wx.navigateBack(); // 返回上一页
  }
});
