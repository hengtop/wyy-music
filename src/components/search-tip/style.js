/*
 * @Date: 2021-10-31 22:15:56
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-02 00:49:12
 */
import styled from 'styled-components';

export const SearchTipWrapper = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  top: 40px;
  width: 230px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
`;

export const SearchHeader = styled.div`
  padding: 10px 10px 9px;
  border-bottom: 1px solid #d3d3d3;
  .tips {
    color: #333;
    font-size: 12px;
  }
`;

export const SearchListType = styled.div`
  display: flex;
  .left {
    flex: 2;
    padding: 5px 10px 0;
    text-align: center;
  }
  .right {
    flex: 8;
    padding: 5px 0;
    overflow: hidden;
    .list {
      a {
        display: block;
        padding: 0 5px 0 15px;
        text-decoration: none;
        span {
          line-height: 24px;
          color: #333;
        }
      }
      & > li:hover {
        background-color: #e3e5e7;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
  &:not(:last-of-type) {
    .right {
      border-left: 1px solid #d3d3d3;
      border-bottom: 1px solid #d3d3d3;
    }
  }
  &:last-of-type {
    .right {
      border-left: 1px solid #d3d3d3;
    }
  }
  &:nth-of-type(2n + 1) {
    .right {
      background-color: #f9f8f8;
    }
  }
`;
