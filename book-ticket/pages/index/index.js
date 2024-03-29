// pages/index/index.js
var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    dates: '出发日期',
    dep:null,
    arr:null,
    arrSwiper: [
      {
        url: "/pages/index/index",
        src: "/images/index3.jpg"
      },
      {
        url: "/pages/books/books",
        src: "/images/index2.jpg"
      },
      {
        url: "/pages/login/login",
        src: "/images/index1.jpg"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  
  },
 
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    //console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  //获取用户输入的用户名
  depInput: function (e) {
    //console.log(e);
    this.setData({
      dep: e.detail.value,
    })
  },
  arrInput: function (e) {
    this.setData({
      arr: e.detail.value,
    })
  },
  change:function(){
    var dep = this.data.arr;
    var arr = this.data.dep;
    this.setData({
      dep: dep,
      arr:arr,
    })
  },
  search:function(e){
    //先到数据库里面查询结果，然后跳转到result页面
    wx.request({
      success:function(res){
      //console.log(res.data[1]);
      wx.navigateTo({
        url: '/pages/result/result',
      })
      },
      fail:function(res){

        wx.navigateTo({
          url: '/pages/result/result',
        })
      }
    })
  },
})