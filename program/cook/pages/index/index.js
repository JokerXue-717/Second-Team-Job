// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

 const db = wx.cloud.database(); // 获取数据库引用
// //查看数据库记录数量
// db.collection('Users').count().then(res => {
//   console.log('Users表中记录数：', res.total);
// });


Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
      openid: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  onLoad() {
    this.loginWithOpenid();
 },

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail;
    const { nickName } = this.data.userInfo;
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
    });
  },

 onInputChange(e) {
    
  },


  loginWithOpenid() {
    // 获取用户的openid
   wx.cloud.callFunction({
     name: 'login', // 云函数名
     data: {}, // 传递给云函数的数据
     success: res => {
       console.log('云函数调用成功', res);
       this.data.userInfo.openid = res.result.openid;
       //检查数据库中是否已经存在该用户
        this.checkUserExist(this.data.userInfo.openid);
     },
     fail: err => {
       console.error('云函数调用失败nmsl', err);
     }
   });
  },

  //检查用户是否已经存在
  checkUserExist(openid) {
    //console.log("123",openid);
    db.collection('Users').where({
      openid: openid
    }).get().then(res => {
      if (res.data.length > 0) {
        console.log('用户已存在', res.data[0].nickName);
        this.data.hasUserInfo=true;
        this.data.userInfo.nickName = res.data[0].nickName;
        this.data.userInfo.avatarUrl = res.data[0].avatarUrl;
      } else {
        console.log('用户不存在');
      }
    });
  },

  saveUserInfo() {
    // 将用户信息保存到数据库
    wx.cloud.callFunction({
      name: 'addUser',
      data: {
        nickName: this.data.userInfo.nickName,
        avatarUrl: this.data.userInfo.avatarUrl,
        openid: this.data.userInfo.openid,
      },
      success: res => {
        console.log('保存用户信息成功', res);
        this.data.hasUserInfo=true;
      },
      fail: err => {
        console.error('保存用户信息失败', err);
      }
    });
  },

  navigateToAIHome() {
    //如果hasUserInfo为false，说明用户不存在，需要先保存用户信息
    this.saveUserInfo();
    //如果hasUserInfo为true，说明用户已经存在，直接加载昵称和头像，进入登录页面
    if(this.data.hasUserInfo){
      wx.navigateTo({
        url: `/pages/ai_home/ai_home`,
      });
      return;
    }
    
    
  }
});