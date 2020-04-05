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
  darkButtonText: {
    color: colors.abuttoFairest,
    fontSize: scale(fonts.h5.fontSize),
    fontFamily: fonts.semiBoldText.fontFamily,
  },
  lightButtonText: {
    color: colors.abuttoBlue,
    fontSize: scale(fonts.h5.fontSize),
    fontFamily: fonts.semiBoldText.fontFamily,
  },
};

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
