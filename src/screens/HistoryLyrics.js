
import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { searchSong } from '../reducers/songs/actions';
import { Card, Spinner } from '../components/index';
import { Theme } from '../helpers/theme';

const width = Theme.width;

const mapStateToProps = state => {
  const { songSearched, loading, hrySearchSgErr } = state.songReducer;
  return { songSearched, loading, hrySearchSgErr };
};

const mapDispatchToProps = dispatch => ({
  searchSong: (
    artist,
    songName,
    is_last_song
  ) => dispatch(searchSong(artist, songName, is_last_song)),
});

export const HistoryLyrics = ({
  route, // navigation props
  songSearched, loading, hrySearchSgErr, // redux props
  searchSong  // redux actions
}) => {

  // Update when route change
  useEffect(() => {
    if (route.params) {
      const { artist, songName } = route.params;
      searchSong(artist, songName, false);
    }
  }, [route]);

  return (
    <View style={Theme.container}>
      <Card type="song" containerStyle={styles.card}>
        {loading
          ? (<View style={styles.card}>
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
            : songSearched &&
              (<>
                <ScrollView>
                  <Text style={styles.lyrics}>{songSearched.lyrics}</Text>
                </ScrollView>
              </>)
        }
      </Card>
    </View>
  );
};

const styles = {
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lyrics: {
    fontSize: width * 0.04,
    textAlign: 'center',
    color: Theme.colors.white
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryLyrics);
