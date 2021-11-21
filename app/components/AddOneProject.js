import React from 'react';
import { addOneProjectThunk } from '../redux/singleProject';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

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
    // const { Name } = this.state;
    console.log('this is this.state', this.state);
    // const { title } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input name="title" onChange={this.handleChange} />
          {/* <input
            deadline="deadline"
            onChange={this.handleChange}
            value={this.deadline} */}
          {/* /> */}
          <button type="submit">Create!</button>
          {/* <Link to="/">Cancel</Link> */}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addOneProjectThunk: addOneProjectThunk };

export default connect(null, mapDispatchToProps)(AddOneProject);

/* <Link to="/">Cancel</Link> */
