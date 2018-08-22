import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  onIncrement() {
    const {actions} = this.props;
    actions.increment()
  }
  onDecrement() {
    const {actions} = this.props;
    actions.decrement()
  }
  render () {
    const { states } = this.props;
    return (
      <div>
        <span>this is home</span><br/>
        <button onClick={this.onIncrement.bind(this)}>+</button>
        <button onClick={this.onDecrement.bind(this)}>-</button>
        <span>this number is :{states.count}</span>
      </div>
    )
  };
}

export default Home