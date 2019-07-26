import { all } from "redux-saga/effects";
import { artistSaga } from "./artistSaga";
import { albumSaga } from "./albumSaga";
import { trackSaga } from "./trackSaga";

const rootSaga = function* root() {
  yield all([...artistSaga, ...albumSaga, ...trackSaga]);
};

export default rootSaga;
