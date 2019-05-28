import { all } from "redux-saga/effects";
import {artistSaga} from "./artistSaga";

const rootSaga = function* root(){
    yield all([...artistSaga]);
    
}

export default rootSaga;