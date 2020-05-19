
import React from 'react';
import { Text, View } from 'react-native';

import { Theme } from '../helpers/theme';

export const headerTitle = (route) =>
  (<View>
    <Text style={{ textAlign: 'center' }}>
      {route.children}
    </Text>
  </View>);

export const slHeaderTitle = ({ route }) => {
  const length = route.params.songName.length;
  return ({
    title:
      (<>
        <Text style={[
          Theme.title,
          length > 20 && { fontSize: Theme.width * 0.045 }
        ]}>
          {route.params.songName}
        </Text>
        <Text>{'\n'}</Text>
        <Text style={Theme.subTitle}>
          {route.params.artist}
        </Text>
      </>)
  });
};
