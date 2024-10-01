const swiperList = [
  "/assets/images/swape2.jpg",
  "/assets/images/swape1.jpg",
];
Page({
  data: {
    list: [],
    isLoadShow: true,
    current: 0, //当前轮播图
    autoplay: false, //是否自动播放
    duration: 500, //动画时长
    interval: 3000, //轮播间隔
    swiperList, //轮播图列表
    dishList: [], //菜品列表
    groupId: 0, //当前左边菜单组id
    currentRightGroup: "dishgroup_0", //当前右边菜品组
    fuckFixed: true, //修复Scroll-view为webviewi渲染模式时position:sticky;的bug.
    isBannerShow: true,
  },
  navtag: true, //是否是手动滚动列表
  groupIdList: [], //左边菜单组id列表
  baseTop: 0, //滚动区距离顶部距离
  scrollTimeout: 0, //滚动区定时器
  titleGroupCompareObjList: [], //右边菜单组title的比较对象列表
  onLoad() {},
  onShow() {
    this.setData({
      isLoadShow: true,
      isBannerShow: true,
    },()=>{
      Promise.all([
        new Promise((resolve, reject) => {
          this.getDishList();
          this.getGroupIdList();
          resolve();
        }),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            this.setData({
              isLoadShow: false,
            });
            resolve();
          }, 1000);
        }),
      ]).then(() => {
        this.initNavigator();
      });
    });
  },
  //获取菜品列表
  getDishList() {
    this.setData({
      dishList: [
        {
          groupName: "新品推荐",
          groupId: 0,
          groupPicUrl:
            "/assets/images/new.gif",
          list: [
            {
              name: "招牌牛腩饭套餐",
              id: 0,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail1.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
            },
            {
              name: "招牌牛腩饭套餐",
              subTitle: "怱香扑鼻，皮滑肉嫩",
              id: 1,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 2,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail3.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 3,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail4.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 4,
              dishType: "单品",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail5.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 5,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 6,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
          ],
        },
        {
          groupName: "人气热卖",
          groupId: 1,
          groupPicUrl:
            "/assets/images/hot.png",
          list: [
            {
              name: "招牌牛腩饭套餐",
              id: 7,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 8,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 9,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 10,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 11,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 12,
              dishType: "套餐",
              normalPrice: 12, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 13,
              dishType: "套餐",
              normalPrice: 13, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
          ],
        },
        {
          groupName: "爽口凉菜",
          groupId: 2,
          groupPicUrl:
            "/assets/images/dish01.gif",
          list: [
            {
              name: "招牌牛腩饭套餐",
              id: 14,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 15,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 16,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 17,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 18,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 19,
              dishType: "套餐",
              normalPrice: 12, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 20,
              dishType: "套餐",
              normalPrice: 13, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
          ],
        },
        {
          groupName: "肉串/小吃",
          groupId: 3,
          groupPicUrl:
            "/assets/images/dish03.gif",
          list: [
            {
              name: "招牌牛腩饭套餐",
              id: 21,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 22,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 23,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 24,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 124,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 25,
              dishType: "套餐",
              normalPrice: 12, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 26,
              dishType: "套餐",
              normalPrice: 13, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
          ],
        },
        {
          groupName: "热煲好饭",
          groupId: 4,
          groupPicUrl:
            "/assets/images/dish02.gif",
          list: [
            {
              name: "招牌牛腩饭套餐",
              id: 27,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 28,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 29,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 30,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 31,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 32,
              dishType: "套餐",
              normalPrice: 12, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 33,
              dishType: "套餐",
              normalPrice: 13, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
          ],
        },
        {
          groupName: "冷热饮品",
          groupId: 5,
          groupPicUrl:
            "/assets/images/dish3.gif",
          list: [
            {
              name: "招牌牛腩饭套餐",
              id: 34,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 35,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 36,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 37,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 38,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 39,
              dishType: "套餐",
              normalPrice: 12, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 40,
              dishType: "套餐",
              normalPrice: 13, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
          ],
        },
        {
          groupName: "肉串/小吃1",
          groupId: 6,
          groupPicUrl:
            "/assets/images/dish03.gif",
          list: [
            {
              name: "招牌牛腩饭套餐",
              id: 41,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 42,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 43,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 44,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 45,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 46,
              dishType: "套餐",
              normalPrice: 12, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 47,
              dishType: "套餐",
              normalPrice: 13, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
          ],
        },
        {
          groupName: "肉串/小吃2",
          groupId: 7,
          groupPicUrl:
            "/assets/images/dish03.gif",
          list: [
            {
              name: "招牌牛腩饭套餐",
              id: 48,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 49,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 50,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 51,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 52,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 53,
              dishType: "套餐",
              normalPrice: 12, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 54,
              dishType: "套餐",
              normalPrice: 13, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
          ],
        },
        {
          groupName: "肉串/小吃3",
          groupId: 8,
          groupPicUrl:
            "/assets/images/dish03.gif",
          list: [
            {
              name: "招牌牛腩饭套餐",
              id: 55,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 56,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 57,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 58,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 59,
              dishType: "套餐",
              normalPrice: 10, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 60,
              dishType: "套餐",
              normalPrice: 12, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
            {
              name: "招牌牛腩饭套餐",
              id: 61,
              dishType: "套餐",
              normalPrice: 13, //常规价格
              vipPrice: 8, //会员价格
              coverImgUrl:
                "/assets/images/dishdetail2.jpg", //封面图片
              isRecommend: true, //是否推荐
              isVip: true, //是否会员
              isNew: true, //是否新品
              isHot: true, //是否热销
              isSale: true, //是否促销
              isDiscount: true, //是否打折
              isFree: true, //是否免费
            },
          ],
        },
      ],
    });
  },

  //获取左边菜单组id列表
  getGroupIdList() {
    this.groupIdList = [];
    this.data.dishList.forEach((item) => {
      this.groupIdList.push(item.groupId);
    });
    console.log("获取所有菜品分组id列表", this.groupIdList);
  },
  //响应左边菜单点击事件
  onGroupItemTap(e) {
    this.navigateRightGroup(e.currentTarget.dataset.groupid);
  },
  //跳转到右边菜品列表
  navigateRightGroup(groupId) {
    this.navtag = false;
    this.setData(
      {
        fuckFixed: false,
      },
      () => {
        this.setData({
          currentRightGroup: `dishgroup_${groupId}`,
          groupId: groupId,
          fuckFixed: true,
        },()=>{
          this.hideBanner();
        });
      }
    );
  },
  initNavigator() {
    if (this.groupIdList.length > 0) {
      this.navtag = false;
      this.setData({
        fuckFixed:false,
      },()=>{
        this.setData({
          currentRightGroup: `dishgroup_${this.groupIdList[0]}`,
          groupId: this.groupIdList[0],
          fuckFixed:true, //固定导航栏
        },()=>{
          this.initBaseTopAndGroupIdList();
        });
      });
    }
  },

  //点击了banner
  onBannerTap(e) {
    console.log(e);
  },
  //隐藏banner,并重新初始化baseTop和groupIdList
  hideBanner() {
    if (this.data.isBannerShow) {
      this.setData(
        {
          isBannerShow: false,
        },
        () => {
          this.initBaseTopAndGroupIdList();
        }
      );
    }
  },
  //初始化baseTop和groupIdList
  initBaseTopAndGroupIdList() {
    const query = this.createSelectorQuery();
    query.select("#scrollview").boundingClientRect((res) => {
      this.baseTop = res.top;
      console.log("得到baseTop:", this.baseTop);
    });
    query.exec();  
    this.getGroupTitleIdList();
  },
  //触描开始响应事件
  onTouchStart(e) {
    this.scrollTimeout = 0;
    this.hideBanner();
  },
  //响应右边scroll-view的滚动事件
  onScroll(e) {
    if (!this.navtag) {
      this.navtag = true;
      return;
    }
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = 0;
    }
    console.log("onScroll",e);
    this.scrollTimeout = setTimeout(() => {
      this.LeftNavigate(e);
      this.scrollTimeout = 0;
      console.log("滚动事件执行一次",e);
    }, 500);
  },
  //左导航
  LeftNavigate(e) {
    console.log(e);
    if (this.titleGroupCompareObjList.length > 0) {
      for (let i = 0; i < this.titleGroupCompareObjList.length; i++) {
        if (
          e.detail.scrollTop >= this.titleGroupCompareObjList[i].start &&
          e.detail.scrollTop < this.titleGroupCompareObjList[i].end
        ) {
          this.setData({
            groupId: this.groupIdList[i],
          });
          break;
        }
      }
    }
  },
  //获取右边菜单组title的id列表
  getGroupTitleIdList() {
    let groupTitleIdList = [];
    this.titleGroupCompareObjList = [];
    const query = this.createSelectorQuery();
    query.selectAll(".search-title").boundingClientRect((res) => {
      if (res.length === 0) {
        return;
      }
      groupTitleIdList = res.map((item) => item.top);
      console.log("重新获取到的groupTitleIdList:", groupTitleIdList);
      this.getCompareObjList(groupTitleIdList);
    });
    query.exec();
  },
  //获取右边菜单组title的比较对象列表
  getCompareObjList(groupTitleIdList) {
    this.titleGroupCompareObjList = [];
    let baseTop = groupTitleIdList[0];
    for (let i = 0; i < groupTitleIdList.length; i++) {
      let nextIndex = i + 1;
      let endDistance = 10000000000000000000000000; //右边滚动内容最大不超过的距离
      if (nextIndex < groupTitleIdList.length) {
        endDistance = groupTitleIdList[nextIndex] - baseTop;
      }
      this.titleGroupCompareObjList.push({
        start: groupTitleIdList[i] - baseTop,
        end: endDistance,
      });
    }
    console.log(
      "获取到的titleGroupCompareObjList:",
      this.titleGroupCompareObjList
    );
  },
});
