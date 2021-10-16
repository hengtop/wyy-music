import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding-bottom: 50px;
  padding-top: 20px;
  border-top: 1px solid var(--borderColor);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterLeft = styled.div`
  .serve-list {
    a {
      color: #999;
    }
  }
  p {
    margin-top: 8px;
  }
  .divider {
    margin: 0 11px 0 12px;
    color: #999;
  }
  .copyright {
    margin-right: 14px;
  }
  .police-icon {
    display: inline-block;
    width: 14px;
    height: 14px;
    background-image: url(${require('@/assets/img/police.png').default});
    background-size: cover;
    vertical-align: -2px;
    margin-right: 2px;
  }
`;

export const FooterRight = styled.ul`
  display: flex;
  .icon-img {
    width: 50px;
    height: 45px;
  }

  .text-img {
    width: 52px;
    height: 14px;
    margin-top: 8px;
  }

  li {
    margin: 0 20px;
  }

  li:nth-child(1) .icon-img {
    background-position: -63px -456.5px;
  }
  li:nth-child(2) .icon-img {
    background-position: -63px -101px;
  }
  li:nth-child(3) .icon-img {
    background-position: 0 0;
  }
  li:nth-child(4) .icon-img {
    background-position: -63px -50px;
  }
  li:nth-child(5) .icon-img {
    background-position: 0px -101px;
  }

  li:nth-child(1) .text-img {
    background-position: 0px -108px;
    width: 72px;
    margin-left: -10px;
  }
  li:nth-child(2) .text-img {
    background-position: -1px -91px;
  }
  li:nth-child(3) .text-img {
    background-position: 0 0;
  }
  li:nth-child(4) .text-img {
    background-position: 0px -54px;
  }
  li:nth-child(5) .text-img {
    background-position: -1px -72px;
  }
`;
