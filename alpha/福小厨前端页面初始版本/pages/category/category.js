Page({
  data: {
    category: '',
    recipes: []  // 存储该分类下的菜品
  },

  onLoad: function(options) {
    const category = options.category;  // 获取传递的分类参数
    this.setData({ category });
    
    this.loadRecipes(category);  // 加载对应的菜品
  },

  loadRecipes: function(category) {
    // 定义每个分类对应的菜品及其在线图片链接
    const recipesData = {
      category1: [
        { name: '西兰花炒鸡胸肉', image: 'https://ts1.cn.mm.bing.net/th?id=OSK.78c3c1e3569c5ec0998fecedbbf98e3b&w=164&h=164&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1' },
        { name: '凉拌菠菜金针菇', image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.AC7LlIhLqX3H5uIn4xE3NgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
      ],
      category2: [
        { name: '麻婆豆腐', image: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.o2RLOV8fvxE0gPN-jvSANAHaIV&w=235&h=265&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { name: '回锅肉', image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.u2Yev_q8doaLh_UqTSZTyAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
      ],
      category3: [
        { name: '牛排', image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.AhMfVBLBDlQJLcLRl3d0eAHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { name: '意大利面', image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.OPKZyjqOi1Z6LilmWXPYhwHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
      ],
      category4: [
        { name: '排骨汤', image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.2HCQJBJx9yIX72avKVio3wHaLJ&w=203&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { name: '鱼汤', image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.25o6VAPZ-pdealFIDiD7CwHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
      ],
      category5: [
        { name: '鸡胸肉沙拉', image: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.Cyu9DiTZM-zaX1GLzrSxSAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { name: '黑米饭素汉堡', image: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.Ly9tYLBpk2CpwciEG6r75AHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
      ],
      category6: [
        { name: '青椒火腿炒蛋', image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.ZFAhWV5bu3QxF7hUfBfs1AHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { name: '鱼香肉丝', image: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.gbsjyvN5NCtG--UEdJqLgAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
      ],
      category7: [
        { name: '葱油蛏子', image: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.thWyeXNab-JKIyG6a6zIAwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { name: '葱油鲍鱼', image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.JDUtWMt5Ix2e-53INXCWtwHaJ3&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
      ],
      category8: [
        { name: '蜜汁叉烧肉', image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.STO7A6J8UU5OOVKct1_JKAHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { name: '香煎里脊肉', image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.vu2cC_t_zWdgNjUS25z_ZAHaHP&w=252&h=247&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
      ],
      category9: [
        { name: '红枣小圆子', image: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.z7hr4nK7qlxhAns0ULQgCwHaE_&w=304&h=205&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { name: '饺子皮蛋挞', image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.W9HQ2ho8GnAcDL0H5IeF0gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
      ]
    };

    // 根据传入的类别获取相应的菜品
    const recipes = recipesData[category] || [];
    this.setData({ recipes });
  }
});
