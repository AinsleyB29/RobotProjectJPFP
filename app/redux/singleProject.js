import axios from 'axios';

export const GET_ONE_PROJECT = 'GET_ONE_PROJECT';

export const ADD_ONE_PROJECT = 'ADD_ONE_PROJECT';

export const getOneProject = (project) => {
  return {
    type: GET_ONE_PROJECT,
    project,
  };
};

export const addOneProject = (addProject) => {
  return {
    type: ADD_ONE_PROJECT,
    addProject,
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

export const addOneProjectThunk = (project) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post('/api/projects', project);
      console.log('This is the thunk data for adding a project', created);
      dispatch(addOneProject(created));
    } catch (error) {
      console.error('Unable to add one project');
    }
  };
};

const initialState = { project: {} };
export default function singleProjectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_PROJECT:
      return { ...state, project: action.project };
    case ADD_ONE_PROJECT:
      return { ...state, project: action.addProject };
    default:
      return state;
  }
}
