/*
 * @Date: 2021-10-30 19:26:54
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-02 19:31:06
 */
import styled from 'styled-components';

export const SearchWrapper = styled.div`
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  padding: 40px;
`;

export const SearchHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .input-wrapper {
    position: relative;
    width: 420px;
    height: 40px;
    background-position: 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      flex: 1;
      background-color: transparent;
      padding: 0px 20px;
      &:focus + .search-tip {
        display: block;
        margin-top: 5px;
        width: 420px;
      }
    }
    .search-icon {
      display: block;
      width: 50px;
      height: 40px;
      text-indent: -99999px;
      &:hover {
        background-position: -430px 0;
      }
    }
  }
`;

export const SearchTab = styled.div`
  .tab-title {
    margin: 28px 0 17px;
    color: #999;
    font-size: 12px;
  }
  .search-tab {
    width: 900px;
    height: 39px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-position: 0 0;
    background-repeat: repeat-x;
    border: 1px solid #ccc;
    border-width: 0 1px;
    li {
      width: 112px;
      position: relative;
      left: -1px;
      line-height: 37px;
      padding-right: 0 2px;
      box-sizing: border-box;
      a {
        margin-left: 2px;
        display: block;
        width: 110px;
        text-align: center;
        font-size: 14px;
        color: #333;
        text-decoration: none;
      }
      &:first-of-type:hover {
        background-position: left -45px;
      }
      &:hover {
        background-position: right -45px;
      }
    }
    li.active {
      background-position: left -90px;
      a {
        background-position: right -90px;
      }
    }
  }
`;

export const SearchList = styled.ul`
  width: 900px;
  height: 1300px;
  margin-top: 20px;
  .item {
    display: flex;
    height: 42px;
    align-items: center;
    border: 1px solid #fff;
    .left,
    .right {
      display: flex;
      align-items: center;
    }
    .left {
      width: 480px;
      .name {
        flex: 1;
        display: flex;
        align-items: center;
        overflow: hidden;
        .play-icon {
          display: inline-block;
          width: 17px;
          height: 17px;
          background-position: 0 -103px;
          margin-right: 10px;
          &:hover {
            background-position: 0 -128px;
          }
        }
        .song-name {
          flex: 1;
          padding: 0 20px 0 0;
          max-width: 400px;
          display: inline-block;
        }
      }
      .control-icon {
        width: 96px;
        display: none;
        align-items: center;
        .add-song {
          width: 17px;
          height: 17px;
          background-position: 0 -700px;
          &:hover {
            background-position: -22px -700px;
          }
        }
      }
    }
    &:hover {
      background-color: #f2f2f2;
      border: 1px solid #e1e1e1;
      .control-icon {
        display: flex;
      }
    }
    &:nth-of-type(2n) {
      background-color: #f7f7f7;
    }
    padding: 0 20px;

    .author {
      width: 130px;
      margin: 0 20px 0 0px;
    }
    .album {
      width: 156px;
      padding-right: 20px;
      margin-right: 20px;
    }
  }
`;

export const SearchFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
