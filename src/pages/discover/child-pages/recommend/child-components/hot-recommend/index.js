import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotRecommendAction } from '../../store/actionCreators';
import { HOT_RECOMMENDS_LIMIT } from '@/common/constant';

import { HotRecommendWrapper } from './style';
import ThemeHeaderRecommend from 'components/theme-header-recommend';
import SongsCover from 'components/songs-cover';

export default memo(function index() {
  //redux hooks
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }),
    shallowEqual
  );

  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMENDS_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      ></ThemeHeaderRecommend>
      <SongsCover hotRecommends={hotRecommends} />
    </HotRecommendWrapper>
  );
});
