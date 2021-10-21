import React, { memo } from 'react';

import { getSizeImg } from '../../utils/format-utils';

import { AlbumCoverWrapper } from './style';

export default memo(function index(props) {
  //设置封面的一些默认参数
  const {
    albumInfo,
    width = '118',
    height = '100',
    size = '100',
    bgp = '-570'
  } = props;
  return (
    <AlbumCoverWrapper
      className="sprite_02"
      width={width}
      size={size}
      height={height}
      bgp={bgp}
    >
      <div className="cover-img">
        <a className="mask"></a>
        <img src={getSizeImg(albumInfo.picUrl, 100)}></img>
        <i className="play-icon sprite_icon"></i>
      </div>
      <p className="album-title">
        <a className="text-nowrap">{albumInfo.name}</a>
      </p>
      <p className="album-author">
        <a className="text-nowrap">{albumInfo.artist.name}</a>
      </p>
    </AlbumCoverWrapper>
  );
});
