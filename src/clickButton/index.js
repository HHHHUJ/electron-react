// import React from "react";
import * as React from 'react'
import './clickButton.css';

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 0
    };
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const redstyle = {
      color:'red'
    }
    return (
      <div className="box">
        <button onClick={this.handleClick}>clickButton</button>
        <div style={redstyle}>
          count:
          {this.state.count}
        </div>
      </div>
    );
  }
}
export default ClickButton;
