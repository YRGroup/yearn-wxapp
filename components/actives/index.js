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
  properties: {
    foid: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: []
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.getXc(this.data.foid)
    },
    moved: function () {},
    detached: function () {},
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getXc(id) {
      api.getXcById(id, (res) => {
        console.log(res)
        this.setData({
          imgUrls: res.post.attachments
        })
      })
    }
  }
})