/* eslint-disable react-hooks/exhaustive-deps */
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineWidth = 360;
const guidelineBaseHeight = 640;

export const scale = (size) => (width / guidelineWidth) * size;
export const scaleVertical = (size) => (height / guidelineBaseHeight) * size;

export const fonts = {
  lightText: {
    fontFamily: 'Montserrat-Light',
  },
  regularText: {
    fontFamily: 'Montserrat-Regular',
  },
  boldText: {
    fontFamily: 'Montserrat-Bold',
  },
  semiBoldText: {
    fontFamily: 'Montserrat-SemiBold',
  },
  h1: {fontSize: 30},
  h2: {fontSize: 25},
  h3: {fontSize: 20},
  h4: {fontSize: 16},
  h5: {fontSize: 14},
  h6: {fontSize: 10},
};

export const colors = {
  abuttoLight: '#E8F5FF',
  abuttoFairest: '#EDF3FB',
  abuttoBlue: '#3750B2',
  abuttoDark: '#000000',
  abuttoError: '#E13737',
  abuttoGrey: '#B6B6B6',
};

// General App Styles
export const appStyles = {
  container: {
    flex: 1,
  },
};

// Button Component
export const buttonStyles = {
  darkButton: {
    borderWidth: scale(1),
    borderColor: colors.abuttoBlue,
    backgroundColor: colors.abuttoBlue,
    borderRadius: scale(30),
    paddingVertical: scale(8),
    paddingHorizontal: scale(20),
    marginVertical: scaleVertical(5),
  },
  lightButton: {
    borderWidth: scale(1),
    borderColor: colors.abuttoBlue,
    backgroundColor: colors.abuttoFairest,
    borderRadius: scale(30),
    paddingVertical: scale(8),
    paddingHorizontal: scale(20),
    marginVertical: scaleVertical(5),
  },
  submitButton: {
    borderWidth: scale(1),
    borderColor: colors.abuttoBlue,
    backgroundColor: colors.abuttoBlue,
    borderRadius: scale(5),
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
    marginVertical: scaleVertical(5),
  },
  darkButtonText: {
    color: colors.abuttoFairest,
    fontSize: scale(fonts.h5.fontSize),
    fontFamily: fonts.semiBoldText.fontFamily,
    textAlign: 'center',
  },
  lightButtonText: {
    color: colors.abuttoBlue,
    fontSize: scale(fonts.h5.fontSize),
    fontFamily: fonts.semiBoldText.fontFamily,
    textAlign: 'center',
  },
};

export const floatingInputStyle = {};

// Intro screen styles
export const introScreenStyles = {
  container: {
    flex: 1,
    padding: scale(20),
    backgroundColor: colors.abuttoLight,
  },
  noAccountText: {
    fontFamily: fonts.regularText.fontFamily,
    fontSize: scale(fonts.h5.fontSize),
    color: colors.abuttoDark,
  },
  link: {
    fontFamily: fonts.semiBoldText.fontFamily,
    fontSize: scale(fonts.h5.fontSize),
    color: colors.abuttoBlue,
  },
};

// Login screen
export const loginScreenStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.abuttoLight,
  },
  welcomeBack: {
    fontFamily: fonts.boldText.fontFamily,
    fontSize: scale(fonts.h3.fontSize),
    color: colors.abuttoBlue,
    textAlign: 'center',
    marginBottom: scale(10),
  },
  continue: {
    fontFamily: fonts.regularText.fontFamily,
    fontSize: scale(fonts.h5.fontSize),
    color: colors.abuttoDark,
    textAlign: 'center',
    marginBottom: scale(10),
  },
  bottomText: {
    fontFamily: fonts.regularText.fontFamily,
    fontSize: scale(fonts.h5.fontSize - 1),
    color: colors.abuttoDark,
    textAlign: 'center',
    marginBottom: scale(10),
  },
};
