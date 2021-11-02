import styled from 'styled-components';

export const SingerWrapper = styled.div`
  padding: 0 20px;
  .join-artist {
    margin-top: 20px;
    margin-bottom: 30px;
    height: 31px;
    text-align: center;
    background-position: right -100px;
    border-radius: 4px;
    padding: 0 5px 0 0;
    a {
      display: block;
      line-height: 31px;
      text-decoration: none;
      color: #333;
      font-weight: bold;
      background-position: 0 -59px;
      i {
        display: block;
      }
    }
    :hover {
      background-position: right -182px;
      a {
        background-position: 0 -141px;
      }
    }
  }
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

export const SingerList = styled.div`
  margin-top: 10px;
  .item {
    margin: 10px 0;
    height: 60px;
    background-color: #fafafa;
    display: flex;
    border: 1px solid #e9e9e9;
    img {
      width: 60px;
      height: 60px;
      margin-right: 15px;
    }
    .name {
      margin: 8px 0 5px;
      font-size: 14px;
      color: #333;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-seri;
    }
    :hover {
      background: #f4f4f4;
    }
  }
`;
