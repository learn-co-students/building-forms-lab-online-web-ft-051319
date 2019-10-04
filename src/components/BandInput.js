// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {

  constructor(){
    super()
    this.state={
      name: ''
    }
  }

  handleOnChange=event=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit=event=>{
    event.preventDefault()
    let newBand=this.state
    this.props.addBand(newBand)
    this.setState({
      name:''
    })
  }

  render() {
    return(
      <div>
        <form className="band-form" onSubmit={this.handleOnSubmit}>
          <label>Band Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
