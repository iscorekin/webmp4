import { getVideos } from "../../../api/videosApi";

const VIDEOS_LIST_REQUEST = 'VIDEOSLIST/REQUEST';
const VIDEOS_LIST_RECEIVE = 'VIDEOSLIST/RECIVE';
const VIDEOS_LIST_REJECT = 'VIDEOSLIST/REJECT';

const VIDEOS_LIST_CHANGE_PAGE = 'VIDEOSLIST/CHANGE_PAGE';

const initialState = {
  loading: false,
  list: [],
  count: undefined,
  page: 0,
  limit: 10,
};

export const getVideosList = () => async (dispatch, getState) => {
  const { page, limit } = getState().videos.videosList;
  dispatch({ type: VIDEOS_LIST_REQUEST });

  try {
    const response = await getVideos({ page, limit });
    dispatch({ type: VIDEOS_LIST_RECEIVE, payload: response })
  }
  catch(err) {
    console.log(err);
    dispatch({ type: VIDEOS_LIST_REJECT });
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case VIDEOS_LIST_REQUEST:
      return { ...state, loading: true };
    case VIDEOS_LIST_RECEIVE:
      return { ...state, loading: false, list: action.payload };
    case VIDEOS_LIST_REJECT:
      return { ...state, loading: false };
    case VIDEOS_LIST_CHANGE_PAGE: 
      return { ...state, page: action.page, limit: action.limit }
    default: 
      return state;
  }
}