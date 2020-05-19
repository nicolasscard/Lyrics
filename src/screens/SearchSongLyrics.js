
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { Card } from '../components/index';
import { Theme } from '../helpers/theme';

const mapStateToProps = state => {
  const { lastSong } = state.songReducer;
  return { lastSong };
};

const SearchSongLyrics = ({ lastSong }) => {
  return (
    <View style={Theme.container}>
      <Card type="song" containerStyle={styles.card}>
        {lastSong &&
          <ScrollView>
            <Text style={styles.lyrics}>{lastSong.lyrics}</Text>
          </ScrollView>
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
    fontSize: Theme.width * 0.04,
    textAlign: 'center',
    color: Theme.colors.white
  },
};

export default connect(mapStateToProps, null)(SearchSongLyrics);
