
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Theme } from '../helpers/theme';
import SearchSong from '../screens/SearchSong';
import SearchSongLyrics from '../screens/SearchSongLyrics';
import { headerTitle, slHeaderTitle } from './headerTitle';

const Stack = createStackNavigator();

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
        component={SearchSongLyrics}
        options={slHeaderTitle}
      />
    </Stack.Navigator>
  );
};
