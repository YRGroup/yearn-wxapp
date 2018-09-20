// components/introduce/introduce.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 4
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    videoSrc: "https://yr-zhxy.oss-cn-beijing.aliyuncs.com/YRVideo/yearn/becomingwhoyouare.mp4",
    cover:app.globalData.img_base_url+'cover.png'
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},
    moved: function () {},
    detached: function () {},
  },
  attached: function () {

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})