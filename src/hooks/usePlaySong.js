/*
 * @Date: 2021-11-02 19:18:11
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-02 19:59:20
 */
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  changePlayListAction,
  getSongDetailAction,
  changeGlobalPlayStatusAction
} from '@/pages/player/store';
import { getSongDetail } from '@/network/api/player';

export const usePlaySong = () => {
  //点击某一首歌的播放按钮进行播放
  const dispatch = useDispatch();
  const { playList } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList'])
    }),
    shallowEqual
  );
  const getSongToplayMusic = (ids) => {
    dispatch(getSongDetailAction(ids));
    //设置播放状态为开始播放
    dispatch(changeGlobalPlayStatusAction(true));
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
