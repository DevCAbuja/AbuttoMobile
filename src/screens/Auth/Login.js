/* eslint-disable react-native/no-inline-styles */
import React, {createRef, useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated,
  KeyboardAvoidingView,
} from 'react-native';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import {
  loginScreenStyles,
  scale,
  scaleVertical,
  colors,
  introScreenStyles,
} from '../../assets/style';
import TriangleSvg from '../../assets/svgs/TriangleSvg';
import LogoSvg from '../../assets/svgs/LogoSvg';
import Button from '../../components/Button';
import OceanSvg from '../../assets/svgs/OceanSvg';
import {LeftChevronSVG} from '../../assets/svgs/AppSvg';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Login(props) {
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

  const onLogin = () => {
    let error = false;
    if (!username) {
      setUsernameError('Enter your username');
      error = true;
    }
    if (!password) {
      setPasswordError('Enter your password');
    }
    if (!error) {
      console.log('passed');
    }
  };

  return (
    <KeyboardAvoidingView
      style={loginScreenStyles.container}
      behavior="padding">
      <ScrollView
        bounces={false}
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        <View
          style={{
            position: 'absolute',
          }}>
          <View
            style={{
              zIndex: 4,
            }}>
            <TouchableOpacity
              style={{
                padding: scale(10),
                zIndex: 5,
              }}
              onPress={props.navigation.goBack}>
              <LeftChevronSVG color={colors.abuttoFairest} size={2} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              marginTop: -scale(40),
              marginLeft: -scale(10),
            }}>
            <TriangleSvg />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
          }}>
          <View
            style={{
              padding: scale(50),
            }}>
            <View
              style={{
                paddingTop: scaleVertical(40),
                alignItems: 'center',
              }}>
              <LogoSvg size={1.7} />
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
                onChangeText={(text) => {
                  setUsername(text);
                  setUsernameError('');
                }}
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
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError('');
                }}
                blurOnSubmit={false}
                error={passwordError}
              />
              <View
                style={{
                  paddingTop: scale(30),
                }}>
                <Button text="Login" onPress={onLogin} type="submit" />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: scale(90),
            }}>
            <Text style={loginScreenStyles.bottomText}>
              Don't have an account?
            </Text>
            <Text
              style={[loginScreenStyles.bottomText, introScreenStyles.link]}>
              {' '}
              Register
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Animated.View
        style={{
          left: leftPosition,
          position: 'absolute',
          bottom: 0,
        }}>
        <OceanSvg />
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
