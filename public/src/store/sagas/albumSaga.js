import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";
import {
  SEARCH_ALBUM,
  SEARCH_ALBUM_FAIL,
  SEARCH_ALBUM_SUCCESS
} from "../actions/album/album.type";
import { getToken } from "./selector";

export const albumSaga = [takeLatest(SEARCH_ALBUM, searchAlbumSaga)];

function searchAlbum(...args) {
  var spotify_id = args[0],
    access_token = args[1];

  console.log("Album api about to hit", spotify_id);
  return axios.get(`https://api.spotify.com/v1/artists/${spotify_id}/albums`, {
    headers: { Authorization: `Bearer ${access_token}` }
  });
}

export function* searchAlbumSaga(action) {
  try {
    console.log(`action spotify id ${action.spotify_id}`);
    const token = yield select(getToken);
    const response = yield call(
      searchAlbum,
      action.spotify_id,
      token.access_token
    );
    console.log("Success");
    const albums = response.data;
    yield put({ type: SEARCH_ALBUM_SUCCESS, albums });
  } catch (error) {
    console.log(`error ${error}`);
    console.log("I reached catch block in albums saga");
    yield put({ type: SEARCH_ALBUM_FAIL });
  }
}
