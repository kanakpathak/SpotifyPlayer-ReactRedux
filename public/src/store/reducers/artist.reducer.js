import { SEARCH_ARTIST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_FAIL } from "../actions/artist/artist.type";

const initialState = {
    data:[],
    loading: false,
    loaded:false,
    fail:false
}

const Artist = (state=initialState, action)=>{
    switch(action.type){
        case SEARCH_ARTIST: return{
            ...state,
            loading: true,
            loaded: false
        };

        case SEARCH_ARTIST_SUCCESS: 
            // console.log('Action Payload: ',action.payload)
            return{
            ...state,
            data: action.artists,
            loaded: true,
            loading:false
        }
        case SEARCH_ARTIST_FAIL: return{
            ...state,
            fail: true,
            loading:false
        }
        default: return state
        
        
    }
}

export default Artist;