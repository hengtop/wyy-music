import * as actionTypes from './constant';
import {
  getBannerList,
  getHotRecommend,
  getNewAlbum,
  getRecommendRanking,
  getSettleSinger,
  getHotAnchor
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
export const changeSettleSingerAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SINGERS,
  settleSingers: res.artists
});
export const changeHotAnchorAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ANCHORS,
  hotAnchors: res.list
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

//获取推荐页入驻歌手
export const getSettleSingerAction = (limit) => {
  return async (dispatch) => {
    const res = await getSettleSinger(limit);
    dispatch(changeSettleSingerAction(res));
  };
};

//获取热门主播
export const getHotAnchorAction = (limit) => {
  return async (dispatch) => {
    const res = await getHotAnchor(limit);
    dispatch(changeHotAnchorAction(res.data));
  };
};
