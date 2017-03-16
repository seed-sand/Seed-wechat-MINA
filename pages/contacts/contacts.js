// let util = require('/utils/util')
// let ajax = require('/network/ajax')

// Page({
//   data:{
//     contacts: [] 
//   },
//   onLoad() {
//     this.getContacts()
//   },
//   getContacts() {
//     wx.showToast({
//       title: 'loading...',
//       icon: 'loading'
//     })
//     ajax({
//         url: 'contacts.json',
//         success: res => {
//           this.setData({
//             contacts: this.formatContacts(res.data)
//           })
//         },
//         complete: _ => {
//           wx.hideToast()
//         }
//     })
//   },
//   formatContacts(items) {
//     items.forEach(item => {
//       item.avatar = util.getAvatarUrl(item.avatar)
//       return item
//     })
//     return items
//   },
//   navToMessage(event) {
//     let name = event.currentTarget.dataset.name
//     wx.navigateTo({
//       url: `../message/message?name=${name}`
//     })
//   }
// })

Page({
  data:{
    "contacts":[
      {
        "header":"A",
        "nickname":"Alan",
        "avatar":"/images/2.png",
        "location":"USA"
      },
      {
        "header":"H",
        "nickname":"Hayashi",
        "avatar":"/images/3.png",
        "location":"JAPAN"
      },
      {
        "header":"L",
        "nickname":"Lin",
        "avatar":"/images/1.png",
        "location":"China"
      }
    ]    
  }
})
