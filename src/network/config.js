const devBaseURL = 'http://123.207.32.32:9001';
const proBaseURL = 'http://123.207.32.32:9001';

//url
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

//超时时间
export const TIMEOUT = 5000;
