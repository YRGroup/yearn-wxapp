// components/content/content.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    phone: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      let that = this
      this.setData({
        codeImg: app.globalData.img_base_url + that.data.code
      })
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // codeImg: app.globalData.img_base_url + 'yearn_codeImg.jpg'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    callphone: function () {
      wx.makePhoneCall({
        phoneNumber: this.data.phone
      })
    },
    openmap: function () {
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          wx.openLocation({
            latitude: 34.75589,
            longitude: 113.74808,
            scale: 28
          })
        }
      })
    },
    previewImage: function (e) {
      let src = e.target.dataset.src
      let arr = []
      arr.push(src)
      wx.previewImage({
        current: src,
        urls: arr
      })
    }
  }
})