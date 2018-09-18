// components/introduce/introduce.js
import {
  parseHtml
} from "../../utils/index"
import {
  Api
} from "../../server/api";
const api = new Api();
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['title-class', 'content-class'],
  options: {
    //多节点
    multipleSlots: true
  },
  properties: {
    show: {
      type: Boolean,
      default: true
    },
    catId: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 10
    }
  },
  data: {
    list: [],
    currentIndex: -1
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      if (!this.data.catId) return;
      this.getData(this.data.catId, (res) => {
        this.setData({
          list: res.posts
        })
        let arr = []
        res.posts.forEach(el => {
          arr.push(el.content)
        })
        parseHtml(arr, 'listParse', this);
      })
    },
    moved: function () { },
    detached: function () { },
  },
  attached: function () {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleSlide(ev) {
      let index = ev.currentTarget.dataset.index
      if (index == this.data.currentIndex) {
        this.setData({
          currentIndex: -1
        })
        return;
      }
      this.setData({
        currentIndex: index
      })
    },
    getData(id, success) {
      let para = {
        id: id,
        count: this.data.count
      }
      api.getNews(para, (res) => {
        success(res)
      });
    }
  }
})