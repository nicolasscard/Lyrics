
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
        else searchSongFail(dispatch, is_last_song);
      })
      .then((song) => {
        const songSearched = { artist, songName, lyrics: song.lyrics };

        //is_last_song determina el origen de la busqueda, para actualizar donde corresponda
        if (is_last_song) { // un valor true indica que es una nueva busqueda y debe ser guardada
          dispatch({ type: SAVE_LAST_SONG, payload: songSearched });
          dispatch({ type: SAVE_SONG, payload: { artist, songName } });
        } // un valor false indica que es la busqueda de una cancion del historial (no hay que guardar)
        else dispatch({ type: SEARCH_SONG_SUCCESS, payload: songSearched });
      })
      .catch((err) => {
        console.log('searchSong action error: ', err);
        searchSongFail(dispatch, is_last_song);
      });
  };
};

export const searchSongFail = (dispatch, is_last_song) => {
  const errorMje = 'Lo sentimos!\nOcurrió un error buscando tu canción.';

  // el error debe ser mostrado en la pantalla que corresponde
  if (is_last_song) dispatch({ type: SEARCH_SONG_FAIL, payload: errorMje });
  else dispatch({ type: HISTORY_SEARCH_SONG_FAIL, payload: errorMje });
}

export const setInitialStates = () => ({ type: SET_INITIAL });
