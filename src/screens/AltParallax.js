import React, { Component } from 'react';
import AltParallaxView from '../components/altproductView/AltParallaxView';

class AltParallax extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <AltParallaxView />;
  }
}

export default AltParallax;
