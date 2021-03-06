import { videosApi } from './index';
import { generateParams } from '../helpers/routing';

export const getVideos = async (params) => {
  const response = await videosApi.get(`/list?${generateParams(params)}`);
  
  return response.data;
}