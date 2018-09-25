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
    //默认图片列表
    imgList: {
      type: Array,
      value: []
    },
    //相册id
    foid: {
      type: Number,
      value: 0
    },
    current: {
      type: Number,
      value: 1
    },
    mode: {
      type: String,
      value: 'aspectFill'
    },
    height: {
      type: Number,
      value: 300
    },
    //两侧余量
    margin: {
      type: Number,
      value: 150
    },
    //slide间隙
    slideSpace: {
      type: Number,
      value: 10
    },
    //是否显示指示点
    showDots: {
      type: Boolean,
      value: false
    },
    //是否展示大图预览
    preview: {
      type: Boolean,
      value: true
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    //遍历的对象
    imgUrls: [],
    currentIndex: 0
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      if (this.data.imgList.length && !this.data.foid) {
        this.setImgList(this.data.imgList);
      } else {
        this.getXc(this.data.foid);
      }
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
        // console.log(res)
        this.setImgList(res.post.attachments);
      })
    },
    previewImage: function (e) {
      if (!this.data.preview) return;
      let src = e.target.dataset.src
      let arr = []
      this.data.imgUrls.forEach(el => {
        arr.push(el.url)
      })
      wx.previewImage({
        current: src,
        urls: arr
      })
    },
    setImgList(list) {
      this.setData({
        imgUrls: list
      })
    },
    handleChange(ev) {
      this.setData({
        currentIndex: ev.detail.current
      })
      this.triggerEvent('handleChange', ev)
    }
  }
})