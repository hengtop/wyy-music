import React, { memo } from 'react';

import { getCount, getSizeImg } from '@/utils/format-utils';

import { SongsCoverWrapper } from './style';

export default memo(function index(props) {
  const { hotRecommends = [] } = props;
  return (
    <SongsCoverWrapper>
      {hotRecommends.map((item) => {
        return (
          <div key={item.id} className="cover-item">
            <div className="cover-img">
              <img src={getSizeImg(item.picUrl, 140)} />
              <a title={item.name} className="filter-cover image_cover"></a>
              <div className="constrol-info image_cover">
                <div className="playCount">
                  <i className="sprite_icon"></i>
                  {getCount(item.playCount)}
                </div>
                <a className="play-btn sprite_icon"></a>
              </div>
            </div>
            <p className="title"> {item.name}</p>
          </div>
        );
      })}
    </SongsCoverWrapper>
  );
});
