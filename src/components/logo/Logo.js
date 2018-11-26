import React, { Component } from 'react';
import { Image } from 'react-native';
import logoImg from '../../assets/img/logo.png';

class Logo extends Component {
  render() {
    return <Image source={logoImg} style={{ width: 100, height: 20 }} />;
  }
}

export default Logo;

/* source={require('../../assets/img/logo.png')} */
