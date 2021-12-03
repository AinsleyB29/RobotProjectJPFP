import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProjectThunk } from '../redux/singleProject';
import { Link } from 'react-router-dom';

export class singleProject extends React.Component {
  componentDidMount() {
    this.props.fetchSingleProjectThunk(this.props.match.params.projectId);
  }

  render() {
    return (
      <div>
        <h1>Project</h1>
        <div>
          <p>{this.props.project.title}</p>
          <p>{this.props.project.deadline}</p>
          <p>{this.props.project.priority}</p>
          <p>{this.props.project.description}</p>
        </div>
        <h1>Robots</h1>
        {this.props.project.Robots && this.props.project.Robots.length > 0 ? (
          this.props.project.Robots.map((robot) => (
            <div key={robot.id}>
              <Link to={`/robots/${robot.id}`}>
                <p>{robot.name}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>'Damn, where ya robots at?'</p>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return { project: state.project };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSingleProjectThunk: (projectId) =>
      dispatch(fetchSingleProjectThunk(projectId)),
  };
};

export default connect(mapState, mapDispatch)(singleProject);
