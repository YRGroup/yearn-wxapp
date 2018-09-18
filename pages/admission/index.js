// pages/primary/primary.js
import Notify from '../../dist/notify/notify';
import Dialog from '../../dist/dialog/dialog';
var app = getApp();
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
    list1: [],
    list2: [],
    img_base_url: app.globalData.img_base_url,
    name: '',
    phone: '',
    student_age: '',
    schools:['易尔幼儿园','易儿实验学校'],
    school_name:'易尔幼儿园',
    reg_phone:/^1[3,4,5,7,8][0-9]{9}$/
  },
  commit() {
    if (!this.data.name) {
      this.msg('姓名不能为空');
      return
    }
    if (!this.data.phone) {
      this.msg('手机号不能为空');
      return
    }
    let reg_phone=/^1[3,4,5,7,8][0-9]{9}$/;
    if(!reg_phone.test(this.data.phone)){
      this.msg('手机号格式不正确');
      return
    }
    if (!this.data.student_age) {
      this.msg('孩子年龄不能为空');
      return
    }
    let para = {
      name: this.data.name,
      phone: this.data.phone,
      student_age: this.data.student_age,
      school: this.data.school_name
    }
    api.commitUser(para,(res)=>{
      if(res){
        Dialog.alert({
          message: '提交成功，工作人员会在两个工作日内与您联系；感谢您的关注。'
        })
      }
    })
  },
  msg(msg) {
    Notify({
      text: msg,
      duration: 1000,
      selector: '#custom-selector',
      backgroundColor: 'red'
    });
  },
  onChange(e){
    let name=e.target.dataset.name;
    this.setData({
      [name]: e.detail
    });
  },
  bindPickerChange: function(e) {
    this.setData({
      school_name: this.data.schools[e.detail.value]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getData(9,(res)=>{
    //   let arr=[]
    //   res.posts.forEach(el=>{
    //     arr.push(el.content)
    //   })
    //   this.setData({
    //     list2:arr
    //   })
    // })
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