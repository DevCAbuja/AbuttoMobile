import React, {createRef} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {homeScreenStyles, scale} from '../../assets/style';
import MenuSvg from '../../assets/svgs/MenuSvg';
import SearchSvg from '../../assets/svgs/SearchSvg';
import Card from '../../components/Card';

const homeMenuItems = [
  {
    title: 'Give Help',
    image: require('../../assets/images/gift.png'),
  },
  {
    title: 'Receive Help',
    image: require('../../assets/images/give.png'),
  },
  {
    title: 'Request Emergency',
    image: require('../../assets/images/gift.png'),
  },
  {
    title: 'Chat with a doctor',
    image: require('../../assets/images/doctor.png'),
  },
];

export default function Home(props) {
  const inputRef = createRef();

  function focusSearchInput() {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <View
      style={homeScreenStyles.container}
      showsVerticalScrollIndicator={false}>
      <View>
        <TouchableOpacity
          style={{
            padding: scale(5),
          }}
          onPress={props.navigation.openDrawer}>
          <MenuSvg />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={focusSearchInput}>
        <View style={homeScreenStyles.searchInputContainer}>
          <SearchSvg />
          <TextInput
            ref={inputRef}
            style={homeScreenStyles.searchInput}
            placeholder="Search for help"
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={homeScreenStyles.menuContainer}>
        <FlatList
          data={homeMenuItems}
          numColumns={2}
          renderItem={({item}) => (
            <Card onPress={() => {}} style={homeScreenStyles.homeMenuContainer}>
              <Image
                source={item.image}
                style={homeScreenStyles.menuImage}
                resizeMethod="auto"
                resizeMode="contain"
              />
              <View>
                <Text style={homeScreenStyles.homeMenuText}>{item.title}</Text>
              </View>
            </Card>
          )}
          keyExtractor={(item, index) => `${item.name}-${index}`}
        />
      </View>
    </View>
  );
}
