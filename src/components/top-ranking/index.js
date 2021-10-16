import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getSizeImg } from '@/utils/format-utils';
import { getSongDetailAction } from '@/pages/player/store';

import { RankingWrapper } from './style';

export default memo(function index(props) {
  //props/state
  const { rankingInfo } = props;
  const { tracks: songsList = [] } = rankingInfo;

  //redux hooks
  const dispatch = useDispatch();

  //其他逻辑
  //点击某一首歌的播放按钮进行播放
  const getSongToplayMusic = (ids) => {
    dispatch(getSongDetailAction(ids));
  };

  return (
    <RankingWrapper>
      <div className="top-header">
        <div className="cover-img">
          <a className="mask"></a>
          <img src={getSizeImg(rankingInfo.coverImgUrl, 80)}></img>
        </div>
        <div className="right-control">
          <a>
            <h3>{rankingInfo.name}</h3>
          </a>
          <i className="play-icon sprite_02"></i>
          <i className="add-icon sprite_02"></i>
        </div>
      </div>
      <div className="top-list">
        {songsList.slice(0, 10).map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <div className="grade">{index + 1}</div>
              <div className="title text-nowrap">
                <a className="text-nowrap">{item.name}</a>
              </div>
              <div className="control-icon">
                <i
                  className="play-icon sprite_02"
                  onClick={(e) => getSongToplayMusic(item.id)}
                ></i>
                <i className="get-icon sprite_icon2"></i>
                <i className="add-icon sprite_02"></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="top-footer">
        <a href="/todo">查看全部&gt;</a>
      </div>
    </RankingWrapper>
  );
});
