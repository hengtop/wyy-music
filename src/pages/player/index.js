/*
 * @Date: 2021-10-16 13:08:11
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-04 15:50:34
 */
import React, { memo } from 'react';

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style';
import SongInfo from './child-component/song-info';

export default memo(function index(props) {
  return (
    <PlayerWrapper className="wrap-v2">
      <PlayerLeft>
        <SongInfo {...props} />
      </PlayerLeft>
      <PlayerRight></PlayerRight>
    </PlayerWrapper>
  );
});
