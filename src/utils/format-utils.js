import dayjs from 'dayjs';

//处理数字展示
export const getCount = (count) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
};

//获取指定尺寸的图片

export const getSizeImg = (imageUrl, x, y = x) => {
  return `${imageUrl}?param=${x}x${y}`;
};

//处理歌曲时长
//将事件戳转换为对应的时分秒格式
export const formatTimestamp = (time) => {
  time = Number(time);
  //小于一小时
  if (time < 3600000) {
    return dayjs(time).format('mm:ss');
  } else {
    return dayjs(time).format('hh:mm:ss');
  }
};

//处理播放歌曲的url
export const getPlaySongUrl = (id) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

//处理图片虚化
export const getBlurImg = (url, x, y) => {
  return url + `?imageView&blur=${x}x${y}`;
};
