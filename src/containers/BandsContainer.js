import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  showBands = () => {
    return <ul>{
      this.props.bands.map(band => {
        return <li key={this.props.bands.indexOf(band)}>{band.name}</li>
      })
    }</ul>
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.showBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps: ", state)

  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
