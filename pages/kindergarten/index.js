// pages/kindergarten/index.js
import {
  formatNewsTitle
} from "../../utils/index"
import {
  Api
} from "../../server/api";
let api = new Api();

const app = getApp();
const img_base_url = app.globalData.img_base_url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_base_url: img_base_url,
    bannerList: [{
      url: img_base_url + 'prim_banner1.jpg'
    }, {
      url: img_base_url + 'prim_banner2.jpg'
    }, {
      url: img_base_url + 'prim_banner3.jpg'
    }],
    curseCurrentTop: 1,
    curseCurrentBottom: 1
  },
  handleChangeTop(ev) {
    if (ev.detail.detail.source != "touch") return;
    this.setData({
      curseCurrentBottom: ev.detail.detail.current
    })
  },
  handleChangeBottom(ev) {
    if (ev.detail.detail.source != "touch") return;
    this.setData({
      curseCurrentTop: ev.detail.detail.current
    })
  },
  getCourse() {
    let para = {
      count: 10,
      id: 4
    }
    api.getNews(para, (res) => {
      // let data = res.posts.map(el => {
      //   el.excerpt = this.formatNewsTitle(el.excerpt)
      //   return el;
      // })
      console.log(res)
      // this.setData({
      //   newsList: this.data.newsList.concat(data)
      // })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCourse();
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

  }
})