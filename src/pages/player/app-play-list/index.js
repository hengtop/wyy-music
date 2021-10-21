import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { formatTimestamp, getBlurImg } from '@/utils/format-utils';
import { getSongDetailAction } from '../store';

import {
  PanelWrapper,
  PanelHeader,
  PanelContentWrapper,
  PanelContent,
  PanelHeaderRight,
  PanelHeaderLeft,
  PanelContentLeft,
  PanelContentRight
} from './style';
import LyricList from '../app-lyric-list';

export default memo(function index(props) {
  //props/state
  const { closePanel, panelShow } = props;

  //redux hooks
  const dispatch = useDispatch();
  //获取播放信息
  const { playList, currentSong, currentSongIndex } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
      currentSong: state.getIn(['player', 'currentSong']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex'])
    }),
    shallowEqual
  );
  //other hooks

  //其他逻辑
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';

  const author = (item) => (item.ar && item.ar[0].name) || '';

  const changeSong = (ids) => {
    dispatch(getSongDetailAction(ids));
  };
  return (
    <PanelWrapper panelShow={panelShow}>
      <PanelHeader>
        <PanelHeaderLeft>
          <div className="play-list">播放列表({playList.length})</div>
          <div className="icon-list">
            <a className="collect-all">
              <i className="icon sprite_list"></i>
              <i>收藏全部</i>
            </a>
            <a className="delete">
              <i className="icon sprite_list"></i>
              <i>清除</i>
            </a>
          </div>
        </PanelHeaderLeft>
        <PanelHeaderRight>
          <p className="title text-nowrap">{currentSong.name}</p>
          <i onClick={closePanel} className="icon sprite_list">
            关闭
          </i>
        </PanelHeaderRight>
      </PanelHeader>
      <PanelContentWrapper>
        <img className="cover" src={picUrl}></img>
        <PanelContent>
          <PanelContentLeft>
            {playList.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={classNames('item', {
                    active: index === currentSongIndex
                  })}
                  onClick={(e) => changeSong(item.id)}
                >
                  <div className="is-play-icon sprite_list"></div>
                  <div className="name text-nowrap">{item.name}</div>
                  <div className="control-icon"></div>
                  <div className="author text-nowrap">{author(item)}</div>
                  <div className="time">{formatTimestamp(item.dt)}</div>
                  <div className="from-icon sprite_list"></div>
                </div>
              );
            })}
          </PanelContentLeft>
          <PanelContentRight>
            <LyricList />
          </PanelContentRight>
        </PanelContent>
      </PanelContentWrapper>
    </PanelWrapper>
  );
});
