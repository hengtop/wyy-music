import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getRecommendRankingAction } from '../../store/actionCreators';

import { RecommendRankingWrapper, Content } from './style';
import ThemeHeaderRecommend from 'components/theme-header-recommend';
import TopRanking from 'components/top-ranking';

export default memo(function index() {
  //redux hooks
  const dispatch = useDispatch();
  const { newSongs, upSongs, originalSongs } = useSelector(
    (state) => ({
      newSongs: state.getIn(['recommend', 'newSongs']),
      upSongs: state.getIn(['recommend', 'upSongs']),
      originalSongs: state.getIn(['recommend', 'originalSongs'])
    }),
    shallowEqual
  );
  //其他hooks
  useEffect(() => {
    //0  2  3 对应的是新歌榜 原创歌单榜和飙升榜
    dispatch(getRecommendRankingAction(0));
    dispatch(getRecommendRankingAction(2));
    dispatch(getRecommendRankingAction(3));
  }, [dispatch]);
  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRecommend title="榜单"></ThemeHeaderRecommend>
      <Content>
        <TopRanking rankingInfo={newSongs} />
        <TopRanking rankingInfo={originalSongs} />
        <TopRanking rankingInfo={upSongs} />
      </Content>
    </RecommendRankingWrapper>
  );
});
