import React, { Component } from 'react';

import ProductComp from '../components/product/ProductComp';

export default class Product extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <ProductComp />;
  }
}
