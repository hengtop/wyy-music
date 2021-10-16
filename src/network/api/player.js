import reactRequest from '@/network';

//获取歌曲详情
export const getSongDetail = (ids) => {
  return reactRequest.request({
    method: 'GET',
    url: '/song/detail',
    params: {
      ids
    }
  });
};

//获取歌曲歌词
export const getSongLyric = (id) => {
  return reactRequest.request({
    method: 'GET',
    url: '/lyric',
    params: {
      id
    }
  });
};
