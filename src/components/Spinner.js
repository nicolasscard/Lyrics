import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Theme } from '../helpers/theme';

const Spinner = ({ size, color }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
        size={size || 'large'}
        color={color || Theme.colors.primary}
      />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
};

export { Spinner };
