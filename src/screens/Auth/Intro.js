/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {introScreenStyles, scaleVertical} from '../../assets/style';
import LogoSvg from '../../assets/svgs/LogoSvg';
import IntroSvg from '../../assets/svgs/IntroSvg';
import Button from '../../components/Button';

export default function Inttro() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={[
        introScreenStyles.container,
        {
          paddingTop: scaleVertical(50),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      ]}
      bounces={false}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <LogoSvg size={1.5} />
        <IntroSvg />
      </View>
      <View>
        <View
          style={{
            alignItems: 'center',
            paddingTop: scaleVertical(10),
          }}>
          <Button text="continue with Facebook" onPress={() => {}} />
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingTop: scaleVertical(10),
          }}>
          <Button text="email or phone" onPress={() => {}} type="light" />
        </View>
        <View
          style={{
            paddingTop: scaleVertical(10),
          }}>
          <Text>Already have an account? Log in</Text>
        </View>
      </View>
    </ScrollView>
  );
}
