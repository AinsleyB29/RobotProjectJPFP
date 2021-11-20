import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProjectThunk } from '../redux/singleProject';

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
      </div>
    );
  }
}

const mapState = (state) => {
  return state.project;
};

const mapDispatch = (dispatch) => {
  return {
    fetchSingleProjectThunk: (projectId) =>
      dispatch(fetchSingleProjectThunk(projectId)),
  };
};

export default connect(mapState, mapDispatch)(singleProject);
