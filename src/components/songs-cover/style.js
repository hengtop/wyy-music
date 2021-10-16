import styled from 'styled-components';

export const SongsCoverWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .cover-img {
    position: relative;
    width: 140px;
    height: 140px;
    margin-bottom: 5px;

    img {
      width: 100%;
      height: 100%;
    }

    .filter-cover {
      background-position: 0 0;
    }
    .constrol-info {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: unset;
      height: 27px;
      background-position: 0 -537px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      text-indent: unset;
      .playCount {
        color: #ccc;
        padding-top: 3px;
        i {
          background-position: 0px -23px;
          padding-left: 18px;
        }
      }
      .play-btn {
        width: 16px;
        height: 17px;
        display: block;
        color: #ccc;
        background-position: 0 0px;
      }
      .play-btn:hover {
        background-position: 0 -60px;
      }
    }
  }
  .title {
    width: 140px;
    color: #000;
    font-size: 14px;
    margin-bottom: 30px;
  }
`;
