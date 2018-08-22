import {
  put,
  fork,
  call,
  select,
  all,
  takeLatest,
  take,
  cancel,
} from 'redux-saga/effects';
import get from 'lodash/get';
import createReducer from '../createReducer';

/**
 *********************** 定义常量 ***********************
 */
const namespace = 'home';
const con = '/'; // namespace 与 func 之间的连接符

const INCREMENT = `${namespace}${con}INCREMENT`;
const DECREMENT = `${namespace}${con}DECREMENT`;

/**
 ***********************  Reducer 相关  ***********************
 */

export const selector = state => {
  return get(state, namespace);
};

// 初始化状态
const INITIAL_STATE = {
  count:0
};

const ACTION_HANDLERS = {
    [INCREMENT]:(state, action)=>{
      return {
        ...state
      }
    },
    [DECREMENT]:(state, action)=>{
      return {
        ...state
      }
    }
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

/**
 *********************** actions ***********************
 */
export const actions = {
    increment:()=>({
      type: INCREMENT
    }),
    decrement:()=>({
      type: DECREMENT
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
    console.log('hello world')
  }
};


/***
 ********************** 异步获取数据的辅助函数 **************************
*/





/**
 *********************** saga 入口 ***********************
 */
export const saga = function*() {
  yield all([
    fork(effects.hellosaga),
  ]);
};
