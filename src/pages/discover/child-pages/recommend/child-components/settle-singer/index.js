import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSettleSingerAction } from '../../store';
import { RECOMMEND_SETTLE_SINGERS } from '@/common/constant';
import { getSizeImg } from '@/utils/format-utils';

import { SingerWrapper, Header, SingerList } from './style';

export default memo(function index() {
  //props/state

  //redux hooks
  const dispatch = useDispatch();
  const { settleSingers } = useSelector(
    (state) => ({
      settleSingers: state.getIn(['recommend', 'settleSingers'])
    }),
    shallowEqual
  );

  //其他的hooks
  useEffect(() => {
    dispatch(getSettleSingerAction(RECOMMEND_SETTLE_SINGERS));
  }, [dispatch]);

  //其他的逻辑

  //参数处理，这里特殊情况
  function showAlias(item) {
    if (item.alias.length === 0) {
      return item.name;
    } else {
      return item.alias.join(' ');
    }
  }
  return (
    <SingerWrapper>
      <Header>
        <div className="title">入驻歌手</div>
        <div className="more">查看全部 &gt;</div>
      </Header>
      <SingerList>
        {settleSingers.map((item) => {
          return (
            <div key={item.id} className="item">
              <img src={getSizeImg(item.picUrl, 60)}></img>
              <div>
                <h4 className="name">{item.name}</h4>
                <div className="alias">{showAlias(item)}</div>
              </div>
            </div>
          );
        })}
      </SingerList>
      <div className="join-artist sprite_button">
        <a className="sprite_button">
          <i>申请成为网易云音乐人</i>
        </a>
      </div>
    </SingerWrapper>
  );
});
