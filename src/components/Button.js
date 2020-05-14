import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Theme } from '../helpers/theme';

const Button = ({ onPress, children, type = null, containerStyle = null }) => {
  const primaryButton = Theme.primaryButton;
  const secondaryButton = Theme.secondaryButton;
  const disabledButton = Theme.disabledButton;

  let buttonStyle = null;
  let textStyle = null;

  switch (type) {
    case 'primary':
      buttonStyle = [primaryButton, containerStyle];
      textStyle = [Theme.textButton, { color: Theme.colors.primary }];
      break;
    case 'secondary':
      buttonStyle = [secondaryButton, containerStyle];
      textStyle = [Theme.textButton, { color: Theme.colors.primary }];
      break;
    case 'disabled':
      buttonStyle = [disabledButton, containerStyle];
      textStyle = [Theme.textButton, { color: Theme.colors.primary }];
      break;
    default:
      buttonStyle = [primaryButton, containerStyle];
      textStyle = [Theme.textButton, { color: Theme.colors.primary }];
      break;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
