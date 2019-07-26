import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";
import { getToken } from "./selector";
import { SEARCH_ARTIST_FAIL } from "../actions/artist/artist.type";

export const artistSaga = [takeLatest("SEARCH_ARTIST", searchArtistSaga)];

function searchArtist(...args) {
  var artistName = args[0],
    access_token = args[1];

  return axios.get("https://api.spotify.com/v1/search", {
    params: { q: `${artistName}`, type: "artist" },
    headers: { Authorization: `Bearer ${access_token}` }
  });
}

export function* searchArtistSaga(action) {
  try {
    const token = yield select(getToken);
    const response = yield call(searchArtist, action.name, token.accessToken);
    const artists = response.data.artists.items;
    yield put({ type: "SEARCH_ARTIST_SUCCESS", artists });
    // for(let i=0; i<artists.length; i++){
    //     console.log(artists[i]['name']);
    // }
  } catch (error) {
    console.log(`Error ${error}`);
    console.log("I reached catch block");
    yield put({ type: SEARCH_ARTIST_FAIL });
  }
}
