import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotAnchorAction } from '../../store';
import { RECOMMEND_HOT_ANCHORS } from '@/common/constant';
import { getSizeImg } from '@/utils/format-utils';

import { AnchorWrapper, Header, AnchorList } from './style';

export default memo(function index() {
  //props/state

  //redux hooks
  const dispatch = useDispatch();
  const { hotAnchors } = useSelector(
    (state) => ({
      hotAnchors: state.getIn(['recommend', 'hotAnchors'])
    }),
    shallowEqual
  );
  //other hooks
  useEffect(() => {
    dispatch(getHotAnchorAction(RECOMMEND_HOT_ANCHORS));
  }, [dispatch]);
  //其他的逻辑
  return (
    <AnchorWrapper>
      <Header>
        <div className="title">热门主播</div>
      </Header>
      <AnchorList>
        {hotAnchors.map((item) => {
          return (
            <div key={item.id} className="item">
              <img src={getSizeImg(item.avatarUrl, 40)}></img>
              <div className="info">
                <div className="name">
                  <a>{item.nickName}</a>
                </div>
                <p className="detail text-nowrap">
                  这数据实在找不11111到啦11111~~~~~
                </p>
              </div>
            </div>
          );
        })}
      </AnchorList>
    </AnchorWrapper>
  );
});
