import {
  SEARCH_ALBUM,
  SEARCH_ALBUM_SUCCESS,
  SEARCH_ALBUM_FAIL
} from "./album.type";

export const SearchAlbum = spotify_id => {
  return {
    type: SEARCH_ALBUM,
    spotify_id: spotify_id
    // access_token: access_token
  };
};

export const SearchAlbumFail = () => {
  return {
    type: SEARCH_ALBUM_FAIL
  };
};

export const SearchAlbumSuccess = () => {
  return {
    type: SEARCH_ALBUM_SUCCESS
  };
};
