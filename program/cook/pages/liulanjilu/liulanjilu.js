// pages/collection/collection.js
Page({
  data: {
      recipes: [
          {
              id: 1,
              image: 'https://jingyan.yxlady.com/upload/img/jy_jh/20210124222652_58677.jpg',
              name: '番茄炒蛋',
              author: '小当家'
          },
          {
              id: 2,
              image: 'https://cp1.douguo.com/upload/caiku/4/f/0/yuan_4fddf6f17e8139352b3b3e9322930560.jpg',
              name: '红烧肉',
              author: '塔菲'
          },
          {
              id: 3,
              image: 'https://ts1.cn.mm.bing.net/th/id/R-C.ebb6af4e5a7b157d5aa86d2947b6c6e5?rik=ZFHTmmj6kGzm0A&riu=http%3a%2f%2fcp1.douguo.net%2fupload%2fcaiku%2f2%2f4%2f2%2fyuan_246e4c537d5e9a6d08e1eba163f63ba2.jpg&ehk=0I6B2peQ5q%2fLlp8i16jgRvJeS9wbauHmff%2fTiui42dU%3d&risl=&pid=ImgRaw&r=0',
              name: '清蒸鱼',
              author: '奶龙'
          }
      ]
  },
  onLoad: function() {
      // 页面加载时获取菜谱数据
      // 这里可以保留调用后端接口的代码，也可以直接使用模拟数据
      // this.getRecipes();
  },

  // getRecipes: function() {
  //     // 假设从后端获取菜谱数据
  //     wx.request({
  //         url: 'https://your-backend-api.com/recipes/collection', // 后端接口地址
  //         success: (res) => {
  //             if (res.statusCode === 200) {
  //                 this.setData({
  //                     recipes: res.data.recipes
  //                 });
  //             }
  //         }
  //     });
  // },

  navigateToRecipeDetail: function(e) {
      const recipeId = e.currentTarget.dataset.id;
      wx.navigateTo({
          url: `/pages/recipe-detail/recipe-detail?id=${recipeId}`//页面4菜谱路径
      });
  }
});