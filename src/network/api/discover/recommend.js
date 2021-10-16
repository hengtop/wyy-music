import reactRequest from '@/network';

//获取推荐页轮播图数据
export const getBannerList = () => {
  return reactRequest.request({
    method: 'GET',
    url: '/banner'
  });
};

//获取热门推荐
export const getHotRecommend = (limit) => {
  return reactRequest.request({
    method: 'GET',
    url: '/personalized',
    params: {
      limit
    }
  });
};

//获取新碟上架
export const getNewAlbum = (limit) => {
  return reactRequest.request({
    method: 'GET',
    url: '/top/album',
    params: {
      limit
    }
  });
};

//获取榜单
export const getRecommendRanking = (idx) => {
  return reactRequest.request({
    method: 'GET',
    url: '/top/list',
    params: {
      idx
    }
  });
};
