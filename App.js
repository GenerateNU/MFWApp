import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 305, height: 65}}
          source={{uri: 'http://nebula.wsimg.com/cefc709bd27224f6e0891ce66f3cd5b0?AccessKeyId=5B0537F3E41F17510FAD&disposition=0&alloworigin=1'}}
        />
        <Text>Hello MalariaFreeWorld</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
