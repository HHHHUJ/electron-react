import React,{Component} from 'react';
import {Button} from 'antd';

class Point extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }
  handleClick=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
     <div style={{
       margin:'20px'
     }}>
        <Button type="primary" onClick={this.handleClick}>Primary</Button>
        <span>{this.state.count}</span>
     </div>
    );
  }
}

export default Point