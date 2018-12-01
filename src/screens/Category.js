import React, { Component } from 'react';

import CategoryComp from '../components/category/CategoryComp';

export default class Category extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <CategoryComp />;
  }
}
