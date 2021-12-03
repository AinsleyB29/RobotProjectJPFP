import React from 'react';
import { connect } from 'react-redux';
import { fetchRobotsThunk } from '../redux/robots';
import { Link } from 'react-router-dom';
import AddOneRobot from './AddOneRobot';
// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.fetchRobotsThunk();
  }

  render() {
    return (
      <div>
        <h2>Robots</h2>
        {this.props.robots.map((robot) => (
          <div key={robot.id}>
            <Link to={`/robots/${robot.id}`}>
              <p>{robot.name}</p>
            </Link>
            <img src={robot.imageUrl} />
          </div>
        ))}
        <AddOneRobot {...this.props} />
      </div>
    );
  }
}

const mapState = (state) => {
  return { robots: state.robots };
};

const mapDispatch = (dispatch) => {
  return { fetchRobotsThunk: () => dispatch(fetchRobotsThunk()) };
};

export default connect(mapState, mapDispatch)(AllRobots);
