import regeneratorRuntime from "regenerator-runtime";
import Artist from "./reducers/artist.reducer";
import Album from "./reducers/album.reducer";
import Token from "./reducers/home.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import { combineReducers, createStore, applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  artist: Artist,
  album: Album,
  token: Token
});

const configureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default configureStore;
