import React, { Component } from 'react';

import ProductsComp from '../components/product/ProductsComp';

export default class Products extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <ProductsComp />;
  }
}
