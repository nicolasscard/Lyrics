
import {
  SEARCHING_SONG,
  SEARCH_SONG_SUCCESS,
  SEARCH_SONG_FAIL,
  HISTORY_SEARCH_SONG_FAIL,
  SAVE_SONG,
  SAVE_LAST_SONG,
  SET_INITIAL,
} from './types';

const url = 'https://api.lyrics.ovh/v1';

export const searchSong = (artist, songName, is_last_song) => {
  return dispatch => {
    dispatch({ type: SEARCHING_SONG });

    fetch(`${url}/${artist}/${songName}`)
      .then(response => {
        if (response.ok) return response.json();
        else throw new Error('No encontramos la canción.');
      })
      .then((song) => {
        console.log('>>>> HAY CANCION <<<<<<');
        const songSearched = { artist, songName, lyrics: song.lyrics };

        if (is_last_song) {
          dispatch({ type: SAVE_LAST_SONG, payload: songSearched });
          dispatch({ type: SAVE_SONG, payload: { artist, songName } });
        }
        else {
          dispatch({ type: SEARCH_SONG_SUCCESS, payload: songSearched });
          // searchSongSuccess(dispatch, songSearched);
        }
      })
      .catch((err) => {
        console.log('searchSong action error: ', err);
        const errorMje = 'Lo sentimos!\nOcurrió un error buscando tu canción.';
        if (is_last_song) dispatch({ type: SEARCH_SONG_FAIL, payload: errorMje });
        else dispatch({ type: HISTORY_SEARCH_SONG_FAIL, payload: errorMje });
      });
  };
};

export const setInitialStates = () => ({ type: SET_INITIAL });
