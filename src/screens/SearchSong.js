
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
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

  useEffect(() => {
    console.log('SearchSong >>>>>>> setInitialStates');
    setInitialStates();
  }, []);

  // delete when finish test
  useEffect(() => {
    console.log('SearchSong >>>>>>> getInitialStates');
    if (arraySongs) console.log('arraySongs.length: ', arraySongs.length);
    if (songSearched) console.log('songSearched: ', songSearched.artist, songSearched.songName);
    if (lastSong) console.log('lastSong: ', lastSong.artist, lastSong.songName);
    console.log('other variables:');
    console.log('loading: ', loading);
    console.log('error: ', searchSgErr);
  }, []);

  useEffect(() => {
    console.log('SearchSong >>>>>>> searchSgSuccess');
    if (searchSgSuccess && lastSong) {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'ShowLyrics',
          params: { artist: lastSong.artist, songName: lastSong.songName,  } })
      );
    }
  }, [searchSgSuccess, lastSong, navigation]);

  const onPressButton = async () => {
    console.log('SearchSong >>>>>>> onPressButton');
    if (!artist) setphArtist('Debe ingresar un artista');
    if (!songName) setphSongName('Debe ingresar un nombre');

    if (artist && songName) {
      const newArtist = artist.charAt(0).toUpperCase() + artist.slice(1);
      const newSongName = songName.charAt(0).toUpperCase() + songName.slice(1);
      await searchSong(newArtist, newSongName, true);
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
            <Text style={[Theme.textLabel, styles.errorText]}>
              {searchSgErr}
            </Text>
          }
        </View>
        <Button
          onPress={onPressButton}
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
    justifyContent: 'center',
  },
  errorText: {
    color: '#fa4d4a',
    marginTop: 20,
    fontSize: width * 0.04,
    textAlign: 'center'
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSong);
