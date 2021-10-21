import styled from 'styled-components';

export const PanelWrapper = styled.div`
  visibility: ${(props) => (props.panelShow ? 'visible' : 'hidden')};
  position: fixed;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%);
  width: 989px;
  height: 300px;
`;

export const PanelHeader = styled.div`
  height: 41px;
  background-image: url(${require('@/assets/img/playpanel_bg.png').default});
  display: flex;
`;

export const PanelHeaderLeft = styled.div`
  width: 553px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .play-list {
    line-height: 41px;
    color: #e2e2e2;
    font-size: 14px;
    font-weight: bold;
  }
  .icon-list {
    .collect-all {
      padding: 0 10px;
      color: #ccc;
      .icon {
        display: inline-block;
        width: 18px;
        height: 17px;
        background-position: -24px 3px;
        margin-right: 5px;
        vertical-align: sub;
      }
      :hover {
        color: #e2e2e2;
        .icon {
          background-position: -24px -17px;
        }
      }
    }
    .delete {
      padding: 0 10px;
      color: #ccc;
      .icon {
        display: inline-block;
        width: 18px;
        height: 17px;
        background-position: -50px 3px;
        margin-right: 5px;
        vertical-align: sub;
      }
      :hover {
        color: #e2e2e2;
        .icon {
          background-position: -50px -17px;
        }
      }
    }
  }
`;
export const PanelHeaderRight = styled.div`
  flex: 1;
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 14px;
  line-height: 41px;
  .title {
    width: 80%;
    margin: 0 auto;
  }
  .icon {
    position: absolute;
    top: 6px;
    right: 8px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
    background-position: -195px 9px;
  }
`;
export const PanelContentWrapper = styled.div`
  height: calc(100% - 41px);
  background-image: url(${require('@/assets/img/playpanel_bg.png').default});
  background-position: -1014px 0;
  background-repeat: repeat-y;
  padding: 0 5px;
  //面板虚化图片背景
  .cover {
    position: absolute;
    z-index: 0;
    width: 980px;
    height: 259px;
    opacity: 0.2;
    overflow: none;
    -webkit-filter: blur(15px);
    filter: blur(15px);
  }
`;

export const PanelContent = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  background-color: rgba(0, 0, 0, 0);
`;

//设置进度条样式

const CustomScroll = styled.div`
  ::-webkit-scrollbar {
    top: -20px;
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

export const PanelContentLeft = styled(CustomScroll)`
  width: 555px;
  overflow-y: scroll;
  .item {
    line-height: 28px;
    display: flex;
    color: #ccc;
    cursor: pointer;
    .is-play-icon {
      margin-left: 5px;
      width: 12px;
    }
    .name {
      width: 256px;
      padding-left: 5px;
    }
    .control-icon {
      width: 88px;
      margin-left: 10px;
    }
    .author {
      margin-left: 10px;
      width: 80px;
    }
    .time {
      margin-left: 10px;
      width: 35px;
    }
    .from-icon {
      width: 14px;
      background-position: -101px 8px;
      margin-left: 18px;
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
    }
  }
  .active {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    .is-play-icon {
      background-position: -181px 8px;
    }
  }
`;

export const PanelContentRight = styled.div`
  flex: 1;
  height: 100%;
`;
