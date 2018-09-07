// components/introduce/introduce.js

import {
  Api
} from "../../server/api";
let api = new Api();

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
    newsList:[]
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      
    },
    moved: function () { },
    detached: function () { },
  },
  attached: function () { 
    
    this.getNews()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getNews:function(){
      let para = {
        count: 4,
        id: 2
      }
      api.getNews(para, (res) => {
        console.log(res)
        this.setData({
          newsList:res.posts
        })
      });
    }
  }
})