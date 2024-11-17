// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const wxContext = cloud.getWXContext() // 获取用户的 openid
  
  const { content, imageUrl } = event    // 从前端传入的数据中解构内容和图片

  try {
    // 在 Posts 集合中添加一条新动态
    const newPost = await db.collection('Posts').add({
      data: {
        userId: wxContext.OPENID,  // 使用用户的 openid 作为 userId
        content: content,           // 动态内容
        imageUrl: imageUrl,         // 图片链接，可以是数组
        likes: 0,                   // 点赞数初始为 0
        comments: [],               // 评论初始为空数组
        timestamp: new Date().getTime() // 时间戳
      }
    })

    // 返回添加成功的信息
    return { success: true, data: newPost._id }
  } catch (e) {
    // 捕获错误并返回
    return { success: false, error: e }
  }
}
