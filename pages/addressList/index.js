// pages/addressList/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    id:'',
    state:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  defaultFun:function(data){
    app.http('v1/user/addDefaultCity', {
      id: data.currentTarget.dataset.item.id
    }, 'post')
      .then(res => {
        this.setData({
          id: data.currentTarget.dataset.item.id
        })
        // if (this.data.state == 1){
        //   wx.navigateBack({
        //     delta: 1
        //   })
        // }
      })
  },
  onLoad: function (options) {
    app.http('v1/user/getDefaultCity')
      .then(res => {
        this.setData({
          id: res.defaultCityId,
        })
      })
    this.setData({
      state: options ? options.type:null
    })
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
    app.http('v1/user/cityList').then(res => {
      var list = res.data;
      for(let i=0; i<list.length; i++){
        list[i].city = list[i].city.split(',');
      }
      console.log(list)
      this.setData({
        list: list
      })
      })
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