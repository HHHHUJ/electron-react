import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:20,
      title:'1231212'
    }
  }
  componentDidMount() {
    let promise1 = new Promise((resolve,reject)=>{
      setTimeout(()=>{
           resolve(1);
      },5000)
    });
    let promise2 = new Promise((resolve,reject)=>{
      setTimeout(()=>{
           resolve(2);
      },4000)
    });
    let promise3 = new Promise((resolve,reject)=>{
      setTimeout(()=>{
           resolve(3);
      },2000)
    });
    Promise.race([promise1,promise2,promise3]).then(res=>{
        console.log(res);
    })
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
        <span>this number is :{states.count}</span> <br/>
        <Link to='/self'>go to self</Link>
        <Link to='/toe'>go to toe</Link>
      </div>
    )
  };
}


export default Home