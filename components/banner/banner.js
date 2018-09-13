// components/banner/banner.js
const app = getApp()
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
    bannerBg: app.globalData.img_base_url+'index_banner.jpg'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toAdmission(){
      wx.navigateTo({
        url: '../../pages/admission/index'
      })
    }
  }
})
