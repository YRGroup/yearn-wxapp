// components/introduce/introduce.js
import {
  formatNewsTitle
} from "../../utils/util"
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
    newsList: []
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.getNews()
    },
    moved: function () {},
    detached: function () {},
  },
  attached: function () {
   
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getNews: function () {
      let para = {
        count: 4,
        id: 2
      }
      console.log(1)
      api.getNews(para, (res) => {  
        console.log(2)  
        let data=res.posts.map(el=>{
          el.excerpt=this.formatNewsTitle(el.excerpt)
          return el;
        })
        console.log(data)
        this.setData({
          newsList: res.posts
        })
      });
    },
    formatNewsTitle:(str)=>{
      let reg=/^<.+>(.+)<.+>/;
      return str.match(reg)[1]||'';
    }
  }
})