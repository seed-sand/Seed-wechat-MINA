Page({
  data: {
    focus: false,
    title: '',
    description:'',
    index: 0,
    begindate: '2017-03-16',
    enddate: '2017-03-17'
  },
  bindTitle: function(e){
    this.setData({
      title: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindTextAreaBlur: function (e) {
    this.setData({
      description: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },
  bindBeginDateChange: function(e) {
    this.setData({
      begindate: e.detail.value
    })
  },
  bindEndDateChange: function(e) {
    this.setData({
      enddate: e.detail.value
    })
  },
  toOnce: function(event){
     wx.navigateTo({
      url: '../once/once'
    })
    wx.setStorage({
      key: 'onceTask',
      data: this.data,
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
  toRepeat: function(event){
    wx.setStorage({
      key: 'repeatTask',
      data: this.data,
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
  }


})
