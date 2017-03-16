//app.js
App({
  onLaunch: function () {
    wx.setStorage({
      key:"key",
    data:"value"
    })
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var isFirst =  wx.getStorage({
      key: 'isFirst',
      success: function(res){
        wx.navigateTo({
          url: "pages/index/index",
          success: function(res){
            wx.getStorageSync('isFirst','false')
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
        // success
      },
      fail: function() {
        wx.navigateTo({
          url: "pages/input/input",
          success: function(res){
            wx.setStorage({
              key: "isFirst",
              data: "True",
              success: function(res){
                // success
              },
              fail: function() {
                // fail
              },
              complete: function() {
                // complete
              }
            })
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },
      complete: function() {
        // complete
      }
    })
  },
  getUserInfo:function(cb){
    console.log('getUserInfo');
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
    userInfo:null
  }
})