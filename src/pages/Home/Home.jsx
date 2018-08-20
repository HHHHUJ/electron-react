import React,{Component} from "react";
import {Link} from "react-router-dom";
// import {connect} from "react-redux";

// @connect(
//     (state)=>({...state})
// )
export default class Home extends Component{
  render(){
    const {title} = this.props;
    return (
      <div>
        <Link to={'self'}>go to self!!!!!!!!!!!!!</Link>
        <p>{title}</p>
      </div>
    )
  }
} 