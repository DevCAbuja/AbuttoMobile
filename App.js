import React from 'react';
import {StatusBar, SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import AuthNavigator from './src/navigators/AuthNavigator';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
