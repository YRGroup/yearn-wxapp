// components/introduce/introduce.js

let text = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;易尔实验园区是郑州育人教育集团在K12（十五年一贯制）教育领域，深耕沉淀十余载，优化办学理念，深化办学改革，创新办学模式，科学办学管理，结合国内外优质教育资源，不忘初心，回归教育本质，放眼世界，立足中原，回馈河南教育的一次大胆尝试。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;园区规划设立易尔幼儿园、易尔实验学校、易尔少年游泳馆、易尔K12课程实验基地等多个教育项目。秉承多年沉淀、一年筹备、三年研发、五年成型的时间框架，遵循K12教育发展规律，契合当代多元教育诉求，参照国际一流园区硬件标准，整合国内外名校、名师团队，引进现代化园区治理体系，着力打造中原地区标杆级K12教育园区，以回馈河南，振兴中华为航标，再次扬帆，驶向未来。`;
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
    introduceBg: app.globalData.img_base_url + 'introduceBg.jpg',
    text: text
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})