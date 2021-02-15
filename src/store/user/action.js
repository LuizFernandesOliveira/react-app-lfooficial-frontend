import {fetchUser} from '../../services/api';

export const REQ_USER = 'REQ_USER';
export const REQ_USER_SUCCESS = 'REQ_USER_SUCCESS';
export const REQ_USER_FAILURE = 'REQ_USER_FAILURE';

const requestUser = () => ({
  type: REQ_USER,
});

const requestUserSuccess = (user) => ({
  type: REQ_USER_SUCCESS,
  user,
});

const requestUserFailure = (error) => ({
  type: REQ_USER_FAILURE,
  error,
});

export const getUser = () => (dispatch) => {
  dispatch(requestUser());
  return fetchUser()
    .then((response) => dispatch(requestUserSuccess(response)))
    .catch((error) => dispatch(requestUserFailure(error)));
};
