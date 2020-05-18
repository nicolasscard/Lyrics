
import { Dimensions } from 'react-native';

// Dimensions
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Theme = {

  // COLORS
  colors: {
    primary: '#110f2f', // dark Violet
    secondary: '#1d1a48', // violet
    white: '#FFFFFF',
    gray: '#666666',
    error: '#fa4d4a', // red
  },

  //spaces
  width,
  height,
  margin: 20,
  padding: 20,
  borderRadius: 50,

  // TEXT
  // Title
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  // SubTitle
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    color: '#666666'
  },

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
    paddingHorizontal: 20
  },
};
