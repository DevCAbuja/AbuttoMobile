/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppContext from './AppContext';
import useController from './AppController';

import 'react-native-gesture-handler';
import AuthNavigator from './src/navigators/AuthNavigator';
import {colors} from './src/assets/style';
import AppNavigator from './src/navigators/AppNavigator';

const {Provider} = AppContext;

export default function App() {
  const {state, dispatch} = useController();
  return (
    <Provider
      value={{
        ...state,
        dispatch,
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.abuttoBlue}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.abuttoLight,
        }}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          {!state.isLoggedIn ? <AuthNavigator /> : <AppNavigator />}
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
