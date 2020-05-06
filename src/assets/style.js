/* eslint-disable react-hooks/exhaustive-deps */
import {Dimensions, StyleSheet, Platform} from 'react-native';

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
  abuttoWhite: '#ffffff',
};

export const tabMenuStyle = {
  label: {
    fontSize: scale(fonts.h6.fontSize),
    fontFamily: fonts.boldText.fontFamily,
    textAlign: 'center',
  },
};

// General App Styles
export const appStyles = {
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.abuttoWhite,
    borderRadius: scale(5),
    margin: scale(5),
    padding: scale(10),
    ...Platform.select({
      ios: {
        shadowColor: colors.abuttoDark,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
};

// Sidebar Menu Styles
export const sidebarMenuStyles = {
  container: {
    padding: scale(20),
    flex: 1,
  },
  menuContainer: {
    padding: scale(10),
    flex: 1,
    // backgroundColor: colors.abuttoFairest,
    marginBottom: scale(5),
  },
  menuText: {
    fontFamily: fonts.regularText.fontFamily,
    fontSize: scale(fonts.h5.fontSize),
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

// Home screen
export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(10),
    backgroundColor: colors.abuttoFairest,
  },
  searchInputContainer: {
    marginTop: scale(15),
    marginHorizontal: scale(20),
    backgroundColor: colors.abuttoWhite,
    paddingHorizontal: scale(10),
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.abuttoDark,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  searchInput: {
    flex: 1,
    marginLeft: scale(10),
    backgroundColor: colors.abuttoWhite,
    fontSize: scale(fonts.h4.fontSize),
    fontFamily: fonts.regularText.fontFamily,
  },
  menuContainer: {
    flex: 1,
    paddingTop: scale(20),
  },
  homeMenuContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: scale(10),
  },
  menuImage: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingTop: scale(170),
  },
  homeMenuText: {
    fontFamily: fonts.regularText.fontFamily,
    fontSize: scale(fonts.h5.fontSize),
    textAlign: 'center',
    color: colors.abuttoBlue,
  },
});
