import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    let pic = {
      uri: 'http://nebula.wsimg.com/cefc709bd27224f6e0891ce66f3cd5b0?AccessKeyId=5B0537F3E41F17510FAD&disposition=0&alloworigin=1'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

AppRegistry.registerComponent('MalariaFreeWorld', () => Logo);
