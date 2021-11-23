import React from 'react';
import { connect } from 'react-redux';
import { addOneRobotThunk } from '../redux/robots';

export class AddOneRobot extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addOneRobotThunk({ ...this.state });
  }
  render() {
    const { name } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <h1>Add A New Robot</h1>
        <form id="add-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Robot Name</label>
          <input
            name="name"
            required={true}
            value={name}
            onChange={handleChange}
          />
          <button type="submit" disabled={!name} id="addButton">
            Add Robot
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch, { history }) => {
  return {
    addOneRobotThunk: (robot) => {
      dispatch(addOneRobotThunk(robot, history));
    },
  };
};

export default connect(null, mapDispatch)(AddOneRobot);
