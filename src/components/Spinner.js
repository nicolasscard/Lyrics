import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Theme } from '../helpers/theme';

import { Icon } from 'react-native-elements';

const Spinner = ({ size, color, containerStyle }) => {
  return (
    <View style={[styles.spinnerStyle, containerStyle]}>
      <Icon
        name="music-note"
        type="Fontisto"
        color={color}
        size={size / 1.5}
      />
      <ActivityIndicator
        size={size || 'large'}
        color={color || Theme.colors.primary}
        style={{ position: 'absolute' }}
      />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#110f2f'
  }
};

export { Spinner };
