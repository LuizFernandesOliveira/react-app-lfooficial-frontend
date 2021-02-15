import {fetchProjects} from '../../services/api';

export const REQ_PROJECTS = 'REQ_PROJECTS';
export const REQ_PROJECTS_SUCCESS = 'REQ_PROJECTS_SUCCESS';
export const REQ_PROJECTS_FAILURE = 'REQ_PROJECTS_FAILURE';

const requestProjects = () => ({
  type: REQ_PROJECTS,
});

const requestProjectsSuccess = (projects) => ({
  type: REQ_PROJECTS_SUCCESS,
  projects,
});

const requestProjectsFailure = (error) => ({
  type: REQ_PROJECTS_FAILURE,
  error,
});

export const getProjects = () => (dispatch) => {
  dispatch(requestProjects());
  return fetchProjects()
    .then((response) => dispatch(requestProjectsSuccess(response)))
    .catch((error) => dispatch(requestProjectsFailure(error)));
};