// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addBand } from '../actions/addBand';

class BandInput extends Component {

  state = {
    name: ''
  };

  handleOnChange = ({ target }) => {
    // const {name, value} = target;
    this.setState({
      // [name]: value
      name: target.value
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(`state is currently: ${this.state}`);
    // console.log(`event is currently: ${event}`);
    // console.log(this.state);
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput;
