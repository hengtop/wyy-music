import React, { memo } from 'react';

import { footerLinks, footerImgs } from '@/common/local-data';

import { FooterWrapper, FooterLeft, FooterRight } from './styled';

export default memo(function SaberFooter() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <FooterLeft>
          <div className="serve-list">
            {footerLinks.map((item, index) => {
              return (
                <span key={item.title}>
                  <a href={item.link}>{item.title}</a>
                  {index !== footerLinks.length - 1 && (
                    <span className="divider">|</span>
                  )}
                </span>
              );
            })}
          </div>
          <p>
            <span className="copyright">网易公司版权所有©1997-2021</span>
            <span>
              杭州乐读科技有限公司运营：
              <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png">
                浙网文[2021] 1186-054号
              </a>
            </span>
          </p>
          <p>
            <span style={{ marginRight: '14px' }}>
              违法和不良信息举报电话：0571-89853516
            </span>
            <span>
              举报邮箱：<a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
            </span>
          </p>
          <p>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
              <span className="police-icon"></span>
              <span>浙公网安备 33010902002564号</span>
            </a>
          </p>
        </FooterLeft>
        <FooterRight>
          {footerImgs.map((item) => {
            return (
              <li key={item.link}>
                <a href={item.link}>
                  <div className="icon-img sprite_footer3"></div>
                  <div className="text-img sprite_footer4"></div>
                </a>
              </li>
            );
          })}
        </FooterRight>
      </div>
    </FooterWrapper>
  );
});
