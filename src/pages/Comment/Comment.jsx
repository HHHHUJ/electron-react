import React,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

@connect(
    (state)=>({...state})
)
export default class Comment extends Component{
  componentWillMount() {
    console.log(this.props)
  }
  render(){
    console.log(require.resolve('electron'))
    const {title} = this.props;
    return (
      <div>
        <Link to="/">link to home</Link>
        this is my home
        <p>{title}</p>
        <Button type="primary">Button</Button>
      </div>
    )
  }
} 