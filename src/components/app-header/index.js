/*
 * @Date: 2021-10-07 16:52:01
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-02 16:13:42
 */
import React, { memo } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Input } from 'antd';
//import { SearchOutlined } from '@ant-design/icons';

import { headerLinks } from '@/common/local-data';
import { useSearchInput } from '@/hooks/useSearchInput';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import SearchTip from '../search-tip';

function SaberHeader(props) {
  /* state/props */
  const { keywords, songTips, inputRef, showSearchRes, handleSearchEvent } =
    useSearchInput(props);
  /* redux hooks */
  /* other hooks */
  /* 其他逻辑 */
  //处理导航栏，前三个为路由导航，后三个为超链接
  function showNavTitle(item, index) {
    if (index < 3) {
      return <NavLink to={item.link}>{item.title}</NavLink>;
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            {/* 这个文字主要是用来增加seo的，但是不需要显示，所以我们可以设置文字的缩进9999px使其跑到屏幕外边 */}
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return <span key={item.title}>{showNavTitle(item, index)}</span>;
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            ref={inputRef}
            type="text"
            className="search"
            placeholder="音乐/视频/电台/用户"
            value={keywords}
            onChange={showSearchRes}
            onFocus={(e) => handleSearchEvent(e)}
            onPressEnter={(e) => handleSearchEvent(e)}
            /* prefix={<SearchOutlined />} */
          />
          {keywords.length && songTips.length ? (
            <SearchTip className={'search-tip'} songTips={songTips} />
          ) : (
            ''
          )}

          <button className="btn">创作者中心</button>
          <a className="login" href="#">
            登录
          </a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
}

export default memo(withRouter(SaberHeader));
