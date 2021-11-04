/*
 * @Date: 2021-10-30 19:26:47
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-04 16:04:47
 */
import React, { memo, useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classnames from 'classnames';
import { queryParse } from '@/utils/query-format';

import { searchTab } from '@/common/local-data';
import { useSearchInput } from '@/hooks/useSearchInput';
import { formatTimestamp } from '@/utils/format-utils';
import { usePlaySong } from '@/hooks/usePlaySong';

import {
  SearchWrapper,
  SearchHeader,
  SearchTab,
  SearchList,
  SearchFooter
} from './style';
import SearchTip from '@/components/search-tip';
import SaberPagination from '@/components/pagination';

export default memo(function index(props) {
  /* props/state */
  const {
    keywords,
    setKeywords,
    songTips,
    inputRef,
    handleSearchEvent,
    showSearchRes,
    searchKeywords
  } = useSearchInput(props);
  //当前选中tab
  const [currentTab, setCurrentTab] = useState(0);
  //是否刷新浏览器
  const [first, setFirst] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  /* redux hooks */
  const { searchSongs, songCount } = useSelector(
    (state) => ({
      searchSongs: state.getIn(['search', 'searchSongs']),
      songCount: state.getIn(['search', 'songCount'])
    }),
    shallowEqual
  );

  /* other hooks */
  useEffect(() => {
    let searchQueryInfo = queryParse(props.location.search);
    setKeywords(searchQueryInfo.keywords);
  }, [props.location.search]);

  useEffect(() => {
    if (first && keywords.length !== 0) {
      searchKeywords('all', { limit: 30 });
      setFirst(false);
    } else {
      return;
    }
  }, [keywords, setFirst]);

  //播放歌曲,添加歌曲
  const [getSongToplayMusic, addSong] = usePlaySong();

  //其他逻辑
  const changeTab = (index) => {
    setCurrentTab(index);
  };

  //分页处理
  const handleChangePage = (page) => {
    searchKeywords('all', { offset: (page - 1) * 30, limit: 30 });
    setCurrentPage(page);
  };

  return (
    <SearchWrapper className="wrap-v2">
      <SearchHeader>
        <div className="input-wrapper sprite_input">
          <input
            ref={inputRef}
            value={keywords}
            onChange={showSearchRes}
            onFocus={(e) => handleSearchEvent(e)}
            onKeyDown={(e) => handleSearchEvent(e)}
          />
          {keywords.length && songTips.length ? (
            <SearchTip className={'search-tip'} songTips={songTips} />
          ) : (
            ''
          )}
          <a
            onClick={(e) => handleSearchEvent(e)}
            className="sprite_input search-icon"
          >
            搜索歌曲
          </a>
        </div>
      </SearchHeader>
      <SearchTab>
        <div className="tab-title">
          搜索:&nbsp;{keywords},共找到
          <span style={{ color: '#c20c0c' }}>&nbsp;{songCount}&nbsp;</span>
          首单曲
        </div>
        <ul className="search-tab sprite_tab">
          {searchTab.map((item, index) => {
            return (
              <li
                key={item.name}
                className={classnames('sprite_tab', {
                  active: currentTab == index
                })}
                onClick={(e) => changeTab(index)}
              >
                <a className="sprite_tab">{item.name}</a>
              </li>
            );
          })}
        </ul>
      </SearchTab>
      <SearchList>
        {searchSongs.map((item) => {
          return (
            <li key={item.id} className="item">
              <div className="left">
                <div className="name">
                  <a
                    onClick={(e) => getSongToplayMusic(item.id)}
                    className="play-icon sprite_table"
                  ></a>
                  <a className="song-name text-nowrap">{item.name}</a>
                </div>
                <div className="control-icon">
                  <a
                    onClick={(e) => addSong(item)}
                    className="add-song sprite_icon2"
                  ></a>
                  <a className="add-song sprite_icon2"></a>
                  <a className="add-song sprite_icon2"></a>
                  <a className="add-song sprite_icon2"></a>
                </div>
              </div>
              <div className="right">
                <div className="author text-nowrap">
                  {item.artists.map((singer, index) => {
                    return (
                      <span key={singer.name}>
                        {index !== 0 ? <span>/</span> : ''}
                        <a>{singer.name}</a>
                      </span>
                    );
                  })}
                </div>
                <div className="album text-nowrap">
                  <a>《{item.album.name}》</a>
                </div>
                <div className="time">{formatTimestamp(item.duration)}</div>
              </div>
            </li>
          );
        })}
      </SearchList>
      <SearchFooter>
        {/* todo 这里有个bug，就是在第一页切换到第二页的时候滚动条会跳到上面去，不知道为啥， */}
        <SaberPagination
          defaultPageSize={30}
          current={currentPage}
          total={songCount}
          onChange={handleChangePage}
          showSizeChanger={false}
        />
      </SearchFooter>
    </SearchWrapper>
  );
});
