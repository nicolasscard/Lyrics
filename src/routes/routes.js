
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import { HistoryStack } from './HistoryStack';
import { LyricsStack } from './LyricsStack';
import { Theme } from '../helpers/theme';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="SearchSong"
      tabBarOptions={{
        activeTintColor: Theme.colors.white,
        activeBackgroundColor: Theme.colors.secondary,
        inactiveTintColor: Theme.colors.gray,
        inactiveBackgroundColor : Theme.colors.primary,
      }}
    >
      <Tab.Screen
        name="SearchSong"
        component={LyricsStack}
        options={{
          tabBarLabel: 'Buscar Canción',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="search"
              type="FontAwesome"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStack}
        options={{
          tabBarLabel: 'Historial',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="history"
              type="FontAwesome"
              color={color}
              size={size}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export const Root = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};
