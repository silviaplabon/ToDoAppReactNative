import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import MainStackScreen from './components/Route/MainStackScreen/MainStackScreen'
import { store } from './components/Redux/Reducer/Store'

export default function App() {
  return (
    <Provider store={store}>
      <MainStackScreen></MainStackScreen>
    </Provider>
  );
}

