
import { Dimensions } from 'react-native';

// Dimensions
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Theme = {

  // COLORS
  colors: {
    primary: '#110f2f', // violet
    secondary: '#1d1a48', // white
    white: '#FFFFFF', // white
    gray: '#666666', // white
    transparent: 'rgba(256,256, 256, 0.4)',
    primaryTransparent: 'rgba(196,15,242, 0.4)',
    transparentIcon: 'rgba(256,256, 256, 0.4)',
  },

  //spaces
  width,
  height,
  margin: 20,
  padding: 20,
  borderRadius: 50,

  // TEXT
  //titles
  textPrimaryTitle: { fontSize: width * 0.185, fontWeight: 'bold', color: '#FFFFFF' },
  textSecondaryTitle: { fontSize: width * 0.0625, fontWeight: 'bold', color: '#FFFFFF' },
  textPrimarySubTitle: { fontSize: width * 0.05, color: '#FFFFFF' },
  textSecondarySubTitle: { fontSize: width * 0.05, fontWeight: 'bold', color: '#FFFFFF' },

  // input
  textLabel: {
    fontSize: width * 0.055,
    marginBottom: width * 0.01,
    // fontWeight: 'bold',
    color: '#FFFFFF'
  },
  textInput: { fontSize: width * 0.03, color: '#FFFFFF' },

  //button
  textButton: {
    alignSelf: 'center',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  // BUTTON
  primaryButton: {
    justifyContent: 'center',
    borderRadius: width * 0.2,
    width: width * 0.4,
    height: 43,
  },
  secondaryButton: {
    justifyContent: 'center',
    borderRadius: width * 0.2,
    width: width * 0.4,
    height: 43,
  },
  disabledButton: {
    justifyContent: 'center',
    borderRadius: width * 0.2,
    width: width * 0.4,
    height: 43,
  },

  // INPUT
  input: {
    borderRadius: width * 0.2,
    width: width * 0.4,
    height: 43,
  }
};
