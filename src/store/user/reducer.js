import { REQ_USER, REQ_USER_SUCCESS, REQ_USER_FAILURE } from './action';

const INITIAL_STATE = {
  data: {},
  isFetching: false,
  error: "",
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQ_USER:
      return { ...state, isFetching: true };
    case REQ_USER_SUCCESS:
      return { ...state, isFetching: false, data: action.user };
    case REQ_USER_FAILURE:
      return { ...state, isFetching: false, error: action.error};
    default:
      return state;
  }
};