import {
  HTTP
} from './http'

class Api extends HTTP {
  constructor() {
    super()
  }
  //根据分类ID获取文章列表
  getNews(para,success) {
    let params = {
      url: 'api/get_category_posts',
      success: success,
      data:{
        count:para.count,
        id:para.id
      }

    }
    this.request(params)
  }
  //获取单个文章详情
  getSingleNews(id,success) {
    let params = {
      url: 'api/get_post',
      success: success,
      fail:function(err){
        console.log('error')
      },
      data:{
        post_id:id
      }
    }
    this.request(params)
  }
  getXcById(id,success) {
    let params = {
      url: 'api/get_post',
      success: success,
      data:{
        post_id:id,
        post_type:'foogallery',
        id:id
      }

    }
    this.request(params)
  }

}

export {
  Api
}