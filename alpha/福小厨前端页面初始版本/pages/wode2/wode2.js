// pages/profile/profile.js
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
    wx.request({
      url: 'https://your-backend-api.com/user/profile', // 后端接口地址
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({
            avatarUrl: res.data.avatar,
            nickname: res.data.nickname,
            introduction: res.data.introduction,
            collections: res.data.collections,
            following: res.data.following,
            posts: res.data.posts,
            points: res.data.points
          });
        }
      }
    });
  },
  logout: function() {
    wx.removeStorageSync('userToken'); // 清除本地存储的用户Token
    wx.navigateBack(); // 返回上一页
  }
});
