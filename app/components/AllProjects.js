import React from 'react';
import { connect } from 'react-redux';
import { fetchProjectsThunk } from '../redux/projects';
import { Link } from 'react-router-dom';
import AddOneProject from '../components/AddOneProject';

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.fetchProjectsThunk();
  }

  render() {
    console.log('this is this.props inside of AllProjects:', this.props);
    return (
      <div>
        <h2>Projects</h2>
        <div>
          {this.props.projects.map(
            // eslint-disable-next-line no-confusing-arrow
            (project) =>
              project ? (
                <div key={project.id}>
                  <Link to={`/projects/${project.id}`}>
                    <p>{project.title}</p>
                    <p>{project.deadline}</p>
                  </Link>
                </div>
              ) : (
                ''
              )
            // eslint-disable-next-line function-paren-newline
          )}
        </div>
        <AddOneProject {...this.props} />
      </div>
    );
  }
}

const mapState = (state) => {
  return { projects: state.projects };
};

const mapDispatch = (dispatch) => {
  return { fetchProjectsThunk: () => dispatch(fetchProjectsThunk()) };
};

export default connect(mapState, mapDispatch)(AllProjects);
