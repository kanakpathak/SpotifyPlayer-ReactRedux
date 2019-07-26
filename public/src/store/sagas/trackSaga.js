import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";
import {
  SEARCH_TRACK,
  SEARCH_TRACK_FAIL,
  SEARCH_TRACK_SUCCESS
} from "../actions/track/track.type.js";
import { getToken, getAlbumId } from "./selector.js";
export const trackSaga = [takeLatest(SEARCH_TRACK, SearchTrackSaga)];

function SearchTrack(...args) {
  var albumId = args[0],
    accessToken = args[1];
  return axios.get(
    `https://api.spotify.com/v1/albums/${albumId}/tracks?limit=2`,
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );
}

export function* SearchTrackSaga(action) {
  try {
    const albumId = yield select(getAlbumId);
    const token = yield select(getToken);
    const response = yield call(SearchTrack, albumId, token.accessToken);
    const tracks = response.data.items;
    yield put({ type: SEARCH_TRACK_SUCCESS, tracks });
  } catch (error) {
    console.log("TCL: function*SearchTrackSaga -> error", error);
    yield put({ type: SEARCH_TRACK_FAIL });
  }
}
