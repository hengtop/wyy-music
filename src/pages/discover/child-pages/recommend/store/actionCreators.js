import * as actionTypes from './constant';
import {
  getBannerList,
  getHotRecommend,
  getNewAlbum,
  getRecommendRanking
} from '@/network/api/discover/recommend';

export const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
});

export const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
});

export const changeNewSongAction = (res) => ({
  type: actionTypes.CHANGE_NEW_SONGS,
  newSongs: res.playlist
});
export const changeUpSongAction = (res) => ({
  type: actionTypes.CHANGE_UP_SONGS,
  upSongs: res.playlist
});
export const changeOriginalSongAction = (res) => ({
  type: actionTypes.CHANGE_ORIGINAL_SONGS,
  originalSongs: res.playlist
});

//执行请求函数获取banner
export const getTopBannerAction = () => {
  return async (dispatch) => {
    const res = await getBannerList();
    dispatch(changeTopBannerAction(res));
  };
};

//获取推荐歌单
export const getHotRecommendAction = (limit) => {
  return async (dispatch) => {
    const res = await getHotRecommend(limit);
    dispatch(changeHotRecommendAction(res));
  };
};

//获取新碟上架
export const getNewAlbumAction = (limit) => {
  return async (dispatch) => {
    const res = await getNewAlbum(limit);
    dispatch(changeNewAlbumAction(res));
  };
};

//获取榜单
export const getRecommendRankingAction = (idx) => {
  return async (dispatch) => {
    const res = await getRecommendRanking(idx);
    switch (idx) {
      case 0:
        dispatch(changeNewSongAction(res));
        break;
      case 2:
        dispatch(changeOriginalSongAction(res));
        break;
      case 3:
        dispatch(changeUpSongAction(res));
        break;
    }
  };
};
