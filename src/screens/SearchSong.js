import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Card, Input } from '../components/index';
import { Theme } from '../helpers/theme';

const width = Theme.width;
const url = 'https://api.lyrics.ovh/v1';

const SearchSong = ({ route, navigation }) => {
  const [artist, setartist] = useState('');
  const [songName, setsongName] = useState('');
  const [arraySongs, setarraySongs] = useState([]);

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = async () => {
    try {
      const value = await AsyncStorage.getItem('@arraySongs');
      if (value !== null) {
        const storeArraySongs = JSON.parse(value);
        console.log('storeArraySongs');
        console.log(storeArraySongs.length);
        await setarraySongs(storeArraySongs);
      }
      else {
        console.log('arraySongs is null');
      }
    } catch(e) {
      console.log('e');
      console.log(e);
    }
  };

  const search = async () => {
    console.log('search');
    setloading(true);
    seterror(false);

    await fetch(`${url}/${artist}/${songName}`)
      .then(response => response.json())
      .then(async (json) => {
        if (json.lyrics) {
          console.log('hay cancion');
          const newSong = {
            artist,
            songName,
            lyrics: json.lyrics
          };
          const newArraySongs = arraySongs;
          newArraySongs.push(newSong);
          setarraySongs(newArraySongs);
          setloading(false);
          await saveSong(newArraySongs);
        }
        else {
          console.log('else');
          // console.log(error);
        }
      })
      .catch((err) => {
        console.log('err');
        console.log(err);
        seterror(true);
        setloading(false);
      });
    console.log('no esperé');
  };

  const saveSong = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@arraySongs', jsonValue)
      .then(() => {
        navigation.dispatch(
          CommonActions.navigate({ name: 'ShowLyrics' })
        );
      });

    } catch (e) {
      console.log('e');
      console.log(e);
    }
  };

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
          {error &&
            <Text style={[Theme.textLabel, styles.errorText]}>
              {'Lo sentimos!\nOcurrió un error buscando tu canción.'}
            </Text>
          }
        </View>
        <Button
          onPress={() => {
            search(artist, songName);
          }}
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
  },
  errorText: {
    color: '#fa4d4a',
    marginTop: 20,
    fontSize: width * 0.04,
    textAlign: 'center'
  }
};

export { SearchSong };
