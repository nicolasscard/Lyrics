import React from 'react';
import { View } from 'react-native';
import { Theme } from '../helpers/theme';

const Card = ({ children, type = null, containerStyle = null }) => {

  let cardStyle = null;

  switch (type) {
    case 'form':
      cardStyle = [styles.form, containerStyle];
      break;
    case 'song':
      cardStyle = [styles.song, containerStyle];
      break;
    default:
      cardStyle = [styles.form, containerStyle];
      break;
  }

  return (
    <View style={cardStyle}>
      {children}
    </View>
  );
};

const styles = {
  form: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
    margin: Theme.margin,
    padding: Theme.padding * 2,
    // borderRadius: Theme.borderRadius
  },
  song: {
    flex: 1,
    backgroundColor: Theme.colors.secondary,
    margin: Theme.margin,
    padding: Theme.padding * 2,
    borderRadius: Theme.borderRadius
  }
};

export { Card };
