/*
 * @Date: 2021-11-04 15:17:12
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-04 19:24:20
 */
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { queryParse } from '@/utils/query-format';
import { getSizeImg } from '@/utils/format-utils';
import { getSongInfoAction, getSongLyricAction } from '../../store';
import { SongInfoWrapper, SongCover, SongControl, SongLyric } from './styled';

export default memo(function styled(props) {
  /* props/state */
  const [isCollapse, setIsCollapse] = useState(true);
  //获取queryid
  const { id } = useMemo(() => {
    return queryParse(props.location.search);
  }, [props.location.search]);

  /* redux hooks */
  const dispatch = useDispatch();
  const { songInfo, songLyric } = useSelector((state) => {
    return {
      songInfo: state.getIn(['player', 'songInfo']),
      songLyric: state.getIn(['player', 'songLyric'])
    };
  }, shallowEqual);
  //请求数据
  useEffect(async () => {
    dispatch(getSongInfoAction(id));
    dispatch(getSongLyricAction(id));
  }, [id]);

  //数据处理
  const picUrl = (songInfo.al && songInfo.al.picUrl) || '';
  const songAuthor = (songInfo.ar && songInfo.ar[0].name) || '未知歌手';
  const album = (songInfo.al && songInfo.al.name) || '未知专辑';
  //折叠歌词
  const handleCollapseClick = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <SongInfoWrapper>
      <div className="left">
        <SongCover>
          <img src={getSizeImg(picUrl, 130)}></img>
          <span className="song-cover sprite_cover"></span>
        </SongCover>
        <div className="generator-link">
          <a>生成外部链接</a>
        </div>
      </div>
      <div className="right">
        <SongControl>
          <div className="song-title">
            <a className="title-icon sprite_icon2">单曲</a>
            <div className="title">{songInfo.name}</div>
          </div>
          <div className="singer">
            歌手:&nbsp;&nbsp;<a>{songAuthor}</a>
          </div>
          <div className="album">
            所属专辑:&nbsp;&nbsp;<a>{album}</a>
          </div>
          <div className="control-btn">
            <div>
              <a className="sprite_button">
                <i className="sprite_button">
                  <em className="sprite_button"></em>
                  播放
                </i>
              </a>
              <a className="sprite_button">添加</a>
            </div>
            <div>
              <a className="sprite_button">
                <i className="sprite_button">收藏</i>
              </a>
            </div>
            <div>
              <a className="sprite_button">
                <i className="sprite_button">分享</i>
              </a>
            </div>
            <div>
              <a className="sprite_button">
                <i className="sprite_button">下载</i>
              </a>
            </div>
            <div>
              <a className="sprite_button">
                <i className="sprite_button">评论</i>
              </a>
            </div>
          </div>
        </SongControl>
        <SongLyric isCollapse={isCollapse}>
          <ul className="lyric-str">
            {songLyric.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          {isCollapse ? (
            <div className="collapse" onClick={handleCollapseClick}>
              展开<em className="icon sprite_icon2"></em>
            </div>
          ) : (
            <div className="collapse" onClick={handleCollapseClick}>
              收起<em className="icon sprite_icon2"></em>
            </div>
          )}
        </SongLyric>
      </div>
    </SongInfoWrapper>
  );
});
