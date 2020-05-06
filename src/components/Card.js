/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {appStyles} from '../assets/style';

export default function Card({
  style,
  hasImageBackground,
  backgroundColor,
  renderLeftLine,
  onPress,
  disabled,
  showUnauthorizedText,
  ...props
}) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
      disabled={!onPress}
      onPress={onPress}>
      <View
        style={[
          appStyles.card,
          style,
          hasImageBackground ? {backgroundColor, elevation: 0} : null,
          disabled && {opacity: 0.3},
        ]}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
}

Card.defaultProps = {
  renderLeftLine: true,
  showUnauthorizedText: true,
};
