import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:20
    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  onIncrement = () => {
    const {actions} = this.props;
    actions.increment(10)
  }
  onDecrement = () => {
    const {actions} = this.props;
    actions.decrement(5)
  }
  onIncrementAsync = () => {
    const {actions} = this.props;
    actions.incrementAsync(this.state.number)
  }
  render () {
    const { states } = this.props;
    const {number} = this.state;
    return (
      <div>
        <span>this is home</span><br/>
        <button onClick={this.onIncrement}>+</button>
        {' '}
        <button onClick={this.onDecrement}>-</button>
        {' '}
        <button onClick={this.onIncrementAsync}>一秒后加{number}</button>
        <span>this number is :{states.count}</span> 
      </div>
    )
  };
}

export default Home