import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';

import { HeaderLeft, HeaderRight, HeaderCenter, HeaderWrapper } from './styled';

const ThemeHeaderRecommend = memo(function index(props) {
  //设置默认值防止空值报错
  const { title, keywords = [] } = props;
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <a className="title sprite_02" href="/">
          {title}
        </a>
      </HeaderLeft>
      <HeaderCenter>
        {keywords.map((item, index) => {
          return (
            <Fragment key={item}>
              <li className="item">
                <a>{item}</a>
              </li>
              {index !== keywords.length - 1 && (
                <span className="divider">|</span>
              )}
            </Fragment>
          );
        })}
      </HeaderCenter>
      <HeaderRight>
        <a className="more sprite_02">更多</a>
      </HeaderRight>
    </HeaderWrapper>
  );
});

//props校验
ThemeHeaderRecommend.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
};

ThemeHeaderRecommend.defaultProps = {
  keywords: []
};

export default ThemeHeaderRecommend;
