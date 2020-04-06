/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, forwardRef} from 'react';
import {
  TextInput,
  Animated,
  Platform,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts, scale, scaleVertical} from '../assets/style';

const FloatingLabelInput = forwardRef((props, ref) => {
  const [state, setState] = useState({
    isFocused: false,
    secureTextInput: props.secureTextEntry,
  });

  let _animatedIsFocused = new Animated.Value(props.value === '' ? 0 : 1);
  const handleFocus = () => setState((state) => ({...state, isFocused: true}));
  const handleBlur = () => setState((state) => ({...state, isFocused: false}));
  const focusInput = () => ref.current.focus();

  useEffect(() => {
    Animated.timing(_animatedIsFocused, {
      toValue: state.isFocused || props.value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [state.isFocused, props.value, _animatedIsFocused]);

  const {label, icon} = props;
  const {secureTextInput} = state;
  const outputRange = [
    Platform.OS === 'ios' ? scale(10) : scale(12),
    scale(-5),
  ];
  const labelStyle = {
    backgroundColor: colors.abuttoLight,
    padding: scale(2),
    paddingHorizontal: scale(10),
    position: 'absolute',
    fontFamily: fonts.regularText.fontFamily,
    left: scale(10),
    top: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: outputRange,
    }),
    fontSize: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [scale(12), scale(10)],
    }),
    color: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.abuttoGrey, colors.abuttoBlue],
    }),
  };
  return (
    <TouchableWithoutFeedback onPress={focusInput}>
      <View
        style={{
          // paddingTop: Platform.OS === 'ios' ? 18 : 0,
          marginVertical: scale(10),
          paddingHorizontal: scale(5),
          paddingBottom: 0,
          height: scale(48),
          borderRadius: scale(5),
          borderWidth: 2,
          borderColor: props.error
            ? colors.abuttoError
            : state.isFocused
            ? colors.abuttoBlue
            : colors.abuttoGrey,
        }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          ref={ref}
          secureTextEntry={props.secureTextEntry ? secureTextInput : false}
          enablesReturnKeyAutomatically={true}
          style={{
            // height: 26,
            marginBottom: -scale(10),
            // height: scale(40),
            flex: 1,
            fontFamily: fonts.regularText.fontFamily,
            fontSize: scale(fonts.h5.fontSize),
            color: colors.abuttoDark,
            paddingBottom: 0,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {icon ? (
          props.secureTextEntry ? (
            <TouchableOpacity
              style={{
                top: -25,
                display: 'flex',
                marginLeft: '91%',
              }}
              onPress={() => {
                setState((prevState) => ({
                  secureTextInput: !prevState.secureTextInput,
                }));
              }}>
              <View>
                <Image source={icon} />
              </View>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                top: -25,
                display: 'flex',
                marginLeft: '91%',
              }}>
              <Image source={icon} />
            </View>
          )
        ) : null}
        <Text type="small" style={{color: colors.abuttoError}}>
          {props.error}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
});

export default FloatingLabelInput;
