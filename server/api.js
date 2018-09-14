import {
  HTTP
} from './http'

class Api extends HTTP {
  constructor() {
    super()
  }
  /*根据分类ID获取文章列表
    @para:
      count:数量
      currentPage:页
      id:分类目录id
  */
  getNews(para, success) {
    let params = {
      url: 'api/get_category_posts/',
      success: success,
      data: {
        count: para.count,
        page: para.currentPage,
        id: para.id
      }
    }
    this.request(params)
  }
  //获取单个文章详情 @id：文章id
  getSingleNews(id, success) {
    let params = {
      url: 'api/get_post',
      success: success,
      fail: function (err) {
        console.log('error')
      },
      data: {
        post_id: id
      }
    }
    this.request(params)
  }
  //获取相册  @id:相册id
  getXcById(id, success) {
    let params = {
      url: 'api/get_post/',
      success: success,
      data: {
        post_id: id,
        post_type: 'foogallery'
      }

    }
    this.request(params)
  }
  //获取相册  @id:相册id
  commitUser(para) {
    let params = {
      url: 'http://a1.yearn.com/wp-content/themes/yearn/schoolsignup/addschoolsignup.php',
      success: success,
      data: para
    }
    this.request(params)
  }

}

export {
  Api
}