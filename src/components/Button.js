import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {buttonStyles} from '../assets/style';

export default function Button({text, onPress, type}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        type === 'light'
          ? buttonStyles.lightButton
          : type === 'submit'
          ? buttonStyles.submitButton
          : buttonStyles.darkButton
      }>
      <Text
        style={
          type === 'light'
            ? buttonStyles.lightButtonText
            : buttonStyles.darkButtonText
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
