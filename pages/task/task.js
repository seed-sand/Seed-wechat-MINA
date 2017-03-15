Page({
  data:{
      ripple_style:'',
      ripple_style2:'',
      reveal:"Reveal",
      reveal_style:''
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
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
          wx.navigateTo({
      url: '../input/input'
    })

    //   do something

  }

})