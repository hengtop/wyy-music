import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: var(--themeColor);
  }
`;

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  .item {
    margin: 4px 17px 0;
    a {
      padding: 0 13px;
      font-size: 12px;
      color: #fff;
    }
    a:hover,
    .active {
      padding: 3px 13px;
      background-color: #9b0909;
      text-decoration: none;
      border-radius: 20px;
    }
  }
`;
