import axios from 'axios';

export const SET_ROBOTS = 'SET_ROBOTS';

export const ADD_ONE_ROBOT = 'ADD_ONE_ROBOT';

const setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots,
  };
};

export const addOneRobot = (robot) => {
  return {
    type: ADD_ONE_ROBOT,
    robot,
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

export const addOneRobotThunk = (robot) => {
  return async (dispatch) => {
    try {
      const data = await axios.post(`api/robots`, robot);
      dispatch(addOneRobot(data));
    } catch (error) {
      console.error('Unable to add single robot');
    }
  };
};
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const initialState = [];
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return action.robots;
    case ADD_ONE_ROBOT:
      return [...state, action.robot];
    default:
      return state;
  }
}
