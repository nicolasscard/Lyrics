import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import { Card } from '../components/index';
import { Theme } from '../helpers/theme';

const width = Theme.width;
const height = Theme.height;

const mapStateToProps = state => {
  const { arraySongs } = state.songReducer;
  return { arraySongs };
};

const History = ({ route, navigation, arraySongs }) => {

  useEffect(() => {
    console.log('History >>>>>>> arraySongs');
  }, [arraySongs]);

  const renderItem = (song, key) => {
    console.log('History >>>>>>> renderItem');
    const { artist, songName } = song;
    return (
      <View style={styles.rowView} key={key}>
        <View>
          <Text style={styles.songName}>{songName}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
        <TouchableOpacity onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({ name: 'ShowLyrics', params: song })
          );
        }}>
          <Icon
            name="queue-music"
            type="MaterialIcons"
            color={Theme.colors.white}
            size={35}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Card type={'history'} >
        <Text style={styles.screenTitle}>{'Historial'}</Text>
        {arraySongs && arraySongs.length > 0
          ? (<ScrollView style={{ marginTop: 20 }}>
              {arraySongs.map((song, index)  => renderItem(song, index))}
            </ScrollView>)
          : (<Text style={styles.errorText}>
              {'No hay canciones en su historial.'}
            </Text>)
        }
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
  rowView: {
    flexDirection: 'row',
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  screenTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: Theme.colors.white
  },
  artist: {
    fontSize: 15,
    color: Theme.colors.gray
  },
  songName: {
    fontSize: 20,
    color: Theme.colors.white
  },
  lyrics: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: Theme.colors.white
  },
  errorText: {
    color: Theme.colors.white,
    marginTop: 20,
    fontSize: width * 0.04,
    textAlign: 'center'
  }
};

export default connect(mapStateToProps, null)(History);
