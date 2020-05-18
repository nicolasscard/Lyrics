
import {
  SEARCHING_SONG,
  SEARCH_SONG_SUCCESS,
  SEARCH_SONG_FAIL,
  HISTORY_SEARCH_SONG_FAIL,
  SAVE_SONG,
  SAVE_LAST_SONG,
  SET_INITIAL
} from './types';

const songReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCHING_SONG:
    console.log('SEARCHING_SONG');
      return {
        ...state,
        loading: true,
        searchSgErr: false,
        hrySearchSgErr: false,
        searchSgSuccess: false
      };
    case SEARCH_SONG_SUCCESS:
    console.log('SEARCH_SONG_SUCCESS');
      return {
        ...state,
        songSearched: payload,
        loading: false,
        hrySearchSgErr: false
      };
    case SAVE_LAST_SONG:
    console.log('SAVE_LAST_SONG');
      return {
        ...state,
        lastSong: payload,
        searchSgSuccess: true
      };
    case SEARCH_SONG_FAIL:
    console.log('SEARCH_SONG_FAIL');
      return {
        ...state,
        searchSgErr: payload,
        loading: false,
      };
    case HISTORY_SEARCH_SONG_FAIL:
    console.log('HISTORY_SEARCH_SONG_FAIL');
      return {
        ...state,
        hrySearchSgErr: payload,
        loading: false,
      };
    case SAVE_SONG:
    console.log('SAVE_SONG');
      return {
        ...state,
        arraySongs: [ ...state.arraySongs, payload],
        loading: false,
        searchSgErr: false,
      };
    case SET_INITIAL:
    console.log('SET_INITIAL');
      return {
        ...initialState,
        arraySongs: state.arraySongs,
        lastSong: state.lastSong
      };
    default:
      return state;
  }
};

const initialState = {
  arraySongs: [],
  lastSong: null,
  songSearched: null,
  loading: false,
  searchSgSuccess: false,
  searchSgErr: false,
  hrySearchSgErr: false,
};

export default songReducer;
