/*
 * @Date: 2021-10-13 21:36:22
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-03 16:32:51
 */
import React, { memo } from 'react';

import { getSizeImg } from '@/utils/format-utils';
import { usePlaySong } from '@/hooks/usePlaySong';

import { RankingWrapper } from './style';

export default memo(function index(props) {
  //props/state
  const { rankingInfo } = props;
  const { tracks: songsList = [] } = rankingInfo;

  //redux hooks
  /* other hooks */
  const [getSongToplayMusic] = usePlaySong();
  //其他逻辑

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
