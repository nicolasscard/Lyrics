
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';

import { Card, Input } from '../components/index';
import { Theme } from '../helpers/theme';

import { setInitialStates, searchSong } from '../reducers/songs/actions';

const width = Theme.width;

const mapStateToProps = state => {
  const { arraySongs, lastSong, loading, searchSgErr, searchSgSuccess, songSearched } = state.songReducer;

  return { arraySongs, lastSong, loading, searchSgErr, searchSgSuccess, songSearched };
};

const mapDispatchToProps = dispatch => ({
  setInitialStates: () => dispatch(setInitialStates()),
  searchSong: (artist, songName, is_last_song) => dispatch(searchSong(artist, songName, is_last_song)),
});

const SearchSong = ({
  route, navigation, // navigation props
  loading, searchSgErr, searchSgSuccess, songSearched, arraySongs, lastSong, // redux props
  setInitialStates, searchSong // redux actions
}) => {
  const [artist, setartist] = useState('');
  const [songName, setsongName] = useState('');
  const [phArtist, setphArtist] = useState('');
  const [phSongName, setphSongName] = useState('');

  // Inicialize redux variables
  useEffect(() => {
    setInitialStates();
  }, []);

  // When finish search, navigate to ShowLyrics
  useEffect(() => {
    if (searchSgSuccess) goToLastSong();
  }, [searchSgSuccess]);

  const search = async () => {
    if (!artist) setphArtist('Debe ingresar un artista');
    if (!songName) setphSongName('Debe ingresar un nombre');

    if (artist && songName) {
      Keyboard.dismiss(); // close Keyboard

      //capitalize names
      const newArtist = artist.charAt(0).toUpperCase() + artist.slice(1);
      const newSongName = songName.charAt(0).toUpperCase() + songName.slice(1);
      await searchSong(newArtist, newSongName, true);
    }
  };

  // navigate to ShowLyrics
  const goToLastSong = () => {
    if (lastSong) {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'ShowLyrics',
          params: {
            artist: lastSong.artist,
            songName: lastSong.songName,
            is_last_song: true
          }
        })
      );
    }
  };

  return (
    <View style={Theme.container}>
      <Card
        type="form"
        containerStyle={{ justifyContent: 'space-between' }}
      >
        <View>
          <Input
            label="Ingrese artista"
            onChangeText={(text) => setartist(text)}
            value={artist}
            placeholder={phArtist}
          />
          <Input
            label="Ingrese nombre de canción"
            onChangeText={(text) => setsongName(text)}
            value={songName}
            containerStyle={{ marginTop: Theme.margin }}
            placeholder={phSongName}
          />
          {searchSgErr &&
            <Text style={Theme.error}>{searchSgErr}</Text>
          }
        </View>

        <View>
          <Button
            onPress={search}
            loading={loading}
            title="BUSCAR"
            titleStyle={styles.titleButton}
            type="outline"
            loadingProps={{ color: Theme.colors.white }}
            containerStyle={{ marginTop: Theme.margin }}
            buttonStyle={{ borderColor: Theme.colors.white}}
          />
          {lastSong &&
            <TouchableOpacity onPress={goToLastSong}>
              <Text style={styles.lSButtonText}>
                Ver última búsqueda
              </Text>
            </TouchableOpacity>
          }
        </View>
      </Card>
    </View>
  );
};

const styles = {
  lSButtonText: {
    fontSize: width * 0.045,
    color: Theme.colors.gray,
    textAlign: 'center',
    marginTop: Theme.margin / 2
  },
  titleButton: {
    color: Theme.colors.white,
    fontSize: Theme.width * 0.05
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSong);
