import {
  SEARCH_TRACK,
  SEARCH_TRACK_FAIL,
  SEARCH_TRACK_SUCCESS
} from "../actions/track/track.type";

const initialState = {
  tracks: [],
  loaded: false,
  loading: false,
  fail: true
};

export const Track = (state = { initialState }, action) => {
  switch (action.type) {
    case SEARCH_TRACK:
      return {
        ...state,
        loading: true,
        loaded: false
      };

    case SEARCH_TRACK_SUCCESS:
      return {
        ...state,
        loaded: true,
        fail: false,
        loading: false,
        tracks: action.tracks
      };

    case SEARCH_TRACK_FAIL:
      return {
        ...state,
        loaded: true,
        fail: true,
        loading: false,
        tracks: []
      };

    default:
      return state;
  }
};

export default Track;
