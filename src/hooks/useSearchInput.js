/*
 * @Date: 2021-11-01 23:18:18
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-02 17:45:12
 */

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSearchKeywordsResAction } from '@/pages/search/store';
import { useDebounce } from '@/utils/debounce';

export const useSearchInput = (props) => {
  /* state/props */
  //是否设置搜索框默认内容
  const inputRef = useRef();
  const [keywords, setKeywords] = useState('');
  /* redux hooks */
  const dispatch = useDispatch();
  const { songTips } = useSelector(
    (state) => ({
      songTips: state.getIn(['search', 'songTips'])
    }),
    shallowEqual
  );
  /* other hooks */
  useEffect(() => {
    getSearchRes();
  }, [dispatch, keywords]);

  //防抖函数处理
  const getSearchRes = useDebounce(() => {
    searchKeywords('tips', { offset: 0, limit: 4, type: 1 });
  });

  //发送搜索请求  type搜索的类型 queryInfo分页操作
  const searchKeywords = (type, queryInfo = {}) => {
    if (keywords.length === 0) {
      return;
    }
    dispatch(
      getSearchKeywordsResAction(
        keywords,
        {
          ...queryInfo
        },
        type
      )
    );
  };

  //绑定搜索value
  const showSearchRes = (e) => {
    setKeywords(e.target.value);
  };
  //回车/点击/聚焦 触发跳转搜索,使焦点消失
  const handleSearchEvent = (e) => {
    if (keywords.length === 0) {
      return;
    }
    switch (e.type) {
      case 'click':
        inputRef.current.blur();
        searchKeywords('all');
        props.history.push({
          pathname: '/search',
          search: `?keywords=${keywords}&type=${1}`
        });
        break;
      case 'keydown':
        if (e.keyCode === 13) {
          inputRef.current.blur();
          searchKeywords('all');
          if (props.history.location.pathname.indexOf('/search') === -1) {
            setKeywords('');
          }
          props.history.push({
            pathname: '/search',
            search: `?keywords=${keywords}&type=${1}`
          });
        }
        break;
      case 'focus':
        searchKeywords('tips');
        break;
    }
  };
  return {
    inputRef,
    keywords,
    setKeywords,
    songTips,
    showSearchRes,
    searchKeywords,
    handleSearchEvent
  };
};
