import axios from 'axios';
import { agent } from 'superagent';

export const setProjects = (projects) => {
  return {
    type: 'SET_PROJECTS',
    projects,
  };
};

export function createSetProjectsError(error) {
  return { type: 'SET_PROJECTS_ERROR', error };
}

export const fetchProjectsThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/projects');
      dispatch(setProjects(data));
    } catch (error) {
      dispatch(createSetProjectsError(error));
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer(projects = [], action) {
  switch (action.type) {
    case 'SET_PROJECTS':
      return [...projects, action.item];
    default:
      return projects;
  }
}
