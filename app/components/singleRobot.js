import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleRobotThunk } from '../redux/singleRobot';

export class singleRobot extends React.Component {
  componentDidMount() {
    this.props.fetchSingleRobotThunk(this.props.match.params.robotId);
  }

  render() {
    return (
      <div>
        <h1>Robot</h1>
        <div>
          <p>{this.props.robot.name}</p>
          <img src={this.props.robot.imageUrl} />
          <p>{this.props.robot.fuelType}</p>
          <p>{this.props.robot.fuelLevel}</p>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return state.robot;
};

const mapDispatch = (dispatch) => {
  return {
    fetchSingleRobotThunk: (robotId) =>
      dispatch(fetchSingleRobotThunk(robotId)),
  };
};

export default connect(mapState, mapDispatch)(singleRobot);
