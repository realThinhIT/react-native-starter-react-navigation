import { 
  fork,
  all,
} from 'redux-saga/effects';

import exampleSaga from './example';

function* sagaHandler() {
  yield all([
    // Put your side effects here
    ...exampleSaga,
  ]);
}

export default function* rootSaga() {
  yield fork(sagaHandler);
}