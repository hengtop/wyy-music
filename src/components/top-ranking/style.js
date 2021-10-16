import styled from 'styled-components';

export const RankingWrapper = styled.div`
  width: 230px;
  .top-header {
    display: flex;
    .cover-img {
      width: 80px;
      height: 80px;
      margin: 20px 0 0 20px;
      position: relative;
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background: url(${require('@/assets/img/coverall.png').default})
          no-repeat -145px -57px;
        background-position: -145px -57px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right-control {
      padding: 25px 10px 0;
      a h3 {
        font-weight: bold;
        color: #333;
      }
      .play-icon,
      .add-icon {
        display: inline-block;
        width: 22px;
        height: 22px;
      }
      .play-icon {
        margin: 8px 10px 0 0;
        background-position: -267px -205px;
      }
      .add-icon {
        background-position: -298px -205px;
      }
      .play-icon:hover {
        background-position: -267px -235px;
      }
      .add-icon:hover {
        background-position: -298px -235px;
      }
    }
  }
  .top-list {
    margin-top: 20px;
    .item {
      display: flex;
      width: 230px;
      height: 32px;
      line-height: 32px;
      .grade {
        width: 35px;
        font-size: 16px;
        color: #666;
        margin: 0 0px 0 20px;
        text-align: center;
      }
      .title {
        display: inline-block;
        flex: 1;
        text-align: left;
        a {
          width: 100%;
          display: block;
          color: #000;
        }
      }
      &:nth-child(-n + 3) .grade {
        color: #c10d0c;
      }
      .control-icon {
        display: none;
        flex: 1;
        i {
          display: inline-block;
          margin-top: 8px;
          width: 17px;
          height: 17px;
          margin: 8px 5px 0;
        }
        .play-icon {
          background-position: -267px -268px;
        }
        .get-icon {
          background-position: 0 -698px;
        }
        .add-icon {
          background-position: -297px -268px;
        }
        .play-icon:hover {
          background-position: -267px -288px;
        }
        .get-icon:hover {
          background-position: -22px -698px;
        }
        .add-icon:hover {
          background-position: -297px -288px;
        }
      }
    }
    .item:hover .control-icon {
      display: block;
    }
  }
  .top-footer {
    margin-right: 20px;
    text-align: right;
    a {
      line-height: 32px;
      font-size: 12px;
      color: #000;
    }
  }
`;
