import React from 'react';
import { addOneProjectThunk } from '../redux/singleProject';
import { connect } from 'react-redux';

export class AddOneProject extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addOneProjectThunk({ ...this.state });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input name="title" onChange={this.handleChange} />
          <button type="submit">Create!</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addOneProjectThunk: addOneProjectThunk };

export default connect(null, mapDispatchToProps)(AddOneProject);
