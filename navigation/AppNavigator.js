import React from 'react'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'

import LoginScreen from '../screens/LoginScreen'
import LoadingScreen from '../screens/LoadingScreen'

const AuthStack = createStackNavigator({ Login: LoginScreen })

export default createAppContainer(createSwitchNavigator(
  {
    Main: MainTabNavigator,
    AuthLoading: LoadingScreen,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
))