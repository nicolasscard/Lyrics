
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { searchSong } from '../reducers/songs/actions';

import { Card, Spinner } from '../components/index';
import { Theme } from '../helpers/theme';

const width = Theme.width;

const mapStateToProps = state => {
  const { lastSong, songSearched, loading, hrySearchSgErr } = state.songReducer;
  return { lastSong, songSearched, loading, hrySearchSgErr };
};

const mapDispatchToProps = dispatch => ({
  searchSong: (artist, songName, is_last_song) => dispatch(searchSong(artist, songName, is_last_song)),
});

const ShowLyrics = ({
  route, navigation,
  lastSong, songSearched, loading, hrySearchSgErr,
  searchSong
}) => {
  const [song, setsong] = useState(null);

  // Update when route change
  useEffect(() => {
    console.log('ShowLyrics >>>>>>>');
    if (route.params) {
      console.log('route.params');
      console.log(route.params);
      const { artist, songName, is_last_song } = route.params;
      if (!is_last_song) searchSong(artist, songName, false);
      else {
        console.log('lastSong: ', lastSong.artist, lastSong.songName);
        setsong(lastSong);
      }
    }
    else {
      console.log('NO hay params');
    }
  }, [route]);

  // Update when songSearched change
  useEffect(() => {
    console.log('ShowLyrics >>>>>>>');
    console.log('songSearched');
    if (songSearched) {
      console.log('songSearched: ', songSearched.artist, songSearched.songName);
      setsong(songSearched);
    }
    else {
      console.log('NO hay songSearched');
    }
  }, [songSearched]);

  return (
    <View style={styles.container}>
      <Card
        type="song"
        containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {loading
          ? (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.loadingText}>
                Loading...
              </Text>
              <Spinner
                size={50}
                color='white'
                containerStyle={{ marginTop: 20 }}    // arreglat estilo de loading -> screen muy estrecha horizontalmente
              />
            </View>)
          : hrySearchSgErr
            ? (<View style={{ flex: 1 }}>
                <Text style={[Theme.textLabel, styles.errorText, { textAlignVertical: 'center' }]}>
                  {hrySearchSgErr}
                </Text>
              </View>)
            : song &&
              (<>
                <ScrollView>
                  <Text style={styles.lyrics}>
                    {song.lyrics}
                  </Text>
                </ScrollView>
              </>)
        }
      </Card>
    </View>
  )
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  artist: {
    fontSize: 17,
    textAlign: 'center',
    color: Theme.colors.gray
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    color: Theme.colors.white
  },
  lyrics: {
    // marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: Theme.colors.white
  },
  errorText: {
    color: Theme.colors.error,
    marginTop: 20,
    fontSize: width * 0.04,
    textAlign: 'center'
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowLyrics);
