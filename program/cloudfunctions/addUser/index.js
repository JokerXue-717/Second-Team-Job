// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const { nickName, avatarUrl, openid } = event

  try {
    // 将用户信息添加到数据库
    await db.collection('Users').add({
      data: {
        nickName: nickName,
        avatarUrl: avatarUrl,
        openid: openid,
        _id: openid,
        createTime: new Date()
      }
    })
    return {
      success: true,
      message: '用户信息添加成功'
    }
  } catch (err) {
    return {
      success: false,
      message: '用户信息添加失败',
      error: err
    }
  }
}