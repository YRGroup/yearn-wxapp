// components/introduce/introduce.js

Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    show: {
      type: Boolean,
      default: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

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
    handleSlide(){
      console.log(11)
      this.setData({
        show:!this.data.show
      })
    }
  }
})