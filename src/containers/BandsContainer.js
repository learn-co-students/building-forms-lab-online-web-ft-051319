import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {

    const bands = this.props.bands.map((band, idx) => {
      return <li key={idx}>{band.name}</li>;
    });


    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {bands}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })


// const mapStateToProps = state => {
//   return {
//     bands: state.bands
//   };
// };


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
