
import React, { useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import { Card } from '../components/index';
import { Theme } from '../helpers/theme';

const width = Theme.width;

const mapStateToProps = state => {
  const { arraySongs } = state.songReducer;
  return { arraySongs };
};

const History = ({
  route, navigation, // navigation props
  arraySongs // redux props
}) => {

  // each song from array
  const renderItem = (song, key) => {
    const { artist, songName } = song;

    return (
      <View style={styles.rowView} key={key}>
        <View>
          <Text style={styles.songName}>{songName}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
        <TouchableOpacity onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: 'ShowLyrics',
              params: { ...song, is_last_song: false}
            })
          );
        }}>
          <Icon
            name="queue-music"
            type="MaterialIcons"
            color={Theme.colors.white}
            size={30}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Theme.container}>
      <Card type={'history'} >
        <Text style={Theme.title}>Historial</Text>
        {arraySongs && arraySongs.length > 0
          ? (<ScrollView style={{ marginTop: Theme.margin }}>
              {arraySongs.map((song, index)  => renderItem(song, index))}
            </ScrollView>)
          : (<Text style={Theme.warning}>
              No hay canciones en su historial.
            </Text>)
        }
      </Card>
    </View>
  );
};

const styles = {
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Theme.margin / 4
  },
  artist: {
    fontSize: width * 0.04,
    color: Theme.colors.gray
  },
  songName: {
    fontSize: width * 0.045,
    color: Theme.colors.white
  },
};

export default connect(mapStateToProps, null)(History);
