import {
  SEARCH_TRACK,
  SEARCH_TRACK_FAIL,
  SEARCH_TRACK_SUCCESS
} from "./track.type";

export const SearchTrack = () => {
  return {
    type: SEARCH_TRACK
  };
};

export const SearchTrackSuccess = () => {
  return {
    type: SEARCH_TRACK_SUCCESS
  };
};
export const SearchTrackFail = () => {
  return {
    type: SEARCH_TRACK_FAIL
  };
};
