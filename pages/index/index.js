//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShow: true,        // 默认不显示插件
    am_start: '08:00',
    am_end: '11:00',
    pm_start: '13:00',
    pm_end: '17:00',
    nm_start: '18:30',
    nm_end: '21:30',
    themeColor: '#ffd00a',
    am_title: '早场',
    pm_title: '午场',
    nm_title: '夜场',
    apn_title: '',
    apn_disabled_list: ["2019-08-15 08:00","2019-08-19 18:30"],
    apn_selecttitle:'预定',
    calendarType: 'yyapn',

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 点击显示插件
  btnClick: function () {
    this.setData({
      isShow: true,
    })
  },
  _yybindchange: function (e) {
    var data = e.detail
    console.log(data)
  },

  _yybindhide: function () {
    console.log('隐藏')
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
