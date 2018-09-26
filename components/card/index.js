// components/content/content.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    thumbnail:{
      type:String,
      value:''
    },
    title:{
      type:String,
      value:'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitle'
    },
    desc:{
      type:String,
      value:'descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc'
    },
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      
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

  }
})