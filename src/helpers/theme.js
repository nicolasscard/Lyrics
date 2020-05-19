
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

  // spaces
  width,
  height,
  margin: width * 0.05,
  padding: width * 0.05,
  borderRadius: width * 0.125,

  container: {
    flex: 1,
    backgroundColor: '#110f2f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // TEXT
  title: {
    fontSize: width * 0.055,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  subTitle: {
    fontSize: width * 0.035,
    textAlign: 'center',
    color: '#666666'
  },
  error: {
    color: '#fa4d4a',
    marginTop: width * 0.05,
    fontSize: width * 0.045,
    textAlign: 'center'
  },
  warning: {
    color: '#FFFFFF',
    marginTop: width * 0.05,
    fontSize: width * 0.045,
    textAlign: 'center'
  },
  loading: {
    fontSize: width * 0.05,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  label: {
    fontSize: width * 0.045,
    marginBottom: width * 0.01,
    color: '#FFFFFF'
  },
  button: {
    alignSelf: 'center',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    textAlign: 'center'
  },
};
