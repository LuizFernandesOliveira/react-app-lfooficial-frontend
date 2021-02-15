import { REQ_PROJECTS, REQ_PROJECTS_SUCCESS, REQ_PROJECTS_FAILURE } from './action';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: "",
};

export const projects = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQ_PROJECTS:
      return { ...state, isFetching: true };
    case REQ_PROJECTS_SUCCESS:
      return { ...state, isFetching: false, data: action.projects };
    case REQ_PROJECTS_FAILURE:
      return { ...state, isFetching: false, error: action.error};
    default:
      return state;
  }
};