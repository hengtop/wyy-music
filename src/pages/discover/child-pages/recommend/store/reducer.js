import { Map } from 'immutable';

import * as actionTypes from './constant';

const initState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  newSongs: [],
  upSongs: [],
  originalSongs: []
});

export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums);
    case actionTypes.CHANGE_NEW_SONGS:
      return state.set('newSongs', action.newSongs);
    case actionTypes.CHANGE_UP_SONGS:
      return state.set('upSongs', action.upSongs);
    case actionTypes.CHANGE_ORIGINAL_SONGS:
      return state.set('originalSongs', action.originalSongs);
    default:
      return state;
  }
}
