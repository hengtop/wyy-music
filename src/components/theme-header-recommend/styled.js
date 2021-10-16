import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c10d0c;
`;

export const HeaderLeft = styled.div`
  .title {
    color: #333;
    font-size: 20px;
    text-decoration: none;
    padding: 0 10px 0 34px;
    background-position: -225px -160px;
    background-clip: padding-box;
  }
`;

export const HeaderRight = styled.div`
  .more {
    color: #666;
    font-size: 12px;
    padding-right: 30px;
    background-position: 30px -239px;
  }
`;

export const HeaderCenter = styled.div`
  margin: 0 10px;
  display: flex;
  flex: 1;
  .item {
  }
  .divider {
    color: #ccc;
    margin: 0 10px;
  }
`;
