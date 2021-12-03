import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleRobotThunk } from '../redux/singleRobot';
import { Link } from 'react-router-dom';

export class singleRobot extends React.Component {
  componentDidMount() {
    this.props.fetchSingleRobotThunk(this.props.match.params.robotId);
  }

  render() {
    console.log(
      'these are the props for robot.projects',
      this.props.robot.Projects
    );
    return (
      <div>
        <h1>Robot</h1>
        <div>
          <p>{this.props.robot.name}</p>
          <img src={this.props.robot.imageUrl} />
          <p>{this.props.robot.fuelType}</p>
          <p>{this.props.robot.fuelLevel}</p>
        </div>
        <h1>Projects</h1>
        {this.props.robot.Projects && this.props.robot.Projects.length > 0 ? (
          this.props.robot.Projects.map((project) => (
            <div key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <p>{project.title}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>'No projects huh :/'</p>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return { robot: state.robot };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSingleRobotThunk: (robotId) =>
      dispatch(fetchSingleRobotThunk(robotId)),
  };
};

export default connect(mapState, mapDispatch)(singleRobot);
