 // pages/calendar/calendar.js
Page({
  data: {
      signText: '签到', // 签到按钮的文本
      selectedDate: '2024-10-23', // 默认选中的日期
      continuousSignDays: 1, // 连续签到天数
      totalSignDays: 2 // 累计签到天数
  },
  onDateChange: function(e) {
      this.setData({
          selectedDate: e.detail.value
      });
  },
  toggleSignStatus: function() {
      // 切换签到状态
      this.setData({
          signText: this.data.signText === '签到' ? '已签到' : '签到'
      });
      // 这里可以添加签到的逻辑
      console.log('签到状态已切换');
  },
  onAdd: function() {
    wx.navigateTo({
      url: '../dachuriji2/dachuriji2' // 替换为你的目标页面路径
  });
  }
});