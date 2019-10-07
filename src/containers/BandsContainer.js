import React, { Component } from 'react';
import {connect} from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map(band=><li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch =>({
  addBand: band=>dispatch({type:"ADD_BAND",band})
})

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
