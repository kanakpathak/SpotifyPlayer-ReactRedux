import {
  SEARCH_ALBUM,
  SEARCH_ALBUM_FAIL,
  SEARCH_ALBUM_SUCCESS,
  STORE_ALBUM_ID
} from "../actions/album/album.type";

const initialState = {
  albums: [],
  albumId: "",
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
        loaded: false,
        albums: [],
        albumId: ""
      };

    case SEARCH_ALBUM_FAIL:
      return {
        ...state,
        fail: true,
        loaded: false,
        albums: [],
        albumId: ""
      };

    case SEARCH_ALBUM_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        albums: action.albums,
        fail: false
      };
    // albumId as paload in case searchAlbum
    case STORE_ALBUM_ID:
      return {
        ...state,
        albumId: action.albumId
      };

    default:
      return state;
  }
};

export default Album;
