// components/design/design.js
let text = `圆融建筑结构特有的空间属性，在满足安全和功能的前提下，增强学生的体验和互动，启发学生主动思考、学习和探索。`
const app = getApp();
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
    introduceBg: app.globalData.img_base_url + 'primary_bg_4.png',
    round: app.globalData.img_base_url+'round.png',
    text: text
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})