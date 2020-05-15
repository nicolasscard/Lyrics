
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from '../components/index';
import { Theme } from '../helpers/theme';

const width = Theme.width;

const ShowLyrics = ({ route }) => {

  console.log('ShowLyrics');
  console.log(route);

  const artist = route.params?.artist ?? null;
  const songName = route.params?.songName ?? null;
  const lyrics = route.params?.lyrics ?? null;

  return (
    <View style={styles.container}>
      <Card
        type="song"
        containerStyle={{ justifyContent: 'center' }}
      >
        {artist
          ? (
            <ScrollView style={{}}>
              <Text style={styles.songName}>
                {songName}
              </Text>
              <Text style={styles.artist}>
                {artist}
              </Text>
              <Text style={styles.lyrics}>
                {lyrics}
              </Text>
            </ScrollView>
          )
          : (
            <Text style={styles.errorText}>
              {'No hay canción para mostrar'}
            </Text>
          )
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
  },
  artist: {
    fontSize: 17,
    textAlign: 'center',
    color: Theme.colors.gray
  },
  songName: {
    fontSize: 25,
    textAlign: 'center',
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

export { ShowLyrics };
