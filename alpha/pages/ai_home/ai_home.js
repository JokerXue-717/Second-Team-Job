Page({
  data: {
    inputMessage: '',
    messages: [
      {
        type: 'bot',
        content: '你好，需要什么帮助吗？',
        avatarUrl: 'https://example.com/ai-avatar.jpg',
      }
    ],
    scrollIntoView: ''
  },

  handleInput(event) {
    this.setData({
      inputMessage: event.detail.value
    });
  },

  async sendMessage() {
    const message = this.data.inputMessage;

    if (!message) {
      return;
    }

    try {
      const response = await new Promise((resolve, reject) => {
        wx.request({
          url: 'https://api.chatanywhere.com.cn/v1/chat/completions',
          method: 'POST',
          data: {
            "model": "gpt-3.5-turbo",
            "messages": [{
              "role": "user",
              "content": message
            }]
          },
          header: {
            'Authorization': 'Bearer sk-OKPZ0LZ4CTvRE0IfYfPd94Z5ul3zpGSbKdzadr7U5SPTg8jX',
            'Content-Type': 'application/json'
          },
          success: resolve,
          fail: reject
        });
      });

      if (response.data && response.data.choices) {
        const reply = response.data.choices[0].message.content;

        this.setData({
          inputMessage: '',
          messages: [...this.data.messages, 
            { content: message, type: 'user', alignment: 'right'},
            { content: reply, type: 'bot', alignment: 'left' }],
          scrollIntoView: 'msg-' + (this.data.messages.length - 1)
        });
      } else {
        console.error('No choices found in response:', response);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  },

  navigateToFoodCircle() {
    wx.navigateTo({
      url: '/pages/msqindex/msqindex'
    });
  },

  navigateToSquare() {
    wx.navigateTo({
      url: '/pages/square/square'
    });
  },

  navigateToProfile() {
    wx.navigateTo({
      url: '/pages/wode2/wode2'
    });
  },

  onNavItemTap(event) {
    const nav = event.currentTarget.dataset.nav;

    if (nav === '食谱广场') {
      this.navigateToSquare();
    } else if (nav === '美食圈') {
      this.navigateToFoodCircle();
    } else if (nav === '个人中心') {
      this.navigateToProfile();
    }
  }
});
