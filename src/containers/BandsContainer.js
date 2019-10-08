import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    
    return(
      <div>
        <BandInput />
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band}</li>)}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => ({ bands: state.bands })

export default connect(mapStateToProps)(BandsContainer)