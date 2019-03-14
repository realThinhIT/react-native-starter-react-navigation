import { takeLatest, put } from 'redux-saga/effects';

function* onFetchExample(action) {
  // try {
  //   const user = yield call(Api.fetchUser, action.payload.userId);
  //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  // } catch (e) {
  //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  // }

  yield put({ 
    type: `EXAMPLE_DISPATCHED`,
    text: action.text
  });
}

export default [
  takeLatest('EXAMPLE_DISPATCH', onFetchExample)
];