
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Card } from '../components/index';
import { Theme } from '../helpers/theme';

const width = Theme.width;

const ShowLyrics = ({ route }) => {
  const [lastSong, setlastSong] = useState(null);

  useEffect(() => {
    getLastSong();
  }, []);

  const getLastSong = async () => {
    try {
      const value = await AsyncStorage.getItem('@arraySongs');
      if (value !== null) {
        const arraySongs = JSON.parse(value);
        console.log('arraySongs');
        console.log(arraySongs.length);
        if (arraySongs.length > 0) {
          setlastSong(arraySongs[arraySongs.length - 1]);
        }
        else {
          console.log('arraySongs is empty');
        }
      }
      else {
        console.log('arraySongs is null');
      }
    } catch(e) {
      console.log('e');
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Card
        type="song"
        containerStyle={{ justifyContent: 'center' }}
      >
        {lastSong
          ? (
            <>
              <Text style={styles.songName}>
                {lastSong.songName}
              </Text>
              <Text style={styles.artist}>
                {lastSong.artist}
              </Text>
              <ScrollView style={{ marginTop: 10 }}>
                <Text style={styles.lyrics}>
                  {lastSong.lyrics}
                </Text>
              </ScrollView>
            </>
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
