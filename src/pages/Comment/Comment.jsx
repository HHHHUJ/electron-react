import React,{Component} from "react";
// import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { Button } from 'antd';
// @connect(
//     (state)=>({...state})
// )
export default class Comment extends Component{
  componentWillMount() {
    // console.log(this.props)
  }
  render(){
    const {title} = this.props;
    return (
      <div>
        <Link to="/">link to home</Link>
        this is my home
        <p>{title}</p>
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
        <Button type="primary">Button</Button>
      </div>
    )
  }
} 