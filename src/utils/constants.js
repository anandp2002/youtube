const API_KEY = 'AIzaSyBSvDY5cOexh5yHDpnoDHa99l2KN_PdAYU';

export const YOUTUBE_VIDEO_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_COMMENTS_API =
  'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&key=' +
  API_KEY +
  '&videoId=';
