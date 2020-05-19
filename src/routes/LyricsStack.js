
import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchSong from '../screens/SearchSong';
import ShowLyrics from '../screens/ShowLyrics';

import { Theme } from '../helpers/theme';

const Stack = createStackNavigator();

const headerTitle = (route) =>
  (<View>
    <Text style={{ textAlign: 'center' }}>
      {route.children}
    </Text>
  </View>);

const slHeaderTitle = ({ route }) => {
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

export const LyricsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SearchSong"
      screenOptions={{
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: Theme.colors.primary,
          height: Theme.height * 0.075
        },
        headerTintColor: Theme.colors.white,
        headerTitleAlign: 'center',
        headerTitle
      }}
      lazy={false}
    >
      <Stack.Screen
        name="SearchSong"
        component={SearchSong}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowLyrics"
        component={ShowLyrics}
        options={slHeaderTitle}
      />
    </Stack.Navigator>
  );
};
