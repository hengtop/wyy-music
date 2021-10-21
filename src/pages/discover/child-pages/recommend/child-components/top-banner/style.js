import styled from 'styled-components';

export const TopBannerWraper = styled.div`
  width: 100%;
  min-width: 980px;
  height: 285px;
  background-image: url(${(props) => props.bgImage});
  background-size: 6000px;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBannerLeft = styled.div`
  position: relative;
  width: 730px;
  height: 100%;

  //图片
  .item {
    width: 730px;
    height: 285px;
    img {
      width: 730px;
      height: 285px;
    }
  }
  //设置箭头样式
  .arrow-prev,
  .arrow-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    font-size: 30px;
    color: #fff;
  }
  .arrow-prev:hover,
  .arrow-next:hover {
    background-color: rgba(204, 204, 204, 0.2);
  }
  .arrow-prev {
    transform: translateX(-150%) translateY(-50%);
  }
  .arrow-next {
    left: 980px;
    transform: translateX(50%) translateY(-50%);
  }

  //切换点的样式
  .slick-dots.slick-dots-bottom li button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.8;
  }
  .slick-dots.slick-dots-bottom li button:hover {
    background-color: #ccc;
    opacity: 1;
  }
  .ant-carousel .slick-dots li,
  .ant-carousel .slick-dots li.slick-active {
    width: 10px;
  }
  .ant-carousel .slick-dots li.slick-active button {
    width: 10px;
    background-color: var(--themeColor);
  }
`;

export const TopBannerRight = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  background-image: url(${require('@/assets/img/download.png').default});
  .download-btn {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background-position: 0 9999px;
    text-indent: -9999px;
    background-position: 254px 63px;
  }
  .download-btn:hover {
    background-image: url(${require('@/assets/img/download.png').default});
  }
  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
`;
