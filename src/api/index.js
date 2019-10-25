import axios from 'axios';
import { YOUTUBE_BASE_URL } from '../constants';

const api = axios.create({
  baseURL: YOUTUBE_BASE_URL,
});

export default api;
