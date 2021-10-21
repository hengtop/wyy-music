import styled from 'styled-components';

const CustomScroll = styled.div`
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #000;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #868686;
    border-radius: 5px;
    border: 1 px solid #a6a6a6;
    opacity: 0.8;
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const LyricListWrapper = styled(CustomScroll)`
  height: 100%;
  padding: 20px 25px;
  overflow-y: scroll;
  .item {
    font-size: 12px;
    /* word-wrap: break-word; */
    color: #989898;
    text-align: center;
    min-height: 32px;
    line-height: 32px;
    transition: color linear 0.6s;
  }
  .active {
    color: #fff;
    font-size: 14px;
  }
`;
