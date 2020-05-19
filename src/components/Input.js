
import React from 'react';
import { TextInput, View, Text } from 'react-native';

import { Theme } from '../helpers/theme';

const width = Theme.width;

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  multiline,
  containerStyle,
  inputStyle,
  labelStyle,
  keyboardType,
  maxLength,
  numberOfLines,
  onContentSizeChange
}) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={[Theme.label, labelStyle]}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={Theme.colors.error}
        autoCorrect={false}
        style={[styles.inputStyle, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onContentSizeChange={(e) => {
          if (onContentSizeChange) {
            onContentSizeChange(e.nativeEvent.contentSize.height);
          }
        }}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    width: width * 0.8,
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputStyle: {
    flexGrow: 1,
    backgroundColor: Theme.colors.secondary,
    fontSize: width * 0.04,
    width: '100%',
    borderRadius: width * 0.01,
    color: Theme.colors.white,
    paddingHorizontal: width * 0.04
  },
};

export { Input };
