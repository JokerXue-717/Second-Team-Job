// pages/diary/diary.js
Page({
  data: {
      diaryText: '' // 存储日记文本
  },
  onInput: function(e) {
      this.setData({
          diaryText: e.detail.value // 更新日记文本
      });
  },
  saveDiary: function() {
      const diaryText = this.data.diaryText.trim(); // 获取去除首尾空格的日记文本
      if (diaryText) {
          // 这里可以添加代码将日记保存到服务器或本地存储
          console.log('保存的日记:', diaryText);
          // 假设保存成功后，可以清空文本框或进行其他操作
          wx.showToast({
              title: '日记保存成功',
              icon: 'success',
              duration: 2000
          });
      } else {
          wx.showToast({
              title: '日记内容不能为空',
              icon: 'none',
              duration: 2000
          });
      }
  }
});