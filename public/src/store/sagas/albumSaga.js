import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";
import {
  SEARCH_ALBUM,
  SEARCH_ALBUM_FAIL,
  SEARCH_ALBUM_SUCCESS
} from "../actions/album/album.type";
import { getToken, getArtistId } from "./selector";

export const albumSaga = [takeLatest(SEARCH_ALBUM, searchAlbumSaga)];

function searchAlbum(...args) {
  var spotify_id = args[0],
    accessToken = args[1];

  return axios.get(`https://api.spotify.com/v1/artists/${spotify_id}/albums`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
}

export function* searchAlbumSaga(action) {
  try {
    const token = yield select(getToken);
    const id = yield select(getArtistId);
    const response = yield call(searchAlbum, id, token.accessToken);
    const albums = response.data.items;
    yield put({ type: SEARCH_ALBUM_SUCCESS, albums });
  } catch (error) {
    yield put({ type: SEARCH_ALBUM_FAIL });
  }
}
