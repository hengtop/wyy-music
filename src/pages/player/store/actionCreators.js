import { getSongDetail, getSongLyric } from '@/network/api/player';
import { getRandom } from '@/utils/math-utils';
import { parseLyric, onlyLyric } from '@/utils/lyric-parse-utils';
import * as actionTypes from './constant';

export const changeCurrentSongAction = (res) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: res
});
export const changePlayListAction = (res) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res
});

export const changeCurrentSongIndexAction = (res) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: res
});
export const changeLyricsListAction = (res) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList: res
});

export const changeSequenceAction = (res) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence: res
});

export const changeCurrentLyricIndexAction = (res) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex: res
});

export const changeGlobalPlayStatusAction = (res) => ({
  type: actionTypes.GLOBAL_PLAY_STATUS,
  globalPlayStatus: res
});

export const changeSongInfoAction = (res) => ({
  type: actionTypes.CHANGE_SONG_INFO,
  songInfo: res
});

export const changeSongLyricAction = (res) => ({
  type: actionTypes.CHANGE_SONG_LYRIC,
  songLyric: res
});

//上下切换歌曲 ,通过一些操作播放下一首歌曲
export const changeCurrentSongPlayAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList']);
    const sequence = getState().getIn(['player', 'sequence']);
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex']);

    switch (sequence) {
      case 1: {
        //随机
        //保证下一首和上一首不重复
        let randomIndex = getRandom(playList.length);
        while (currentSongIndex === randomIndex) {
          randomIndex = getRandom(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      }
      case 2: //单曲循环
        break;
      default:
        //顺序
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0;
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1;
        }
    }
    //更新当前播放歌曲信息
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    //3. 请求歌词
    dispatch(getCurrentSongLyricAction(currentSong.id));
  };
};

//获取歌曲详情进行播放
export const getCurrentSongDetailAction = (ids) => {
  return async (dispatch, getState) => {
    let song = null;
    //1.根据id查找列表中是否已经有了该歌曲
    const playList = getState().getIn(['player', 'playList']);
    const songIndex = playList.findIndex((song) => song.id === ids);
    //2.判断是否找到歌曲
    if (songIndex !== -1) {
      //保存索引
      dispatch(changeCurrentSongIndexAction(songIndex));
      //保存歌曲详细信息对象
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      //3. 请求歌词
      dispatch(getCurrentSongLyricAction(song.id));
    } else {
      //没有找到，去请求
      const res = await getSongDetail(ids);
      song = res.songs && res.songs[0];

      //将新的歌曲放到列表中
      const newPlayList = [...playList];
      newPlayList.push(song);
      dispatch(changePlayListAction(newPlayList));
      //更新当前播放的歌曲和索引
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
      dispatch(changeCurrentSongAction(song));
      //3. 请求歌词
      dispatch(getCurrentSongLyricAction(song.id));
    }
  };
};

//获取歌词
export const getCurrentSongLyricAction = (id) => {
  return async (dispatch) => {
    const { lrc } = await getSongLyric(id);
    dispatch(changeLyricsListAction(parseLyric(lrc?.lyric || '')));
  };
};

//获取歌曲信息，不一定播放
export const getSongInfoAction = (id) => {
  return async (dispatch) => {
    const res = await getSongDetail(id);
    let song = res.songs && res.songs[0];
    dispatch(changeSongInfoAction(song));
  };
};

export const getSongLyricAction = (id) => {
  return async (dispatch) => {
    const { lrc } = await getSongLyric(id);
    dispatch(changeSongLyricAction(onlyLyric(lrc?.lyric || '')));
  };
};
