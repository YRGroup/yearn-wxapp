import { Api } from "../../server/api";
let api = new Api();
const app = getApp()
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
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.getData(this.data.foid)
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    couseList: [],
    img_base_url:app.globalData.img_base_url
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData(id) {
      api.getXcById(id, (res) => {
        
        this.setData({
          couseList: res.post.attachments
        })
      })
    },
  }
})