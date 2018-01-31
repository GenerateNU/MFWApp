import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image
          style={{width: 305, height: 65}}
          source={{uri: 'http://nebula.wsimg.com/cefc709bd27224f6e0891ce66f3cd5b0?AccessKeyId=5B0537F3E41F17510FAD&disposition=0&alloworigin=1'}}
        />
        <Text>Hello MalariaFreeWorld</Text>
        <Button
          onPress={() => navigate('Modules', { user: 'Kevin' })}
          title="Chat with user"
        />
      </View>
    );
  }
}

class ModulesScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

const MalariaApp = StackNavigator({
  Home: { screen: HomeScreen },
  Modules: { screen: ModulesScreen },

});

export default class App extends React.Component {
  render() {
    return <MalariaApp />;
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
