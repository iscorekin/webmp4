import * as api from "../../../api/userApi";

const USER_RECEIVE = 'USER_RECEIVE';
const USER_REQUEST = 'USER_REQUEST';
const USER_REJECT = 'USER_REJECT';

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

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loading: true, };
    case USER_RECEIVE: 
      return { ...state, ...action.payload };
    case USER_REJECT: 
      return { ...state, loading: false };
    default:
      return state;
  }
}