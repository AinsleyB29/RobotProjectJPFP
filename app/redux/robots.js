import axios from 'axios';

export const SET_ROBOTS = 'SET_ROBOTS';

const setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots,
  };
};

export const fetchRobotsThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/robots');
      dispatch(setRobots(data));
    } catch (error) {
      console.error(error);
    }
  };
};
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const initialState = { allRobots: [] };
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return { ...state, allRobots: action.robots };
    default:
      return state;
  }
}
