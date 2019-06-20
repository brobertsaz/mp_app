import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'

export default class LoadingScreen extends React.Component {
  componentWillMount() {
    console.log('====================================');
    console.log('props', this.props);
    console.log('====================================');
    // firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate('Auth')
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
