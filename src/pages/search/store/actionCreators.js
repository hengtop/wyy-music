/*
 * @Date: 2021-10-30 19:29:15
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-02 15:34:00
 */

import { searchInfoByKeywords } from '@/network/api/discover/search';
import * as actionTypes from './constant';

export const changeSearchSongAction = (res) => ({
  type: actionTypes.CHANGE_SEARCH_SONGS,
  searchSongs: res
});
export const changeSongCountAction = (res) => ({
  type: actionTypes.CHANGE_SONG_COUNT,
  songCount: res
});
export const changeSongTipsAction = (res) => ({
  type: actionTypes.CHANGE_SEARCH_SONGS_TIPS,
  songTips: res
});

export const getSearchKeywordsResAction = (
  keyword,
  queryInfo = {},
  type = 'tips'
) => {
  return async (dispatch) => {
    const { result } = await searchInfoByKeywords(keyword, queryInfo);
    switch (type) {
      case 'tips':
        dispatch(changeSongTipsAction(result.songs || []));
        break;
      case 'all':
        dispatch(changeSearchSongAction(result.songs || []));
        dispatch(changeSongCountAction(result.songCount || 0));
        break;
      default:
        return;
    }
  };
};
