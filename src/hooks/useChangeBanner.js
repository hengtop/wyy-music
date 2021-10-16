import { useRef } from 'react';

//控制轮播组件切换的hook
export const useChangeBanner = () => {
  const carouselRef = useRef();
  function prev() {
    carouselRef.current.prev();
  }
  function next() {
    carouselRef.current.next();
  }
  return [carouselRef, prev, next];
};
