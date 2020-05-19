import React from 'react';
import { View } from 'react-native';
import { Theme } from '../helpers/theme';

const Card = ({ children, type = null, containerStyle = null }) => {

  let cardStyle = null;

  switch (type) {
    case 'form':
      cardStyle = [styles.card, styles.form, containerStyle];
      break;
    case 'song':
      cardStyle = [styles.card, styles.song, containerStyle];
      break;
    case 'history':
      cardStyle = [styles.card, styles.history, containerStyle];
      break;
    default:
      cardStyle = [styles.card, containerStyle];
      break;
  }

  return (
    <View style={cardStyle}>
      {children}
    </View>
  );
};

const styles = {
  card: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
    margin: Theme.margin,
    padding: Theme.padding * 2,
    width: Theme.width - Theme.margin * 2,
  },
  form: {
    padding: Theme.padding * 1.5,
  },
  song: {
    borderRadius: Theme.borderRadius,
    backgroundColor: Theme.colors.secondary,
  },
  history: {
    borderRadius: Theme.borderRadius / 4,
    backgroundColor: Theme.colors.secondary,
    padding: Theme.padding,
  }
};

export { Card };
