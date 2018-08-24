import React, { Component } from 'react';

import {Spin} from 'antd'
export default (loadingCheck)=>(Com)=>{
  return class extends Com {
    render() {
      if (loadingCheck(this.props)) {
        return <Spin tip="加载中" size="large">
          {super.render()}
        </Spin>
      } else {
        return super.render();
      }
    }
  }
}