
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
  searchSong: (
    artist,
    songName,
    is_last_song
  ) => dispatch(searchSong(artist, songName, is_last_song)),
});

const ShowLyrics = ({
  route, navigation,  // navigation props
  lastSong, songSearched, loading, hrySearchSgErr, // redux props
  searchSong  // redux actions
}) => {
  const [song, setsong] = useState(null);

  // Update when songSearched change
  useEffect(() => {
    console.log('songSearched');
    if (songSearched) {
      console.log(songSearched.songName);
      setsong(songSearched);
    }
  }, [songSearched]);
  
  // Update when route change
  useEffect(() => {
    if (route.params) {
      const { artist, songName, is_last_song } = route.params;
      if (!is_last_song) searchSong(artist, songName, false);
      else setsong(lastSong);
    }
  }, [route]);

  return (
    <View style={Theme.container}>
      <Card
        type="song"
        containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {loading
          ? (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={Theme.loading}>Loading...</Text>
              <Spinner
                size={50}
                color={Theme.colors.white}
                containerStyle={{ marginTop: width * 0.05 }}
              />
            </View>)
          : hrySearchSgErr
            ? (<View style={{ flex: 1 }}>
                <Text style={[Theme.error, { textAlignVertical: 'center' }]}>
                  {hrySearchSgErr}
                </Text>
              </View>)
            : song &&
              (<>
                <ScrollView>
                  <Text style={styles.lyrics}>{song.lyrics}</Text>
                </ScrollView>
              </>)
        }
      </Card>
    </View>
  );
};

const styles = {
  lyrics: {
    fontSize: width * 0.04,
    textAlign: 'center',
    color: Theme.colors.white
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowLyrics);
