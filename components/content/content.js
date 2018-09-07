// components/content/content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    callphone:function() {
      wx.makePhoneCall({
        phoneNumber: '0371-86666161'
      })
    },
    openmap:function() {
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function(res) {
          console.log(res)
          var latitude = res.latitude
          var longitude = res.longitude
          wx.openLocation({
            latitude: 34.75589,
            longitude: 113.74808,
            scale: 28
          })
        }
      })
    }
  }
})
