Page({
  data: {
    text:"这是一条跑马灯，会滚来滚去的，像这样，滚来滚去,这是一条跑马灯，会滚来滚去的，像这样，滚来滚去",
    marqueePace:1,//滚动速度
    marqueeDistance:0,//初始滚动距离
    marqueeDistance2:0,
    marquee2copyStatus:false,
    marquee2Margin:60,
    size:14,
    orientation:'left',//滚动方向
    interval:20//时间间隔
  },
  onShow:function(){
    //页面显示
    console.log("显示");
    var _this=this;
    var length=_this.data.text.length*_this.data.size;//文字长度
    var windowWidth=wx.getSystemInfoSync().windowWidth;//屏幕宽度
    _this.setData({
      length:length,
      windowWidth:windowWidth,
      marquee2Margin:length<windowWidth?windowWidth-length:_this.data.marquee2Marign//当文字长度小于屏幕长度是，需要增加补白
    });
    _this.run1();//水平一行字滚动完了再按原来的方向滚动
    _this.run2();//第一个字消失后立即从右边出现
  },
  run1:function(){
    var _this=this;
    var interval=setInterval(function(){
      if(-_this.data.marqueeDistance<_this.data.length){
        _this.setData({
          marqueeDistance:_this.data.marqueeDistance-_this.data.marqueePace,
        });
      }else{
        clearInterval(interval);
        _this.setData({
          marqueeDistance:_this.data.windowWidth
        });
        _this.run1();
      }
    },_this.data.interval);
  },
  run2:function(){
    var _this=this;
    var interval=setInterval(function(){
      if(-_this.data.marqueeDistance2<_this.data.length){
        //如果文字滚动到出现marquee2Margin=30px的白边，就接着显示
        _this.setData({
          marqueeDistance2:_this.data.marqueeDistance2-_this.data.marqueePace,
          marquee2copyStatus:_this.data.length+_this.data.marqueeDistancne2<=_this.data.windowWidth+_this.data.marquee2Margin,
        });
      }else{
        if(-_this.data.marqueeDistance2>=_this,data.marquee2Margin){
          //当第二条文字滚动到最左边的时候
          _this.setData({
            marqueeDistance2:_this.data.marquee2Margin//直接重重新滚动
          });
          clearInterval(interval);
          _this.run2();
        }else{
          clearInterval(interval);
          _this.setData({
            marqueeDistance2:-_this.data.windowWidth
          });
          _this.run2();
        }
      }
    },_this.data.interval);
  }
})