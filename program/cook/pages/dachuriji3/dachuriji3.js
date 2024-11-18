// pages/newPage/newPage.js
Page({
  data: {
      diaryDate: '', // 存储传递过来的日期
      diaryContent: '', // 存储日记内容
      diaryImage: '' // 存储日记图片路径
  },
  onLoad: function(options) {
      // 获取传递过来的日期参数
      const date = options.date;
      
      // 根据日期获取日记内容和图片（这里假设你有一个函数getDiaryByDate来获取数据）
      const diaryData = this.getDiaryByDate(date);
      this.setData({
          diaryDate: date,
          diaryContent: diaryData.content,
          diaryImage: diaryData.imagePath
      });
  },
  getDiaryByDate: function(date) {
      // 这里应该是调用后端接口获取日记数据的逻辑
      // 为了示例，我们直接返回一些模拟数据
      return {
          content: '今天跟着软件里的AI菜谱做出了糖醋排骨，好神奇的体验！我竟然靠AI做出了一道菜，而且味道还不错！今天是值得记录的一天！',
          imagePath: 'path_to_your_image.jpg'
      };
  }
});