Page({
  data: {
      avatar: '',
      nickname: '',
      description: '',
      followCount: 0,
      fansCount: 0,
      posts: []
  },
  onLoad: function(options) {
      this.setData({
          avatar: options.avatar,
          nickname: options.nickname,
          description: options.description,
          followCount: 123, // 示例数据
          fansCount: 456, // 示例数据
          posts: this.getPosts()
      });
  },
  getPosts: function() {
      // 模拟从数据库或其他地方获取帖子数据
      return [
          {
              title: '零失误家庭版可乐鸡翅',
              description: '分享一道超级简单的可乐鸡翅做法，保证零失败！',
              image: 'https://ts1.cn.mm.bing.net/th/id/R-C.b3a7697d2793ba094a861d546c31190d?rik=NevOIW4XmkUuMA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50069%2f5445.jpg_wh1200.jpg&ehk=wuLPicg%2b9wXz8QAwp%2fAVFBtJQ6loBUiVfQZu2bbZODA%3d&risl=&pid=ImgRaw&r=0'
          },
          {
              title: '糖醋排骨的做法',
              description: '教你如何做出酸甜适口的糖醋排骨，快来试试吧！',
              image: 'https://cp1.douguo.com/upload/caiku/9/5/b/yuan_9528efec551325e874298fbad205c27b.jpeg'
          }
      ];
  }
});