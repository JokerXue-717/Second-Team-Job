// pages/follow/follow.js
Page({
  data: {
      follows: [] // 存储关注列表数据
  },
  onLoad: function() {
      this.getFollows(); // 页面加载时获取关注列表数据
  },
  getFollows: function() {
      // 模拟从后端获取关注列表数据
      this.setData({
          follows: [
              { avatar: 'https://pic2.zhimg.com/50/v2-0eab67f00745c18c45b8a38b9f2005c2_hd.jpg?source=1940ef5c', nickname: '瓜瓜', description: '鸡腿真好吃' },
              { avatar: 'https://c-ssl.duitang.com/uploads/blog/202103/30/20210330170258_355c7.thumb.1000_0.jpeg', nickname: '塔塔', description: '糖醋里脊好美味' },
              { avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.7P0tIhXN1dPUqPPhtBzDmAAAAA?rs=1&pid=ImgDetMain', nickname: '菲菲', description: '最喜欢吃冰激凌' }
          ]
      });
  },
  viewProfile: function(e) {
      // 获取被点击的用户信息
      const followItem = this.data.follows[e.currentTarget.dataset.index];
      // 跳转到用户个人资料页面
      wx.navigateTo({
          url: `../guanzhuren/guanzhuren?nickname=${followItem.nickname}&avatar=${followItem.avatar}`
      });
  }
});

//后端接口信息
//GET /follows
//描述: 获取用户的关注列表。
///请求参数: 无
//响应:
//状态码: 200
//内容: JSON对象，包含关注列表，例如：
//json
//{
///  "follows": [
 ////     {
    //      "avatar": "path_to_avatar1.jpg",
    //      "nickname": "瓜瓜",
   //       "description": "中餐，我梦中的情餐~"
   //   },
   //   {
   //       "avatar": "path_to_avatar2.jpg",
     //     "nickname": "瓜瓜",
     //     "description": "中餐，我梦中的情餐~"
     // },
    //  {
    //      "avatar": "path_to_avatar3.jpg",
   //       "nickname": "瓜瓜",
  ////        "description": "中餐，我梦中的情餐~"
   //   }
  //]
//}