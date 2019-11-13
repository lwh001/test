import http from '@/utils/request.js';

const api = {
  //获取有属性商品加入购物车属性
  getFrameJoinCart(GId, isAllSaleScore) {
    return http.post(`/Goods/FrameJoinCart?GId=${GId}&isAllSaleScore=${isAllSaleScore}`);
  },
  //获取光度信息列表
  getOptometryBillBaiscDataLibrary() {
    return http.postByNoLoading(`/Account/GetOptometryBillBaiscDataLibrary`);
  },
  //购买无属性框架商品
  buyNoPropertyFrame(mapPrams) {
    return http.post(`/cart/BuyNoPropertyFrame?
goodsId=${mapPrams.get('goodsId')}
&IsConfirmedBuy=${mapPrams.get('IsConfirmedBuy')}
&ShopId=${mapPrams.get('ShopId')}
&Quantity=${mapPrams.get('Quantity')}
&GDPropertyGifts=${mapPrams.get('GDPropertyGifts')}
&SelectedSpecifications=${mapPrams.get('SelectedSpecifications')}
&NoPropertyGifts=${mapPrams.get('NoPropertyGifts')}
&MaxSellNumber=${mapPrams.get('MaxSellNumber')}
&GoodsName=${mapPrams.get('GoodsName')}
&SeriesId=${mapPrams.get('SeriesId')}
&MarketPrice=${mapPrams.get('MarketPrice')}
&SalePrice=${mapPrams.get('SalePrice')}
&SaleScore=${mapPrams.get('SaleScore')}
&IsScarcity=${mapPrams.get('IsScarcity')}
&IsSpecialOffer=${mapPrams.get('IsSpecialOffer')}
&SaleStockType=${mapPrams.get('SaleStockType')}
&MaxDeduction=${mapPrams.get('MaxDeduction')}
&IsFreeCarriage=${mapPrams.get('IsFreeCarriage')}`);
  },
  //购买框架和镜片（框架配镜）
  buyFrameAndGlass(mapParms) {
    return http.post(`/Cart/BuyFrameAndGlass?
goodsId=${mapParms.get('goodsId')}
&IsConfirmedBuy=${mapParms.get('IsConfirmedBuy')}
&ShopId=${mapParms.get('ShopId')}
&IsBuyByScore=${mapParms.get('IsBuyByScore')}
&LeftQuantity=${mapParms.get('LeftQuantity')}
&RightQuantity=${mapParms.get('RightQuantity')}
&GlassGroupId=${mapParms.get('GlassGroupId')}
&GlassGoodsId=${mapParms.get('GlassGoodsId')}
&LeftGD=${mapParms.get('LeftGD')}
&RightGD=${mapParms.get('RightGD')}
&LeftSG=${mapParms.get('LeftSG')}
&RightSG=${mapParms.get('RightSG')}
&LeftZW=${mapParms.get('LeftZW')}
&RightZW=${mapParms.get('RightZW')}
&TongJu=${mapParms.get('TongJu')}`);
  },
  //加入购物车(非框架购买属性选择)
  postGoodsJoinCartNormal(GId, isAllSaleScore, GrouponActivityId, isPresale, IsAllStock) {
    return http.post(`/Goods/JoinCart?GId=${GId}&isAllSaleScore=${isAllSaleScore}&GrouponActivityId=${GrouponActivityId}&isPresale=${isPresale}&IsAllStock=${IsAllStock}`);
  },
  //无属性的商品
  buyNoProperty(mapPrams) {
    let selfUrl = `&Quantity=${mapPrams.get('Quantity')}&GDPropertyGifts=&SelectedSpecifications=&RealGoodsId=${mapPrams.get('RealGoodsId')}&NoPropertyGifts=`;
    return this.getMapParams('/cart/BuyNoProperty', mapPrams, selfUrl);
  },
  //购买双属性商品
  buyDoubleProperty(mapParms) {
    let selfUrl = '';
    if (mapParms.get('LeftQuantity') > 0) {
      selfUrl += `&LeftGD=${mapParms.get('LeftGD')}&LeftQuantity=${mapParms.get('LeftQuantity')}&LEFTGDNAME=${mapParms.get('LEFTGDNAME')}&LeftRealGoodsId=${mapParms.get('LeftRealGoodsId')}`;
    } else {
      selfUrl += `&LeftQuantity=0`;
    }

    if (mapParms.get('RightQuantity') > 0) {
      selfUrl += `&RightGD=${mapParms.get('RightGD')}&RightQuantity=${mapParms.get('RightQuantity')}&RIGHTGDNAME=${mapParms.get('RIGHTGDNAME')}&RightRealGoodsId=${mapParms.get('RightRealGoodsId')}`;
    } else {
      selfUrl += `&RightQuantity=0`;
    }
    return this.getMapParams('/cart/BuyDoubleProperty', mapParms, selfUrl);
  },
  //购买散光定制的双属性商品
  buyDoubleCustomizedProperty(mapParms) {
    let selfUrl = '';
    if (mapParms.get('LeftQuantity') > 0) {
      selfUrl += `&LeftGD=${mapParms.get('LeftGD')}&LeftSG=${mapParms.get('LeftSG')}&LeftZW=${mapParms.get('LeftZW')}&LeftRealGoodsId=${mapParms.get('LeftRealGoodsId')}`;
    } else {
      selfUrl += `&LeftQuantity=0`;
    }

    if (mapParms.get('RightQuantity') > 0) {
      selfUrl += `&RightGD=${mapParms.get('RightGD')}&RightSG=${mapParms.get('RightSG')}&RightZW=${mapParms.get('RightZW')}&RightRealGoodsId=${mapParms.get('RightRealGoodsId')}`;
    } else {
      selfUrl += `&RightQuantity=0`;
    }
    return this.getMapParams('/cart/BuyDoubleCustomizedProperty', mapParms, selfUrl);
  },
  //购买单属性商品
  buySingleProperty(mapParms) {
    let selfUrl = `&GD=${mapParms.get('GD')}&Quantity=${mapParms.get('Quantity')}&GDPropertyGifts=&SelectedSpecifications=&NoPropertyGifts=&RealGoodsId=${mapParms.get('RealGoodsId')}`;
    return this.getMapParams('/cart/BuySingleProperty', mapParms);
  },
  getMapParams(url, mapPrams, otherUrl) {
    return http.post(url + `?goodsId=${mapPrams.get('goodsId')}
&IsConfirmedBuy=${mapPrams.get('IsConfirmedBuy')}
&ShopId=${mapPrams.get('ShopId')}
&MaxSellNumber=${mapPrams.get('MaxSellNumber')}
&GoodsName=${mapPrams.get('GoodsName')}
&SeriesId=${mapPrams.get('SeriesId')}
&MarketPrice=${mapPrams.get('MarketPrice')}
&SalePrice=${mapPrams.get('SalePrice')}
&SaleScore=${mapPrams.get('SaleScore')}
&IsScarcity=${mapPrams.get('IsScarcity')}
&IsSpecialOffer=${mapPrams.get('IsSpecialOffer')}
&SaleStockType=${mapPrams.get('SaleStockType')}
&MaxDeduction=${mapPrams.get('MaxDeduction')}
&IsFreeCarriage=${mapPrams.get('IsFreeCarriage')}
&LeftRealGoodsId=${mapPrams.get('LeftRealGoodsId')}
&RightRealGoodsId=${mapPrams.get('RightRealGoodsId')}
&RealGoodsId=${mapPrams.get('RealGoodsId')}
    ` + otherUrl);
  },

};

export default api;
