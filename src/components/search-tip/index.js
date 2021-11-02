/*
 * @Date: 2021-10-31 22:15:51
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-02 15:17:54
 */
import React, { memo } from 'react';
import classNames from 'classnames';

import { SearchTipWrapper, SearchHeader, SearchListType } from './style';

export default memo(function index(props) {
  const { songTips, className } = props;
  return (
    <SearchTipWrapper className={classNames(className)}>
      <SearchHeader>
        <span className="tips">搜索相关用户</span>
      </SearchHeader>
      <SearchListType>
        <div className="left">
          <span>音乐</span>
        </div>
        <div className="right">
          <ul className="list">
            {songTips.slice(0, 4).map((item) => {
              return (
                <li key={item.id}>
                  <a className="text-nowrap">
                    <span>{`${item.name}-${
                      item.artists && item.artists[0].name
                    }`}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </SearchListType>
    </SearchTipWrapper>
  );
});
