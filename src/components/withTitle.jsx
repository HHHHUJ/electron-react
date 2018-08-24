import React, { Component } from 'react';

export default (title)=>(WrappedComponent)=>
    class HOC extends Component {
      render() {
        const newProps = {
          hello:'world'
        }
        return <div>
          <div className="demo-header">
            {title}
          </div>
          <WrappedComponent {...this.props} {...newProps}/>
        </div>
      }
    }