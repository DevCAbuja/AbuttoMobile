import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTabNavigator from './HomeTabNavigator';
import CustomDrawerContent from '../components/Drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Dashboard" component={HomeTabNavigator} />
    </Drawer.Navigator>
  );
}
