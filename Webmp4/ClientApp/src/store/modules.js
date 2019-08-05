import { combineReducers } from 'redux';
import videosList from './modules/videosList';

export default {
  videos: combineReducers({
    videosList,
  })
};
