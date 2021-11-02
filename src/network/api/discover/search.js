import reactRequest from '@/network';

export const searchInfoByKeywords = (keywords, queryInfo = {}, type = 1) => {
  return reactRequest.request({
    method: 'GET',
    url: '/search',
    params: {
      keywords,
      type,
      ...queryInfo
    }
  });
};
