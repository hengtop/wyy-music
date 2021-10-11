import reactRequest from '@/network';

//获取推荐页轮播图数据
export const getBannerList = () => {
  return reactRequest.request({
    method: 'GET',
    url: '/banner'
  });
};
