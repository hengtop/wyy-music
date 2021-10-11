import * as actionTypes from './constant';
import { getBannerList } from '@/network/api/discover/recommend';

export const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.data.banners
});

//执行请求函数获取banner
export const getTopBannerAction = () => {
  return async (dispatch) => {
    const res = await getBannerList();
    dispatch(changeTopBannerAction(res));
  };
};
