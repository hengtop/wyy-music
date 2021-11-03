/*
 * @Date: 2021-11-03 17:25:31
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-03 19:11:50
 */
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  //左右按钮的样式
  .ant-pagination-prev,
  .ant-pagination-next {
    margin-top: 6px;
    &:hover {
      .ant-pagination-item-link {
        border: 1px solid #ccc;
        color: unset;
        &:hover {
          color: unset;
        }
      }
    }
    .ant-pagination-item-link {
      transition: unset;
      border: 1px solid #ccc;
      svg {
        display: none;
      }
    }
  }
  //左边按钮
  .ant-pagination-prev {
    position: relative;
    .ant-pagination-item-link {
      width: 71px;
      height: 26px;
      line-height: 26px;
      background: url(${require('@/assets/img/sprite_button2.png').default})
        no-repeat 0 9999px;
      background-position: 0px -560px;
      &::after {
        width: 40px;
        position: absolute;
        top: 50%;
        left: 25px;
        transform: translateY(-55%);
        content: '上一页';
        font-size: 12px;
      }
      &:hover {
        background-position: 0 -590px;
      }
    }
  }
  //左边不能选按钮样式
  .ant-pagination-prev.ant-pagination-disabled {
    pointer-events: none;
    .ant-pagination-item-link {
      background-position: 0 -620px;
    }
  }

  //右边按钮样式
  .ant-pagination-next {
    position: relative;
    .ant-pagination-item-link {
      width: 71px;
      height: 26px;
      line-height: 26px;
      background: url(${require('@/assets/img/sprite_button2.png').default})
        no-repeat 0 9999px;
      background-position: -75px -560px;
      &::after {
        width: 40px;
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-55%);
        content: '下一页';
        font-size: 12px;
      }
      &:hover {
        color: ;
        background-position: -75px -590px;
      }
    }
  }

  //右边不能选按钮样式
  .ant-pagination-next.ant-pagination-disabled {
    pointer-events: none;
    .ant-pagination-item-link {
      background-position: -75px -620px;
    }
  }

  //中间页面样式
  .ant-pagination-item {
    min-width: 24px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    transition: none;
    &:hover {
      border-color: #666;
    }
    a {
      display: inline-block;
      height: 24px;
      padding: 0 8px;
      color: #333;
      font-size: 12px;
    }
  }
  //选中样式
  .ant-pagination-item-active {
    border-color: #a2161b;
    background: url(${require('@/assets/img/sprite_button2.png').default})
      no-repeat 0 9999px;
    background-position: 0 -650px;
    a {
      color: #fff;
    }
  }

  //中间省略号样式修改
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    width: 5px;
    min-width: unset;
    pointer-events: none;
    &::before {
      position: relative;
      left: -2px;
      content: '...';
    }
    .ant-pagination-item-container {
      display: none;
    }
  }
`;
