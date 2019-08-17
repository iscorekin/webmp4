import * as api from "../../../api/userApi";
import { unsetJWT } from "../../../helpers/routing";

const USER_RECEIVE = 'USER_RECEIVE';
const USER_REQUEST = 'USER_REQUEST';
const USER_REJECT = 'USER_REJECT';
const USER_LOGOUT = 'USER_LOGOUT';

const initialState = {
  isLogged: false,
  loading: false,
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: USER_REQUEST });

  try {
    const { payload } = await api.getUserInfo();
    dispatch({ type: USER_RECEIVE, payload }) 
  }
  catch(err) {
    console.log(err);
    dispatch({ type: USER_REJECT });
  }
};

export const loginOrRegister = (login, password, isLogin = true) => async (dispatch) => {
  dispatch({ type: USER_REQUEST });
  const apiAction = isLogin ? api.login : api.register;

  try {
    const { payload } = await apiAction(login, password);
    dispatch({ type: USER_RECEIVE, payload }) 
  }
  catch(err) {
    console.log(err);
    dispatch({ type: USER_REJECT });
  }
};

export const logout = () => async (dispatch) => {
  unsetJWT();
  dispatch({ type: USER_LOGOUT })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loading: true, };
    case USER_RECEIVE: 
      return { ...state, ...action.payload, loading: false, isLogged: true };
    case USER_REJECT: 
      return { ...state, loading: false };
    case USER_LOGOUT: 
      return { ...initialState }
    default:
      return state;
  }
}