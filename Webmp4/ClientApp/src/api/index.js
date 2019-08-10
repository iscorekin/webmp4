import Axios from 'axios';
import { JWT } from '../constants/env';

export const api = Axios.create({
  baseURL: '/api',
  headers: {
    'authorization': JWT ? `Bearer ${JWT}` : '',
  }
});

export const videosApi = Axios.create({
  baseURL: '/api/videos',
  headers: {
    'Authorization': JWT ? `Bearer ${JWT}` : '',
  }
});

export const userApi = Axios.create({
  baseURL: '/api/user',
  header: {
    'Authorization': JWT ? `Bearer ${JWT}` : '',
  }
})