import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';

export const artistSaga = [takeLatest('SEARCH_ARTIST', searchArtistSaga)];

// function searchArtist(artistName, access_token){
//     console.log(`access token: ${access_token}`);
//     return (
//         axios.get('https://api.spotify.com/v1/search',
//         {params:{q:`${artistName}`, type:'artist'}, headers: { Authorization: `Bearer ${access_token}`}})            
//     );
// }

function searchArtist(...args){
    var artistName = args[0],
    access_token = args[1];
 
    return axios.get('https://api.spotify.com/v1/search',
    {params:{q:`${artistName}`, type:'artist'}, headers: { Authorization: `Bearer ${access_token}`}}); 

     
 
}
 
export function* searchArtistSaga(action){
    try{
        const response = yield call(searchArtist, action.name, action.access_token);
        const artists = response.data.artists.items;
        console.log(artists)
        for(let i=0; i<artists.length; i++){
            console.log(artists[i]['name']);
        }
        yield put({type:"SEARCH_ARTIST_SUCCESS", artists});
    }
    catch(error){
        console.log(`Error ${error.response.data['message']}`)
        if(true){
            confirm('Session Expired. Want to continue?')?
            'x':'y';
        }
        console.log('I reached catch block');
        yield put({type:"SEARCH_ARTIST_FAIL"});
    }
}
