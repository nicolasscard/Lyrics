import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, Input } from '../components/index';
import { Theme } from '../helpers/theme';
const SearchSong = () => {

  const [artist, setartist] = useState('');
  const [songName, setsongName] = useState('');
  const [loading, setloading] = useState(false);
  // useEffect(() => {
  //   getMyGame();
  //   getActions();
  // }, [matchFromParams]);

  return (
    <View style={styles.container}>
      <Card
        type="form"
        containerStyle={{ justifyContent: 'space-between' }}
      >
        <View>
          <Input
            label="Ingrese artista"
            onChangeText={(text) => setartist(text)}
            value={artist}
          />
          <Input
            label="Ingrese nombre de canción"
            onChangeText={(text) => setsongName(text)}
            value={songName}
            containerStyle={{ marginTop: Theme.margin }}
          />
        </View>
        <Button
          onPress={() => setloading(true)}
          loading={loading}
          title="BUSCAR"
          titleStyle={{ color: Theme.colors.white, fontSize: Theme.width * 0.05 }}
          type="outline"
          loadingProps={{ color: Theme.colors.white }}
          containerStyle={{ marginTop: Theme.margin }}
          buttonStyle={{ borderColor: Theme.colors.white}}
        />
      </Card>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
    alignItems: 'center',
  }
};

export { SearchSong };
