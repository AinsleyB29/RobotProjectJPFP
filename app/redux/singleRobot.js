import axios from 'axios';

export const GET_ONE_ROBOT = 'GET_ONE_ROBOT';

// export const ADD_ONE_ROBOT = 'ADD_ONE_ROBOT';

export const getOneRobot = (robot) => {
  return {
    type: GET_ONE_ROBOT,
    robot,
  };
};

// export const addOneRobot = (robot) => {
//   return {
//     type: ADD_ONE_ROBOT,
//     robot,
//   };
// };

export const fetchSingleRobotThunk = (robotId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/robots/${robotId}`);
      dispatch(getOneRobot(data));
    } catch (error) {
      console.error('Unable to retrieve single robot');
    }
  };
};

// export const addOneRobotThunk = (robot) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(`api/robots/${robot}`);
//       dispatch(addOneRobot(data));
//     } catch (error) {
//       console.error('Unable to add single robot');
//     }
//   };
// };

const initialState = {};
export default function singleRobotReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_ROBOT:
      return action.robot;
    default:
      return state;
  }
}
