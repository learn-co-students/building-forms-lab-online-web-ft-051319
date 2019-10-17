// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import manageBand from '../reducers/manageBand'


class BandInput extends Component {
  state = {
    name:'',
  }
  handleInputChange = event => {
    console.log(event.target.value)
    const {value, name } = event.target
    this.setState({[name]: value})
  }
  handleSubmit = event =>{
    event.preventDefault();
    this.props.addBand({name: this.state.name})

  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          Band Input
          <input className="band-input" name="name" value={this.state.name} onChange={this.handleInputChange}/>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}


export default BandInput
