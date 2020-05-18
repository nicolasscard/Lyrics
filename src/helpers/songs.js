
import AsyncStorage from '@react-native-community/async-storage';

export const getSongs = async () => {
  try {
    const value = await AsyncStorage.getItem('@arraySongs');
    if (value !== null) {
      const arraySongs = JSON.parse(value);
      return JSON.parse(value);
    }
    else {
      return null;
    }
  } catch(e) {
    console.log('e');
    console.log(e);
    return null;
  }
};

export const saveSong = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@arraySongs', jsonValue)
    .then(() => {
      navigation.dispatch(
        CommonActions.navigate({ name: 'ShowLyrics' })
      );
    });

  } catch (e) {
    console.log('e');
    console.log(e);
  }
};

export const getLastSong = async () => {
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

export const search = async () => {
  console.log('search');
  setloading(true);
  seterror(false);

  await fetch(`${url}/${artist}/${songName}`)
    .then(response => response.json())
    .then(async (json) => {
      if (json.lyrics) {
        console.log('hay cancion');
        const newSong = {
          artist,
          songName,
          lyrics: json.lyrics
        };
        const newArraySongs = arraySongs;
        newArraySongs.push(newSong);
        setarraySongs(newArraySongs);
        setloading(false);
        await saveSong(newArraySongs);
      }
      else {
        console.log('else');
        // console.log(error);
      }
    })
    .catch((err) => {
      console.log('err');
      console.log(err);
      seterror(true);
      setloading(false);
    });
  console.log('no esperé');
};
