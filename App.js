import React, { Component } from 'react';
import { View, Text } from 'react-native';
import database from '@react-native-firebase/database';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'Its my data'
    };
  }

  componentDidMount(){
   database().ref('/User/Name')
    .on('value', snapshot => {
      console.log('User data: ', snapshot);
      this.setState({
        value:snapshot.val(),
      })
    });
    // database().ref('/Main')
    // .set({
    //   key:"Hello"
    // }).then(()=>console.log('dfnjkahfjk'))

  }

  render() {
    return (
      <View>
        <Text> {this.state.value} </Text>
      </View>
    );
  }
}
