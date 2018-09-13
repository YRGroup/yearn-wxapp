// pages/primary/primary.js
var WxParse = require('../../components/wxParse/wxParse.js');

import {
  formatNewsTitle
} from "../../utils/index"
import {
  Api
} from "../../server/api";
let api = new Api();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1:[],
    list2:[]
  },
  getData(id,success){
    let para = {
      id: id,
      count:5
    }
    api.getNews(para, (res) => {
      success(res)
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(8,(res)=>{
      console.log(res)
      this.setData({
        list1:res.posts
      })
    })
    this.getData(9,(res)=>{
      this.setData({
        list2:res.posts
      })
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

  }
})