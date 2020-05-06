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
import LogoSvg from '../../assets/svgs/LogoSvg';
import Button from '../../components/Button';
import OceanSvg from '../../assets/svgs/OceanSvg';
import {LeftChevronSVG} from '../../assets/svgs/AppSvg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {validateEmail} from '../../helpers';

export default function Register(props) {
  const fullNameRef = createRef();
  const passwordRef = createRef();
  const emailRef = createRef();
  const phoneNumberRef = createRef();
  const [state, setState] = useState({
    fullName: '',
    password: '',
    phoneNumber: '',
    emailAddress: '',
    passwordError: '',
    phoneNumberError: '',
    fullNameError: '',
    emailAddressError: '',
  });

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

  const onRegister = () => {
    let error = false;
    if (!state.fullName) {
      setState((prevState) => ({
        ...prevState,
        fullNameError: 'Enter your full name',
      }));
      error = true;
    }
    if (state.fullName && state.fullName.split(' ').length < 2) {
      setState((prevState) => ({
        ...prevState,
        fullNameError: 'Please enter your first and last name',
      }));
      error = true;
    }
    if (state.emailAddress && !validateEmail(state.emailAddress)) {
      setState((prevState) => ({
        ...prevState,
        emailAddressError: 'Please enter a valid email address or leave empty',
      }));
      error = true;
    }
    if (!state.password) {
      setState((prevState) => ({
        ...prevState,
        passwordError: 'Enter a password',
      }));
      error = true;
    }
    if (!state.phoneNumber) {
      setState((prevState) => ({
        ...prevState,
        phoneNumberError: 'Enter a valid phone number',
      }));
      error = true;
    }
    if (!error) {
      console.log('passed');
    }
  };

  const handleInputChange = (text, name) => {
    setState((prevState) => ({
      ...prevState,
      [name]: text,
      phoneNumberError: '',
      fullNameError: '',
      passwordError: '',
    }));
  };

  return (
    <KeyboardAvoidingView
      style={loginScreenStyles.container}
      behavior="padding">
      <ScrollView
        style={{
          flex: 1,
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        <TouchableOpacity
          style={{
            padding: scale(10),
          }}
          onPress={props.navigation.goBack}>
          <LeftChevronSVG color={colors.abuttoBlue} size={2} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              padding: scale(10),
            }}
            onPress={props.navigation.goBack}>
            <LeftChevronSVG color={colors.abuttoFairest} size={2} />
          </TouchableOpacity>
          <View
            style={{
              padding: scale(20),
            }}>
            <View>
              <View>
                <Text
                  style={[loginScreenStyles.welcomeBack, {textAlign: 'left'}]}>
                  Welcome,
                </Text>
                <Text style={[loginScreenStyles.continue, {textAlign: 'left'}]}>
                  Let's get to know you
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
                ref={fullNameRef}
                editable
                maxLength={40}
                label="Full Name"
                autoCapitalize="none"
                name="fullNameInput"
                focusNextInput="passwordInput"
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => {
                  if (emailRef && emailRef.current) {
                    emailRef.current.focus();
                  }
                }}
                value={state.fullName}
                onChangeText={(text) => {
                  handleInputChange(text, 'fullName');
                }}
                blurOnSubmit={false}
                error={state.fullNameError}
              />
              <FloatingLabelInput
                ref={emailRef}
                editable
                maxLength={40}
                label="Email Address"
                autoCapitalize="none"
                name="fullNameInput"
                focusNextInput="passwordInput"
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => {
                  if (phoneNumberRef && phoneNumberRef.current) {
                    phoneNumberRef.current.focus();
                  }
                }}
                value={state.emailAddress}
                onChangeText={(text) => {
                  handleInputChange(text, 'emailAddress');
                }}
                blurOnSubmit={false}
                error={state.emailAddressError}
              />
              <FloatingLabelInput
                ref={phoneNumberRef}
                editable
                maxLength={40}
                label="Phone Number"
                autoCapitalize="none"
                name="phoneNumberInput"
                keyboardType="phone-pad"
                focusNextInput="passwordInput"
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => {
                  if (passwordRef && passwordRef.current) {
                    passwordRef.current.focus();
                  }
                }}
                value={state.phoneNumber}
                onChangeText={(text) => {
                  handleInputChange(text, 'phoneNumber');
                }}
                blurOnSubmit={false}
                error={state.phoneNumberError}
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
                value={state.password}
                onChangeText={(text) => {
                  handleInputChange(text, 'password');
                }}
                blurOnSubmit={false}
                error={state.passwordError}
              />
              <View
                style={{
                  paddingTop: scale(30),
                }}>
                <Button text="Register" onPress={onRegister} type="submit" />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={loginScreenStyles.bottomText}>
              Already have an account?
            </Text>
            <Text
              style={[loginScreenStyles.bottomText, introScreenStyles.link]}>
              {' '}
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Animated.View
        style={{
          left: leftPosition,
          // position: 'absolute',
          // bottom: 0,
        }}>
        <OceanSvg />
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
