// pages/coupon/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 1,
    list: [
      {
        'img_url': '../../images/product_bg.jpg',
        'title': '猪猪侠草莓蛋糕',
        'price': '198',
        'creat_date':'2020-01-01',
        'totalPrice':189
      }, {
        'img_url': '../../images/product_bg.jpg',
        'title': '猪猪侠草莓蛋糕',
        'price': '198',
        'creat_date': '2020-01-01',
        'totalPrice': 189
      }, {
        'img_url': '../../images/product_bg.jpg',
        'title': '猪猪侠草莓蛋糕',
        'price': '198',
        'creat_date': '2020-01-01',
        'totalPrice': 189
      }, {
        'img_url': '../../images/product_bg.jpg',
        'title': '猪猪侠草莓蛋糕',
        'price': '198',
        'creat_date': '2020-01-01',
        'totalPrice': 189
      }, {
        'img_url': '../../images/product_bg.jpg',
        'title': '猪猪侠草莓蛋糕',
        'price': '198',
        'creat_date': '2020-01-01',
        'totalPrice': 189
      }
    ]
  },
  tabFun(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
    this.getList()
  },
  getList(){
    app.http('/v1/order/list', { state: this.data.tabIndex }).then(res => {
      this.setData({list:res.data})
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tabIndex: options.type||1
    })
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})