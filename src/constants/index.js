export const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

// PROTECT YOUR API KEY BY SETTING `API restrictions` ON GOOGLE CONSOLE
export const { YOUTUBE_API_KEY } = process.env;

export default {
  YOUTUBE_BASE_URL,
  YOUTUBE_API_KEY,
};
