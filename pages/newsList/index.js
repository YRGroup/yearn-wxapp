// pages/primary/primary.js
const DEFAULT_TOP = 300;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 0,
    src: '',
    posTop: DEFAULT_TOP
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleScroll: function (ev) {
    console.log(ev.detail.detail)

    let top = DEFAULT_TOP-ev.detail.detail.scrollTop;
    if (top < 0) {
      top = 0;
    }
    if (top > DEFAULT_TOP) {
      top = DEFAULT_TOP;
    }
    this.setData({
      posTop: top
    })
  }
})