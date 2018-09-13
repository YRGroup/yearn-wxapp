// components/introduce/introduce.js
import {
  formatNewsTitle
} from "../../utils/index"
import {
  Api
} from "../../server/api";
let api = new Api();

Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    count: {
      type: Number,
      value: 10
    },
    listPage: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    newsList: [],
    currentPage: 1,
    id: 2, //易尔动态的分类目录ID
    loadingMore: false,
    noMore: false
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
    //获取新闻
    getNews(more) {
      if (this.data.noMore) return;
      //显示加载更多ing
      if (more) {
        this.setData({
          loadingMore: true
        })
      }
    
      api.getNews(para, (res) => {
        let data = res.posts.map(el => {
          el.excerpt = this.formatNewsTitle(el.excerpt)
          return el;
        })
        //显示没有更多text
        if (!res.posts.length) {
          this.setData({
            noMore: true
          })
        }
        //隐藏加载更多ing
        if (more) {
          this.setData({
            loadingMore: false
          })
        }
        this.setData({
          newsList: this.data.newsList.concat(data)
        })
      });
    },
    formatNewsTitle(str){
      let reg = /^<.+>(.+)<.+>/;
      return str.match(reg)[1] || '';
    },
    handlenews(ev) {
      let id = ev.currentTarget.dataset.id;
      wx.navigateTo({
        url: `../news/index?id=${id}`
      })
    },
    //下拉加载
    handleScrollBottom() {
      this.setData({
        currentPage: ++this.data.currentPage
      })
      this.getNews(true)
    },
    //scroll
    handleScroll(ev){
      this.setData({
        scrollTop:0
      })
      this.triggerEvent('scroll', ev)
    }
  }
})