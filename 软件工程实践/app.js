// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    
    // 检查本地存储的用户信息，若存在则加载
    const storedUserInfo = wx.getStorageSync('userInfo')
    if (storedUserInfo) {
      this.globalData.userInfo = storedUserInfo
    }
  },

  globalData: {
    userInfo: null // 用户信息，包括头像和昵称
  }
})
