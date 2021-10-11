import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  min-width: 1100px;
  height: 75px;
  background-color: #242424;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .divider {
    height: 5px;
    background-color: var(--themeColor);
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .select-list {
    a {
      position: relative;
      display: inline-block;
      height: 70px;
      line-height: 70px;
      padding: 0 19px;
      font-size: 14px;
      color: #ccc;
      &:hover {
        background: #000;
        text-decoration: none;
        color: #fff;
      }
      &.active::after {
        content: '';
        width: 12px;
        height: 7px;
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        background-image: url(${require('@/assets/img/sprite_01.png').default});
        background-position: -226px 0;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .search {
    width: 158px;
    height: 32px;
    background-image: url(${require('@/assets/img/sprite_01.png').default});
    background-position: 0 -99px;
    background-color: #fff;
    border-radius: 32px;
    padding-left: 30px;
    font-size: 12px;
    color: #333;

    &::placeholder {
      color: #9b9b9b;
      font-size: 12px;
      text-align: center;
    }
  }

  .ant-input {
    &:hover,
    &:focus {
      border-color: unset !important;
    }
  }

  .btn {
    width: 90px;
    height: 32px;
    line-height: 30px;
    text-align: center;
    margin-left: 12px;
    box-sizing: border-box;
    border: 1px solid #4f4f4f;
    color: #ccc;
    border-radius: 20px;
    background-color: transparent;
    &:hover {
      border: 1px solid #fff;
    }
  }
  .login {
    margin-left: 20px;
  }
`;
