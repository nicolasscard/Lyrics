
import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { SearchSong } from './screens/SearchSong';
import { ShowLyrics } from './screens/ShowLyrics';
import { History } from './screens/History';

import { Theme } from './helpers/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const LyricsStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SearchSong"
//       screenOptions={{
//         gestureEnabled: false,
//         headerStyle: {
//           backgroundColor: Theme.colors.primary,
//         },
//         headerTitleAlign: 'center',
//         headerTitleStyle: {
//           fontSize: 30,
//           color: Theme.colors.white,
//
//         }
//       }}
//     >
//       <Stack.Screen
//         name="SearchSong"
//         component={SearchSong}
//         options={{ title: 'Buscar una canción' }}
//       />
//       <Stack.Screen
//         name="ShowLyrics"
//         component={ShowLyrics}
//         initialParams={{ title: 'Letra' }}
//         options={({ route }) => ({ title: route.params.title })}
//       />
//     </Stack.Navigator>
//   );
// };

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
        component={SearchSong}
        options={{
          tabBarLabel: 'Buscar Letra',
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
        component={History}
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
      <Tab.Screen
        name="ShowLyrics"
        component={ShowLyrics}
        options={{
          tabBarLabel: 'Letra',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="queue-music"
              type="MaterialIcons"
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
