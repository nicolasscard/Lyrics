
import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from "./src/store";

// import { SafeAreaView, StatusBar } from 'react-native';
import { Root } from './src/routes';
import { Spinner } from './src/components/index';
import { Theme } from './src/helpers/theme';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <Spinner
            size={50}
            color={Theme.colors.white}
            containerStyle={{ flex: 1, backgroundColor: Theme.colors.primary }}
          />
        }
        persistor={persistor}>
        <Root/>
      </PersistGate>
    </Provider>
  );
};
