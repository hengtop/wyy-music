import React, { memo, useEffect } from 'react';

import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';

function SaberRecommend(props) {
  //组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.recommend.topBanners
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return <div>recommend</div>;
}

//以下代码如果在大量组件中书写会显得很繁琐，所以我们采用redux-hook
/* const mapStateToProps = (state) => ({
  topBanners: state.recommend.topBanners
});

const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerAction());
  }
}); */

export default memo(SaberRecommend);

/*
虽然我们使用redux  hook可以简化代码而且也可以不使用connect
但是redux-hook有性能问题，connect内部是做了优化的，会对前后的state进行比较来确定依赖的组件是否需要更新
而useSelector只是对传入的函数进行执行，然后对返回的结果进行比较，而每次执行函数返回的都是新的一个对象
当然解决方案也很简单，导入react-redux中的一个函数shallowEqual，作为useSelector的第三个参数 
*/
