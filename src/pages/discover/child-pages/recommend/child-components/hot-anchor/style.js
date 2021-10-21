import styled from 'styled-components';

export const AnchorWrapper = styled.div`
  padding: 0 20px;
`;

export const Header = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .title {
    color: #333;
    font-weight: bold;
  }
`;

export const AnchorList = styled.div`
  margin-top: 20px;
  .item {
    margin-top: 10px;
    width: 200px;
    display: flex;
    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .info {
      width: calc(100% - 40px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .name a {
        display: block;
        color: #333;
        font-family: Arial, Helvetica, sans-serif;
      }
      .detail {
        font-family: Arial, Helvetica, sans-serif;
        color: #666;
      }
    }
  }
`;
