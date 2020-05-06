/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {introScreenStyles, scaleVertical, scale} from '../../assets/style';
import LogoSvg from '../../assets/svgs/LogoSvg';
import IntroSvg from '../../assets/svgs/IntroSvg';
import Button from '../../components/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Intro(props) {
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
          flex: 1,
          alignItems: 'center',
        }}>
        <LogoSvg size={1.5} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <IntroSvg />
        </View>
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
          <Button
            text="email or phone"
            onPress={() => {
              props.navigation.navigate('Register');
            }}
            type="light"
          />
        </View>
        <View
          style={{
            paddingVertical: scaleVertical(10),
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              paddingVertical: scale(5),
            }}
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={introScreenStyles.noAccountText}>
                Already have an account?{' '}
              </Text>
              <Text style={introScreenStyles.link}>Log in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
