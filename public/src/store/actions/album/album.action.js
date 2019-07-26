import {
  SEARCH_ALBUM,
  SEARCH_ALBUM_SUCCESS,
  SEARCH_ALBUM_FAIL,
  STORE_ALBUM_ID
} from "./album.type";

export const SearchAlbum = () => {
  return {
    type: SEARCH_ALBUM
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

export const StoreAlbumId = albumId => {
  return {
    type: STORE_ALBUM_ID,
    albumId: albumId
  };
};
