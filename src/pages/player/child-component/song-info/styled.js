/*
 * @Date: 2021-11-04 15:17:20
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-04 19:20:28
 */
import styled from 'styled-components';

export const SongInfoWrapper = styled.div`
  display: flex;
  .left {
    .generator-link {
      margin-top: 20px;
      text-align: center;
      a {
        color: #0c73c2;
      }
    }
  }
  .right {
    flex: 1;
    margin-left: 25px;
  }
`;

export const SongCover = styled.div`
  width: 206px;
  height: 205px;
  position: relative;
  .song-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: -140px -580px;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const SongControl = styled.div`
  .song-title {
    display: flex;
    align-items: center;
    .title-icon {
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
      text-indent: -9999px;
      vertical-align: sub;
    }
    .title {
      font-size: 24px;
      color: #333;
      margin-left: 7px;
    }
  }
  .singer,
  .album {
    margin: 10px 0;
    a {
      color: #0c73c2;
    }
  }
  .control-btn {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    div:first-of-type {
      display: flex;
      align-items: center;
      a:nth-of-type(1) {
        display: inline-block;
        width: 66px;
        height: 31px;
        background-position: right -428px;
        &:hover {
          background-position: right -510px;
          i {
            background-position: 0 -469px;
            em {
              background-position: -28px -1622px;
            }
          }
        }
        i {
          display: inline-block;
          width: 61px;
          height: 31px;
          background-position: 0 -387px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          em {
            width: 20px;
            height: 18px;
            background-position: 0 -1622px;
            margin-right: 2px;
          }
        }
      }
      a:nth-of-type(2) {
        display: inline-block;
        width: 31px;
        height: 31px;
        background-position: 0 -1588px;
        position: relative;
        left: -5px;
        text-indent: -9999px;
        &:hover {
          background-position: -40px -1588px;
        }
        i {
          display: inline-block;
          width: 61px;
          height: 31px;
          background-position: 0 -387px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
      }
    }
    div:nth-of-type(2) {
      a {
        display: inline-block;
        width: 66px;
        height: 31px;
        background-position: right -1020px;
        text-decoration: none;
        &:hover {
          background-position: right -1106px;
          i {
            background-position: 0 -1063px;
          }
        }
        i {
          display: inline-block;
          width: 61px;
          height: 31px;
          background-position: 0 -977px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 25px;
          color: #333;
        }
      }
    }
    div:nth-of-type(3) {
      a {
        display: inline-block;
        width: 66px;
        height: 31px;
        background-position: right -1020px;
        text-decoration: none;
        &:hover {
          background-position: right -1106px;
          i {
            background-position: 0 -1268px;
          }
        }
        i {
          display: inline-block;
          width: 61px;
          height: 31px;
          background-position: 0 -1225px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 25px;
          color: #333;
        }
      }
    }
    div:nth-of-type(4) {
      a {
        display: inline-block;
        width: 66px;
        height: 31px;
        background-position: right -1020px;
        text-decoration: none;
        &:hover {
          background-position: right -1106px;
          i {
            background-position: 0 -2805px;
          }
        }
        i {
          display: inline-block;
          width: 61px;
          height: 31px;
          background-position: 0 -2761px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 25px;
          color: #333;
        }
      }
    }
    div:nth-of-type(5) {
      a {
        display: inline-block;
        width: 79.8px;
        height: 31px;
        background-position: right -1020px;
        text-decoration: none;
        &:hover {
          background-position: right -1106px;
          i {
            background-position: 0 -1508px;
          }
        }
        i {
          display: inline-block;
          width: 74.8px;
          height: 31px;
          background-position: 0 -1465px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 25px;
          color: #333;
        }
      }
    }
  }
`;

export const SongLyric = styled.div`
  margin: 30px 0 0 10px;
  .lyric-str {
    height: ${(props) => (props.isCollapse ? '318px' : 'auto')};
    overflow: hidden;
    li {
      font-size: 12px;
      padding: 2px 0;
    }
  }
  .collapse {
    color: #0c73c2;
    cursor: pointer;
    .icon {
      margin-left: 5px;
      display: inline-block;
      width: 11px;
      height: 8px;
      background-position: ${(props) =>
        props.isCollapse ? ' -65px -520px' : ' -45px -520px'};
    }
  }
`;
