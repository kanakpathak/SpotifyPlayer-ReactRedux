import { all } from "redux-saga/effects";
import { artistSaga } from "./artistSaga";
import { albumSaga } from "./albumSaga";
const rootSaga = function* root() {
  yield all([...artistSaga, ...albumSaga]);
};

export default rootSaga;
