/*
 * @Date: 2021-11-04 15:51:53
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-04 15:56:18
 */
import Qs from 'qs';

//解析query参数

export const queryParse = (queryStr) => {
  const queryInfo = queryStr.split('?')[1];
  return Qs.parse(queryInfo);
};
