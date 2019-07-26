import {
  SEARCH_ARTIST,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_ARTIST_FAIL,
  STORE_ARTIST_ID
} from "../actions/artist/artist.type";

const initialState = {
  artists: [],
  loading: false,
  loaded: false,
  fail: false,
  id: ""
};

const Artist = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        loading: true,
        loaded: false,
        artists: []
      };

    case SEARCH_ARTIST_SUCCESS:
      // console.log('Action Payload: ',action.payload)
      return {
        ...state,
        artists: action.artists,
        loaded: true,
        loading: false
      };
    case SEARCH_ARTIST_FAIL:
      return {
        ...state,
        artists: [],
        fail: true,
        loading: false,
        id: ""
      };

    case STORE_ARTIST_ID:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
};

export default Artist;
