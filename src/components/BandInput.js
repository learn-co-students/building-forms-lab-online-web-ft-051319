// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {

    state = {
  //set up a controlled form with internal state
        name: ''
    }

    handleOnChange = event => {
      // Handle Updating Component State
      this.setState({
        name: event.target.value
      });
    }

    handleOnSubmit = event => {
      // Handle Form Submit event default
      event.preventDefault();
      // Create quote object from state
      // Pass quote object to action creator
      this.props.addBand(this.state)
      // Update component state to return to default state
      this.setState ({
          name: ''
      })
    }
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
            <label>Band Name</label>
              <input
                type="text"
                onChange={this.handleOnChange}
                value={this.state.author}
              />
              <button type="submit">Add</button>
          </form>
      </div>
    )
  }
}

export default BandInput
