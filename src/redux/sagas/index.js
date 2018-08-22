/**
 * saga 入口
 */

import { all, fork } from 'redux-saga/effects';

import { saga as home } from '../modules/home';

export default function* rootSaga() {
  yield all([
    fork(home),
  ]);
}
