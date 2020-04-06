/* eslint-disable react-native/no-inline-styles */
import React, {createRef, useState, useEffect} from 'react';
import {ScrollView, View, Text, Animated} from 'react-native';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import {loginScreenStyles, scale, scaleVertical} from '../../assets/style';
import TriangleSvg from '../../assets/svgs/TriangleSvg';
import LogoSvg from '../../assets/svgs/LogoSvg';
import Button from '../../components/Button';
import OceanSvg from '../../assets/svgs/OceanSvg';

export default function Login() {
  const usernameRef = createRef();
  const passwordRef = createRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const animateOcean = new Animated.Value(0);

  const animateWallBar = () => {
    Animated.loop(
      Animated.timing(animateOcean, {
        toValue: 10,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();
  };

  let leftPosition = animateOcean.interpolate({
    inputRange: [0, 5, 10],
    outputRange: [-10, -4, -8],
  });

  useEffect(() => {
    animateWallBar();
  }, []);

  return (
    <ScrollView
      bounces={false}
      style={{
        flex: 1,
      }}
      contentContainerStyle={loginScreenStyles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            position: 'absolute',
            marginTop: -scale(40),
            marginLeft: -scale(10),
          }}>
          <TriangleSvg />
        </View>
        <View
          style={{
            padding: scale(50),
          }}>
          <View
            style={{
              paddingTop: scaleVertical(40),
              alignItems: 'center',
            }}>
            <LogoSvg />
            <View>
              <Text style={loginScreenStyles.welcomeBack}>Welcome Back</Text>
              <Text style={loginScreenStyles.continue}>
                Sign in to continue
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              padding: scale(20),
            }}>
            <FloatingLabelInput
              ref={usernameRef}
              editable
              maxLength={40}
              label="Username"
              autoCapitalize="none"
              name="usernameInput"
              focusNextInput="passwordInput"
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => {
                if (passwordRef && passwordRef.current) {
                  passwordRef.current.focus();
                }
              }}
              value={username}
              onChangeText={setUsername}
              blurOnSubmit={false}
              error={usernameError}
            />
            <FloatingLabelInput
              ref={passwordRef}
              editable
              maxLength={40}
              label="Password"
              autoCapitalize="none"
              name="passwordInput"
              focusNextInput="passwordInput"
              secureTextEntry={true}
              returnKeyType="done"
              autoCorrect={false}
              value={password}
              onChangeText={setPassword}
              blurOnSubmit={false}
              error={passwordError}
            />
            <View
              style={{
                paddingTop: scale(30),
              }}>
              <Button text="Login" onPress={() => {}} type="submit" />
            </View>
          </View>
          <Animated.View
            style={{
              left: leftPosition,
            }}>
            <OceanSvg />
          </Animated.View>
        </View>
      </View>
    </ScrollView>
  );
}
