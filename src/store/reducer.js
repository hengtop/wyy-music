/*
 * @Date: 2021-10-11 17:25:03
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-10-30 19:35:50
 */
import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '@/pages/discover/child-pages/recommend/store';
import { reducer as playerReducer } from '@/pages/player/store';
import { reducer as searchReducer } from '@/pages/search/store';

const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  search: searchReducer
});

export default reducer;
