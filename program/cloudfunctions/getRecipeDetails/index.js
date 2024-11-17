// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()   // 初始化数据库
  const { recipeId } = event    // 从前端传递的参数中获取 recipeId

  try {
    // 根据 recipeId 查询 Recipes 集合中的数据
    const recipe = await db.collection('Recipes').doc(recipeId).get()  // 使用 doc(recipeId) 获取指定文档

    console.log('查询成功：', recipe)  // 添加日志，查看查询结果

    // 返回查询到的数据
    return { success: true, data: recipe.data }
  } catch (e) {
    // 捕获错误并返回
    console.error('查询失败：', e)  // 添加错误日志
    return { success: false, error: e }
  }
}
