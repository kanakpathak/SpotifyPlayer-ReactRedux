import regeneratorRuntime from 'regenerator-runtime';
import Artist  from "./reducers/artist.reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
    {
        artist: Artist
    }
)

const configureStore = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export default configureStore;
