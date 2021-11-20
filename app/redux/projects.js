import axios from 'axios';

export const SET_PROJECTS = 'SET_PROJECTS';

export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
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

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const initialState = { projects: [] };
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return { ...state, projects: action.projects };
    default:
      return state;
  }
}
