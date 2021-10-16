import styled from 'styled-components';

export const AlbumCoverWrapper = styled.div`
  width: ${(props) => props.width + 'px'};
  height: 100%;
  background-position: -260px 100px;
  .cover-img {
    position: relative;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background: url(${require('@/assets/img/coverall.png').default}) no-repeat -145px -57px;
      background-position: 0 ${(props) => props.bgp + 'px'};
    }

    img {
      width: ${(props) => props.size + 'px'};
      height: ${(props) => props.size + 'px'};
    }
    :hover .play-icon {
      position: absolute;
      width: 22px;
      height: 22px;
      bottom: 5px;
      right: 25px;
      background-position: 0 -85px;
    }
    .footer-img {
      height: 7px;
      width: ${(props) => props.size + 'px'};
    }
  }
  .album-title {
    margin-top: 8px;
  }

  .album-title a,
  .album-author a {
    display: block;
    width: ${(props) => props.width + 'px'};
    font-size: 12px;
    color: #666;
  }
  .album-title a {
    color: #000;
  }
`;
