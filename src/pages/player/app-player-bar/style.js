import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-right: 67px;
  height: 63px;
  background-position: 0 10px;
  background-clip: content-box;
  background-repeat: repeat-x;
  .lock-bar {
    position: absolute;
    right: 0;
    width: 67px;
    top: 0;
    bottom: 0;
    background-position: 0 -384px;
    .control-btn {
      width: 16px;
      height: 14px;
      margin-top: 2px;
      margin-left: 17px;
      background-position: -80px -380px;
    }
    .control-btn:hover {
      background-position: -80px -400px;
    }
  }
`;

export const Content = styled.div`
  width: 980px;
  height: 53px;
  margin: 20px auto 0;
  display: flex;
  .player-left-control {
    width: 146px;
    display: flex;
    justify-content: center;
    align-items: center;

    .play-prev,
    .play-next,
    .play-stop {
      width: 28px;
      height: 28px;
      margin-top: -10px;
    }
    .play-prev {
      background-position: -0px -131px;
      margin-left: 35px;
      :hover {
        background-position: -30px -131px;
      }
    }
    .play-stop {
      width: 36px;
      height: 36px;
      margin: -12px 12px 0;
      background-position: -1px
        ${(props) => (props.globalPlayStatus ? '-165px' : '-204px')};
      :hover {
        background-position: -41px
          ${(props) => (props.globalPlayStatus ? '-165px' : '-204px')};
      }
    }
    .play-next {
      background-position: -81px -131px;
      :hover {
        background-position: -111px -131px;
      }
    }
  }
  .play-slider {
    display: flex;
    .song-cover {
      position: relative;
      margin-top: 3px;
      margin-left: 30px;
      img {
        width: 34px;
        height: 35px;
      }
      .mask {
        position: absolute;
        top: 0px;
        left: 0px;
        display: block;
        width: 35px;
        height: 35px;
        background-position: 0px -80px;
      }
    }
    .slider-wrapper {
      width: 580px;
      margin-left: 20px;
      .song-info {
        display: flex;
        a {
          display: block;
        }
        .name {
          max-width: 300px;
          color: #e8e8e8;
          margin-right: 20px;
        }
        .author {
          color: #9b9b9b;
        }
      }
      .slider {
        display: flex;
        align-items: center;
        .slider-item {
          width: 466px;
          height: 9px;
          margin-top: -10px;
          .ant-slider {
            margin: 0;
            //进度条底部样式
          }
          .ant-slider-rail {
            height: 10px;
            background-size: 100% auto;
            background-position: 0px 2px;
            background-color: unset;
            background-image: url(${require('@/assets/img/progress_bar.png')
              .default});
          }
          //缓冲条样式
          .ant-slider-step {
            width: ${(props) => props.loadProgress + '%'};
            height: 10px;
            background-image: url(${require('@/assets/img/progress_bar.png')
              .default});
            background-position: right -28px;
            background-repeat: no-repeat;
          }
          //当前进度条的样式
          .ant-slider-track {
            margin-top: 1px;
            z-index: 1;
            height: 9px;
            background-image: url(${require('@/assets/img/progress_bar.png')
              .default});
            background-position: 0px -65px;
            background-repeat: no-repeat;
            background-color: unset;
          }
          //滑块样式
          .ant-slider-handle {
            z-index: 2;
            width: 24px;
            height: 24px;
            margin-top: -3px;
            background-color: unset;
            background-image: url(${require('@/assets/img/sprite_icon.png')
              .default});
            background-position: 0px -253px;
            border: unset;
            box-shadow: unset;
            :hover {
              background-position: 0px -283px;
            }
          }
        }
        .time {
          margin-left: 15px;
          color: #797979;
          .played {
            color: #a1a1a1;
          }
        }
      }
    }
  }

  .player-right-control {
    margin-left: -10px;
    display: flex;
    align-items: center;
    margin-top: -18px;
    .show-words {
      width: 20px;
      height: 20px;
      background-image: url(${require('@/assets/img/show-word.png').default});
    }
    .show-words:hover {
      background-position: 0px -25px;
    }
    .collection {
      margin-left: 10px;
      width: 20px;
      height: 20px;
      background-position: -90px -163px;
    }
    .collection:hover {
      background-position: -90px -189px;
    }
    .share {
      margin-left: 10px;
      width: 20px;
      height: 20px;
      background-position: -119px -163px;
    }
    .share:hover {
      background-position: -119px -189px;
    }
    .set-voice {
      margin-top: 5px;
      margin-left: 25px;
      width: 20px;
      height: 20px;
      background-position: -5px -250px;
    }
    .set-voice:hover {
      background-position: -34px -250px;
    }
    .change-mode {
      margin-top: 5px;
      margin-left: 10px;
      width: 20px;
      height: 20px;
      background-position: ${(props) =>
        props.modeIcon[props.sequence].showPosition};
    }
    .change-mode:hover {
      background-position: ${(props) =>
        props.modeIcon[props.sequence].hoverPosition};
    }
    .show-lists {
      margin-top: 8px;
      margin-left: 10px;
      width: 55px;
      height: 21px;
      background-position: -46px -72px;
      color: #666;
      padding-left: 25px;
    }
    .show-lists:hover {
      background-position: -46px -102px;
    }
  }
`;

export const LyricTip = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  min-width: 200px;
  height: 40px;
  line-height: 40px;

  text-align: center;
  .lyric {
    color: #fff;
    padding: 8px 20px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    letter-spacing: 5px;
  }
`;
