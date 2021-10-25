import React, {
  memo,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { scrollTo } from '@/utils/scroll-to';

import { LyricListWrapper } from './style';

function index(props, ref) {
  /* props/state */
  /* redux hooks */
  const { lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
    }),
    shallowEqual
  );
  /* other hooks */
  const lyricRef = useRef();
  useEffect(() => {
    lyricRef.current.scrollTop = 0;
  }, [lyricList]);
  useEffect(() => {
    //当歌词索引大于3的时候开始滚动
    if (currentLyricIndex > 3) {
      //当有些歌词高度大于32px时会导致高亮的歌词偏移固定位置，所以通过以下方式解决
      const items = document.querySelectorAll('#lyric>div');
      let wordOffset = 0;
      for (let i = 0; i < currentLyricIndex; i++) {
        wordOffset += items[i].offsetHeight;
      }
      scrollTo(lyricRef.current, wordOffset - 96, 300);
    } else {
      scrollTo(lyricRef.current, 0, 300);
    }
  }, [currentLyricIndex]);

  //向外只暴露这一个方法
  useImperativeHandle(
    ref,
    () => ({
      resetLyric: () => {
        scrollTo(lyricRef.current, 0, 300);
      }
    }),
    [lyricRef]
  );
  /* 其他逻辑 */
  return (
    <LyricListWrapper ref={lyricRef} id="lyric">
      {lyricList.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames('item', {
              active: currentLyricIndex === index
            })}
          >
            {item.content}
          </div>
        );
      })}
    </LyricListWrapper>
  );
}

export default memo(forwardRef(index));
