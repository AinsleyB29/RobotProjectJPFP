import React from 'react';
import { connect } from 'react-redux';
import { fetchRobotsThunk } from '../redux/robots';
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
        {this.props.allRobots.map((robot) => (
          <div key={robot.id}>
            <p>{robot.name}</p>
            <img src={robot.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return state.robots;
};

const mapDispatch = (dispatch) => {
  return { fetchRobotsThunk: () => dispatch(fetchRobotsThunk()) };
};

export default connect(mapState, mapDispatch)(AllRobots);
