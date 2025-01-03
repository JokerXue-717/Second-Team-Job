// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    });
  },

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail;
    const { nickName } = this.data.userInfo;
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    });
  },

  onInputChange(e) {
    const nickName = e.detail.value;
    const { avatarUrl } = this.data.userInfo;
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    });
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
    });
  },

  navigateToAIHome() {
    const { avatarUrl } = this.data.userInfo; // 获取用户的头像 URL
    console.log('跳转时的 avatarUrl:', avatarUrl); // 输出 avatarUrl 以确认其值

    // 确保头像 URL 有效
    if (!avatarUrl || avatarUrl === defaultAvatarUrl) {
      wx.showToast({
        title: '请先设置头像',
        icon: 'none',
      });
      return; // 如果没有设置头像，阻止跳转
    }

    try {
      // 使用模板字符串正确拼接 URL 参数
      wx.navigateTo({
        url: `/pages/ai_home/ai_home?avatarUrl=${encodeURIComponent(avatarUrl)}`,
      });
    } catch (error) {
      console.error('页面跳转失败', error);
    }
  }
});
