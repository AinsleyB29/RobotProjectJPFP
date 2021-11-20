import axios from 'axios';

export const GET_ONE_PROJECT = 'GET_ONE_PROJECT';

export const getOneProject = (project) => {
  return {
    type: GET_ONE_PROJECT,
    project,
  };
};

export const fetchSingleProjectThunk = (projectId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/projects/${projectId}`);
      console.log('This is the thunk data', data);
      dispatch(getOneProject(data));
    } catch (error) {
      console.error('Unable to retrieve single project');
    }
  };
};

const initialState = { project: {} };
export default function singleProjectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_PROJECT:
      return { ...state, project: action.project };
    default:
      return state;
  }
}
