import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props)
  }
  onIncrement = () => {
    const {actions} = this.props;
    let number = 1;
    actions.increment(number)
  }
  onDecrement = () => {
    const {actions} = this.props;
    actions.decrement(1)
  }
  onIncrementAsync = () => {
    const {actions} = this.props;
    actions.IncrementAsync()
  }
  render () {
    const { states } = this.props;
    return (
      <div>
        <span>this is home</span><br/>
        <button onClick={this.onIncrement}>+</button>
        {' '}
        <button onClick={this.onDecrement}>-</button>
        {' '}
        <button onClick={this.onIncrementAsync}>1秒后加1</button>
        <span>this number is :{states.count}</span>
      </div>
    )
  };
}

export default Home