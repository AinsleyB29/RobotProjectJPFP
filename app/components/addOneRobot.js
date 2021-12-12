import React from 'react';
import { connect } from 'react-redux';
import { addOneRobotThunk } from '../redux/robots';

export class AddOneRobot extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      imageUrl: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    console.log("This is the event target's value", event.target);
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addOneRobotThunk({ ...this.state });
  }
  render() {
    // const { name } = this.state;
    // const { handleSubmit, handleChange } = this.state;
    return (
      <div>
        <h1>Add A New Robot</h1>
        <form id="add-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Robot Name</label>
          <input
            name="name"
            required={true}
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
          />
          <label htmlFor="image-url">Image Url</label>
          <input
            name="imageUrl"
            required={true}
            value={this.state.imageUrl}
            onChange={this.handleChange.bind(this)}
          />
          <label htmlFor="fuel-type">Fuel Type:</label>

          <select name="fuel-type" id="fuel-type">
            <option value="electric">Electric</option>
            <option value="gas">Gas</option>
            <option value="diesel">Diesel</option>
          </select>
          <button type="submit" disabled={!this.state.name} id="addButton">
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
