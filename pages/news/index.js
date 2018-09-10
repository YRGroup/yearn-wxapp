// pages/primary/primary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 0,
    src: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!options.id) {
      wx.navigateBack()
      return;
    }
    let src = `http://a1.yearn.com/allnews/news/${options.id}.html?weapp=1`
    this.setData({
      src: src
    })
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
    if (ev.detail.source == 'touch') {
      this.setData({
        currentPage: ev.detail.current
      })
    }
  },
  handle(str) {
    return str + '11';
  }
})