/*
 * @Date: 2021-11-02 19:18:11
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-03 17:08:33
 */
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  changePlayListAction,
  getCurrentSongDetailAction,
  changeGlobalPlayStatusAction
} from '@/pages/player/store';
import { getSongDetail } from '@/network/api/player';
import event from '@/utils/event';

export const usePlaySong = () => {
  //通过发布订阅方式调用app-play-bar中的重播函数
  //点击某一首歌的播放按钮进行播放
  const dispatch = useDispatch();
  const { playList } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList'])
    }),
    shallowEqual
  );

  //发布一个事件
  const replayEvent = () => {
    event.emit('replay');
  };
  const getSongToplayMusic = (ids) => {
    dispatch(getCurrentSongDetailAction(ids));
    //设置播放状态为从头开始播放
    dispatch(changeGlobalPlayStatusAction(true));
    replayEvent();
  };

  //添加歌曲
  const addSong = async (item) => {
    //判断歌曲是否存在
    const hasSong = playList.find((song) => song.id === item.id);
    if (hasSong) {
      return;
    }
    //没有找到，请求获取歌曲详细信息然后添加到数组中
    //没有找到，去请求
    const res = await getSongDetail(item.id);
    const song = res.songs && res.songs[0];
    const newPlayList = [...playList];
    newPlayList.push(song);
    dispatch(changePlayListAction(newPlayList));
  };
  return [getSongToplayMusic, addSong];
};
