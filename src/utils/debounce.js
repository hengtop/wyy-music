/*
 * @Date: 2021-10-30 16:53:53
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-01 19:55:36
 */
import { useRef } from 'react';

//防抖函数
export const useDebounce = (fn, delay = 200) => {
  //todo 关于react hooks 中的防抖实现
  const { current } = useRef({});
  return function (...args) {
    if (current.time) {
      clearTimeout(current.time);
    }
    current.time = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
