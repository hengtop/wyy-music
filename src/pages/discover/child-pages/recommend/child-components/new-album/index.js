import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';
import { NEW_ALBUMS_LIMIT } from '@/common/constant';
import { useChangeBanner } from '@/hooks/useChangeBanner';

import { Carousel } from 'antd';

import { NewAlbumWrapper, Content } from './style';
import ThemeHeaderRecommend from 'components/theme-header-recommend';
import AlbumCover from 'components/albums-cover';

export default memo(function index() {
  //redux hooks
  const dispatch = useDispatch();

  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums'])
    }),
    shallowEqual
  );

  //其他hooks
  const [carouselRef, prev, next] = useChangeBanner();
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUMS_LIMIT));
  }, [dispatch]);
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRecommend title="新碟上架"></ThemeHeaderRecommend>
      <Content>
        <Carousel dots={false} className="album-banner" ref={carouselRef}>
          {/* 两页每页显示五个 */}
          {[0, 1].map((item) => {
            return (
              <div key={item} className="item">
                {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                  return <AlbumCover key={iten.id} albumInfo={iten} />;
                })}
              </div>
            );
          })}
        </Carousel>
        <div className="arrow-prev" onClick={prev}>
          <i className="sprite_02"></i>
        </div>
        <div className="arrow-next" onClick={next}>
          <i className="sprite_02"></i>
        </div>
      </Content>
    </NewAlbumWrapper>
  );
});
