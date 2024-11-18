// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()   // 初始化数据库
  const { category } = event    // 从前端传递的参数中获取 category

  try {
    // 根据 category 查询 Recipes 集合中的数据
    const recipes = await db.collection('Recipes').where({ category: category }).get()                     

    // 返回查询到的数据
    return { success: true, data: recipes.data }
  } catch (e) {
    // 捕获错误并返回
    return { success: false, error: e }
  }
}
