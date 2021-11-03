/*
 * @Date: 2021-11-03 17:25:25
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-03 17:30:44
 */
import React, { memo } from 'react';

import { Pagination } from 'antd';
import { PaginationWrapper } from './style';
export default memo(function index(props) {
  return (
    <PaginationWrapper>
      <Pagination {...props} />
    </PaginationWrapper>
  );
});
