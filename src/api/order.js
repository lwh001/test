import http from '@/utils/request.js';

const api = {
  //根据订单状态获取订单列表
  getOrderList({ queryState, isFreshCache = false, page = 1, size = 10 } = {}) {
    let url = `/order/GetOrderList?QueryState=${queryState}&Size=${size}&Page=${page}&isFreshCache=${isFreshCache}`;
    if (page > 1) {
      return http.post(url);
    }
    return http.postByNoLoading(url);
  },
  //根据关键字查询订单/获取全部订单
  searchOrderList({ queryString = '', page = 1, size = 10 } = {}) {
    let url = `/Order/QueryOrderList?Size=${size}&Page=${page}&queryString=${queryString}`;
    if (page > 1) {
      return http.post(url);
    }
    return http.postByNoLoading(url);
  },
  //查询历史订单
  queryOrderHistory({  page = 1, size = 10 } = {}) {
    let url = `/Order/QueryOrderHistoryByPage?Size=${size}&Page=${page}`;
    
    return http.post(url);
    
  },
  //查询订单详情
  getOrderDetail(orderId,dataSource) {
    return http.post(`/order/GetOrderDetail?orderId=${orderId}&dataSource=${dataSource}`);
  },
  //取消订单
  cancelOrder(orderId) {
    return http.post(`/order/CancelOrder?orderId=${orderId}`);
  },
  //自营物流信息
  logisticsQuery(orderId) {
    return http.post(`/order/OrderQuery?orderId=${orderId}`);
  },
  //海外物流信息
  logisticsOverseaQuery(orderId) {
    return http.post(`/order/QueryOrderLogisticsForOverseas?orderId=${orderId}`);
  },
  //获取待评价商品列表
  pendingComments(page, pageSize = 10) {
    return http.post(
      `/comment/PendingComments?pageIndex=${page}&pageSize=${pageSize}`
    );
  },
  //添加商品评论
  addGoodsComment(OrderId, GoodsId, GoodsScore, Remark,ImageUrl,Srate,Erate,ThemeTagList) {
    return http.post(
      `/comment/AddGoodsComment`,
      {
        OrderId:OrderId,
        GoodsId:GoodsId,
        GoodsScore:GoodsScore,
        Remark:Remark,
        ImageUrl:JSON.stringify(ImageUrl),
        Srate:Srate,
        Erate:Erate,
        ThemeTagList:JSON.stringify(ThemeTagList)
      },
      {
        'content-type':'application/x-www-form-urlencoded'
      }
    );
  },
  //获取单条评论
  getGoodsComment(commentId){
    return http.post(
      `/comment/GetGoodsComment?commentId=${commentId}`
    )
  },
  //获取话题标签
  getGoodsTag(){
    return http.post(
      `/KedeCommunity/GetRecommendTagListByPage?pageIndex=1&pageSize=10`
    )
  },
  //搜索话题标签
  searchGoodsTag(keyword){
    return http.post(
      `/KedeCommunity/GetThemeTagListByPage?pageIndex=1&pageSize=10&keyword=${decodeURIComponent(keyword)}`
    )
  },
  //新增话题标签
  insertGoodsTag(value){
    return http.post(
      `/KedeCommunity/InsertThemeTag?value=${decodeURIComponent(value)}`
    )
  },
  //再来一单
  buyAginOrder(OrderId){
    return http.post(
      `/Cart/BuyAgain?orderId=${OrderId}`
    )
  },
};

export default api;
