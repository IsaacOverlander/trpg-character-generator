import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import characterSaga from './characterSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    characterSaga(),
    // watchIncrementAsync()
  ]);
}
