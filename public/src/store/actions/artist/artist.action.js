import {
  SEARCH_ARTIST,
  SEARCH_ARTIST_FAIL,
  SEARCH_ARTIST_SUCCESS
} from "./artist.type";

export const SearchArtist = (name, access_token) => {
  return {
    type: SEARCH_ARTIST,
    name: name
    // access_token: access_token
  };
};

export const SearchArtistFail = () => {
  return {
    type: SEARCH_ARTIST_FAIL
  };
};

export const SearchArtistSuccess = () => {
  return {
    type: SEARCH_ARTIST_SUCCESS
  };
};
