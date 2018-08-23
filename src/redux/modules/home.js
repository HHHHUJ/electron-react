import {
  put,
  fork,
  call,
  select,
  all,
  takeLatest,
  take,
  cancel
} from "redux-saga/effects";
import {delay} from "redux-saga";
import get from "lodash/get";
import createReducer from "../createReducer";

/**
 *********************** 定义常量 ***********************
 */
const namespace = "home";
const con = "/"; // namespace 与 func 之间的连接符

const INCREMENT = `${namespace}${con}INCREMENT`;
const DECREMENT = `${namespace}${con}DECREMENT`;
const INCREMENT_ASYNC = `${namespace}${con}INCREMENT_ASYNC`

/**
 ***********************  Reducer 相关  ***********************
 */

export const selector = state => {
  return get(state, namespace);
};

// 初始化状态
const INITIAL_STATE = {
  count: 0
};

const ACTION_HANDLERS = {
  [INCREMENT]: (state) => {
    return {
      count: state.count + 1
    };
  },
  [DECREMENT]: (state) => {
    return {
      count: state.count - 1
    };
  }
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

/**
 *********************** actions ***********************
 */
export const actions = {
  increment: () => ({
    type: INCREMENT
  }),
  decrement: () => ({
    type: DECREMENT
  }),
  IncrementAsync:()=>({
    type:INCREMENT_ASYNC
  })
};

/**
 *********************** effects ***********************
 */
export const effects = {
  /**
   * @param {*number} sectionId
   */
  *hellosaga() {
    console.log("hello world");
  },
  *incrementAsync() {
    yield call(delay,1000);
    yield put(actions.increment());
  },
  *watchIncrementAsync() {
    yield takeLatest(INCREMENT_ASYNC, effects.incrementAsync);
  }
};

/***
 ********************** 异步获取数据的辅助函数 **************************
 */

/**
 *********************** saga 入口 ***********************
 */
export const saga = function*() {
  yield all([fork(effects.hellosaga),fork(effects.watchIncrementAsync)]);
};
