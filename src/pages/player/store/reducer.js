/*
 * @Date: 2021-10-15 14:09:10
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-10-30 19:32:22
 */
import { Map } from 'immutable';

import * as actionTypes from './constant';

const initState = Map({
  currentSong: {}, //当前播放歌曲
  playList: [], //播放列表
  currentSongIndex: 0, //当前播放歌曲在列表的索引
  sequence: 0, //播放模式   0顺序 1随机 2单曲循环
  lyricList: [], //歌词列表
  currentLyricIndex: 0, //当前播放歌词索引
  globalPlayStatus: false //这个标识表示第一次打开浏览器或者刷新浏览器不会自动播放歌曲，但是播放组件自己维护着一个播放状态
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.currentSongIndex);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set('sequence', action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.currentLyricIndex);
    case actionTypes.GLOBAL_PLAY_STATUS:
      return state.set('globalPlayStatus', action.globalPlayStatus);
    default:
      return state;
  }
}
