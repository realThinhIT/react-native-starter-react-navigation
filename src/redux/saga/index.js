import { 
  fork,
  all,
} from 'redux-saga/effects';

import exampleSaga from './example';

function* sagaHandler() {
  while (true) {
    yield all([
      // Put your side effects here
      yield exampleSaga()
    ]);
  }
}

export default function* rootSaga() {
  yield fork(sagaHandler);
}