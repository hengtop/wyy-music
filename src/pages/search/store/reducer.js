/*
 * @Date: 2021-10-30 19:30:07
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-02 15:02:23
 */
import { Map } from 'immutable';
import * as actionTypes from './constant';

const initState = Map({
  songCount: 0, //总匹配歌曲数量
  searchSongs: [],
  songTips: [] //搜索提示歌曲列表
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_SONGS:
      return state.set('searchSongs', action.searchSongs);
    case actionTypes.CHANGE_SONG_COUNT:
      return state.set('songCount', action.songCount);
    case actionTypes.CHANGE_SEARCH_SONGS_TIPS:
      return state.set('songTips', action.songTips);
    default:
      return state;
  }
}
