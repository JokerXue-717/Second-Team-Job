// pages/publish/publish.js
Page({
  data: {
    content: '',      // 动态内容
    imageUrl: []      // 动态图片URL数组
  },

  // 监听输入框内容变化
  onContentInput: function(event) {
    this.setData({
      content: event.detail.value
    });
  },

  // 选择图片并上传
  chooseImage: function() {
    wx.chooseImage({
      count: 1, // 限制选择 1 张图片，可以根据需求调整
      success: res => {
        const tempFilePath = res.tempFilePaths[0];
        this.uploadImage(tempFilePath);
      }
    });
  },

  // 上传图片到云存储
  uploadImage: function(filePath) {
    wx.cloud.uploadFile({
      cloudPath: `posts/${Date.now()}-${Math.floor(Math.random() * 1000)}.png`, // 云存储路径
      filePath: filePath,
      success: res => {
        this.setData({
          imageUrl: [...this.data.imageUrl, res.fileID] // 将图片 fileID 添加到 imageUrl 数组
        });
      },
      fail: err => {
        console.error('图片上传失败', err);
      }
    });
  },

  // 调用云函数发布动态
  publishPost: function() {
    const { content, imageUrl } = this.data;

    if (!content) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      });
      return;
    }

    wx.cloud.callFunction({
      name: 'addPost',
      data: { 
        content: content,
        imageUrl: imageUrl   // 传递图片链接的数组
      },
      success: res => {
        if (res.result.success) {
          wx.showToast({
            title: '发布成功',
          });
          // 清空输入内容和图片
          this.setData({
            content: '',
            imageUrl: []
          });
          // 可以刷新页面或跳转回主页面
          wx.navigateBack();
        } else {
          console.error('发布失败', res.result.error);
        }
      },
      fail: err => {
        console.error('调用云函数失败', err);
      }
    });
  }
});
