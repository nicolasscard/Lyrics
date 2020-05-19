
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import SearchSong from './screens/SearchSong';
import ShowLyrics from './screens/ShowLyrics';
import History from './screens/History';

import { Theme } from './helpers/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const LyricsStack = () => {
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

const HistoryStack = () => {
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
    >
      <Stack.Screen
        name="History"
        component={History}
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
        lazy={false}
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
        lazy={false}
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
