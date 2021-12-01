import axios from 'axios';

export const SET_PROJECTS = 'SET_PROJECTS';

export const ADD_ONE_PROJECT = 'ADD_ONE_PROJECT';

export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};

export const addOneProject = (project) => {
  return {
    type: ADD_ONE_PROJECT,
    project,
  };
};

export const fetchProjectsThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/projects');
      dispatch(setProjects(data));
    } catch (error) {
      console.error('Unable to retrieve all projects');
    }
  };
};

export const addOneProjectThunk = (project, history) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post('/api/projects', project);
      dispatch(addOneProject(created));
      history.push('/projects');
    } catch (error) {
      console.error(error);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const initialState = [];
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    case ADD_ONE_PROJECT:
      return [...state, action.project];
    default:
      return state;
  }
}
