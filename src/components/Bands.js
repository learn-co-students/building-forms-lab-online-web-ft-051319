import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class Bands extends Component {
  renderBands() {
    return (this.props.bands.map(band=><li>{band.name}</li>))
  }
  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    )
  }
}
export default Bands;
