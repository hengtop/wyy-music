import styled from 'styled-components';

export const NewAlbumWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Content = styled.div`
  position: relative;
  height: 184px;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin: 16px 0;
  .album-banner {
    padding: 20px 20px 15px;
    height: 184px;
    .item {
      display: flex !important;
      height: 150px;
      justify-content: space-around;
    }
  }

  .arrow-prev,
  .arrow-next {
    position: absolute;
    top: 50%;
    i {
      display: inline-block;
      width: 17px;
      height: 17px;
    }
  }
  .arrow-prev {
    transform: translateX(50%) translateY(-100%);
    .sprite_02 {
      background-position: -265px -75px;
    }
    .sprite_02:hover {
      background-position: -285px -75px;
    }
  }
  .arrow-next {
    right: 0;
    transform: translateX(-50%) translateY(-100%);
    .sprite_02 {
      background-position: -295px -75px;
    }
    .sprite_02:hover {
      background-position: -315px -75px;
    }
  }
`;
