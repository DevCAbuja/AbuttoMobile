import React from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import {sidebarMenuStyles} from '../assets/style';

const drawerItems = [
  {
    url: 'Dashboard',
    name: 'Home',
  },
  {
    url: 'Provide Help',
    name: 'Home',
  },
  {
    url: 'Need Help',
    name: 'Home',
  },
  {
    url: 'Search',
    name: 'Home',
  },
  {
    url: 'Settings',
    name: 'Home',
  },
  {
    url: 'Support',
    name: 'Home',
  },
];

export default function CustomDrawerContent(props) {
  console.log(props);
  return (
    <View style={sidebarMenuStyles.container}>
      <FlatList
        data={drawerItems}
        renderItem={({item}) => (
          <TouchableOpacity
            style={sidebarMenuStyles.menuContainer}
            onPress={() => props.navigation.navigate(item.url)}>
            <Text style={sidebarMenuStyles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
    </View>
  );
}
