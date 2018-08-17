import React,{Component} from "react";
import {connect} from "react-redux";

@connect(
    (state)=>({...state})
)
export default class Comment extends Component{
  componentWillMount() {
    console.log(this.props)
  }
  render(){
    const {title} = this.props;
    return (
      <div>
        this is my home
        <p>{title}</p>
      </div>
    )
  }
} 