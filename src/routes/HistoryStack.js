
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Theme } from '../helpers/theme';
import History from '../screens/History';
import HistoryLyrics from '../screens/HistoryLyrics';
import { headerTitle, slHeaderTitle } from './headerTitle';

const Stack = createStackNavigator();

export const HistoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="History"
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
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowLyrics"
        component={HistoryLyrics}
        options={slHeaderTitle}
      />
    </Stack.Navigator>
  );
};
