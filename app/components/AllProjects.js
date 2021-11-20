import React from 'react';
import { connect } from 'react-redux';
import { fetchProjectsThunk } from '../redux/projects';
import { Link } from 'react-router-dom';

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.fetchProjectsThunk();
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div>
          {this.props.projects.map((project) => (
            <div key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <p>{project.title}</p>
                <p>{project.deadline}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return state.projects;
};

const mapDispatch = (dispatch) => {
  return { fetchProjectsThunk: () => dispatch(fetchProjectsThunk()) };
};

export default connect(mapState, mapDispatch)(AllProjects);
