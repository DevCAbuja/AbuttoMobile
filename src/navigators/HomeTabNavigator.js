import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/App/Home';
import {colors, tabMenuStyle} from '../assets/style';
import HomeSvg from '../assets/svgs/HomeSvg';
import HelpSvg from '../assets/svgs/HelpSvg';
import EmergencySvg from '../assets/svgs/EmergencySvg';
import ProfileSvg from '../assets/svgs/ProfileSvg';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Home') {
            return <HomeSvg color={color} size={0.8} />;
          }
          if (route.name === 'Help') {
            return <HelpSvg color={color} size={0.8} />;
          }
          if (route.name === 'Emergency') {
            return <EmergencySvg color={color} size={0.8} />;
          }
          if (route.name === 'Profile') {
            return <ProfileSvg color={color} size={0.8} />;
          }
        },
        tabBarLabel: ({color}) => {
          return (
            <Text style={[tabMenuStyle.label, {color}]}>{route.name}</Text>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.abuttoBlue,
        inactiveTintColor: colors.abuttoGrey,
        labelPosition: 'below-icon',
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: colors.abuttoLight,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Help" component={Home} />
      <Tab.Screen name="Emergency" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
}
