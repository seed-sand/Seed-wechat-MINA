Page({
  data:{
      ripple_style:'',
      ripple_style2:'',
      reveal:"Reveal",
      reveal_style:'',
      wtf:'wtf',
      oncetask:'false',
      repeattask:'false'
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.setNavigationBarTitle({
      title: "Task",
      success: function(res) {
        // success
      }
    })
    
  }, 
    onReady:function(){
      // 页面渲染完成
      var isonce = wx.getStorageSync('oncetask');
    var isrepeat = wx.getStorageSync('repeattask')
    this.setData({
      oncetask:isonce,
      repeattask:isrepeat
    })
    },
    onShow:function(){
      // 页面显示
      var isonce = wx.getStorageSync('oncetask');
    var isrepeat = wx.getStorageSync('repeattask')
    this.setData({
      oncetask:isonce,
      repeattask:isrepeat
    })
    },
    onHide:function(){
      // 页面隐藏
      var isonce = wx.getStorageSync('oncetask');
    var isrepeat = wx.getStorageSync('repeattask')
    this.setData({
      oncetask:isonce,
      repeattask:isrepeat
    })
    },
    onUnload:function(){
      // 页面关闭
      var isonce = wx.getStorageSync('oncetask');
    var isrepeat = wx.getStorageSync('repeattask')
    this.setData({
      oncetask:isonce,
      repeattask:isrepeat
    })
    },

  onClickPaper:function(e){
      var that = this
      var offLeft = e.currentTarget.offsetLeft
      var offTop = e.currentTarget.offsetTop
      var pageX = e.changedTouches[0].pageX
      var pageY = e.changedTouches[0].pageY
      console.log(pageX-offLeft-25)
      console.log(pageY-offTop-25)
      
      this.setData({
          ripple_style:'top:'+(pageY-offTop-25)+'px ; left:'+(pageX-offLeft-25)+'px ;-webkit-animation: ripple 0.4s linear; animation: ripple 0.4s linear;'
          
      })
      setTimeout(function(){
        that.setData({
          ripple_style:' -webkit-animation: ripple-reset 0s linear; animation: ripple-reset 0s linear;'
          
      })
      },300)
         

    //   do something

  },

  onShareAppMessage: function () {
    return {
      title: 'Task1',
      path: '/page/task/task'
    }
  }
  
})