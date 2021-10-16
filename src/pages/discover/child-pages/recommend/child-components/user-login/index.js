import React, { memo } from 'react';

import { LoginWrapper } from './style';

export default memo(function index() {
  return (
    <LoginWrapper className="sprite_02">
      <p className="login-tip">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <div className="login-btn sprite_02">用户登录</div>
    </LoginWrapper>
  );
});
