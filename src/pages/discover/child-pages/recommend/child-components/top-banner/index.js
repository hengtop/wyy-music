import React, { memo, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
//导入一个公共hook
import { useChangeBanner } from '@/hooks/useChangeBanner';

import { getTopBannerAction } from '../../store/actionCreators';
import { getBlurImg } from '@/utils/format-utils';

import { TopBannerWraper, TopBannerLeft, TopBannerRight } from './style';

//设置轮播图切换箭头组件
const Arrow = memo(function index(props) {
  return (
    <div onClick={props.changeBanner} className={props.className}>
      {props.component}
    </div>
  );
});

export default memo(function index(props) {
  //内部state
  //当前轮播index
  const [currentIndex, setCurrentIndex] = useState(0);

  //redux相关hooks
  //组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(
    (state) => ({
      //如果觉得这个写法比较麻烦
      //topBanners: state.get('recommend').get('topBanners')
      //可采用如下写法，就是语法糖
      topBanners: state.getIn(['recommend', 'topBanners'])
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  //其他的hooks
  const [carouselRef, prev, next] = useChangeBanner();
  //保存轮播组件
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  //业务代码
  //背景图片
  const bgImage =
    topBanners[currentIndex] &&
    getBlurImg(topBanners[currentIndex].imageUrl, 40, 20);
  //轮播切换回调
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  return (
    <TopBannerWraper bgImage={bgImage}>
      <TopBannerLeft>
        <Carousel
          autoplay
          effect="fade"
          ref={carouselRef}
          dots={{ className: 'dots-style' }}
          beforeChange={bannerChange}
        >
          {topBanners.map((item) => {
            return (
              <div key={item.targetId} className="item">
                <a href={'https://music.163.com/#/song?id=' + item.targetId}>
                  <img
                    src={item.imageUrl + '?imageView&quality=89'}
                    alt={item.typeTitle}
                  />
                </a>
              </div>
            );
          })}
        </Carousel>
        <Arrow
          component={<LeftOutlined />}
          className="arrow-prev"
          changeBanner={(e) => prev()}
        />
        <Arrow
          component={<RightOutlined />}
          className="arrow-next"
          changeBanner={(e) => next()}
        />
      </TopBannerLeft>
      <TopBannerRight>
        <a className="download-btn"></a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </TopBannerRight>
    </TopBannerWraper>
  );
});
