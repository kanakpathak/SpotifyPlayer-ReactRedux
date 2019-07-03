import {
  SEARCH_ALBUM,
  SEARCH_ALBUM_FAIL,
  SEARCH_ALBUM_SUCCESS
} from "../actions/album/album.type";

const initialState = {
  albums: [],
  loading: false,
  loaded: false,
  fail: false
};

const Album = (state = { initialState }, action) => {
  switch (action.type) {
    case SEARCH_ALBUM:
      return {
        ...state,
        loading: true,
        loaded: false
      };

    case SEARCH_ALBUM_FAIL:
      return {
        ...state,
        fail: true,
        loaded: false,
        albums: []
      };

    case SEARCH_ALBUM_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        albums: action.albums
      };

    default:
      return state;
  }
};

export default Album;
