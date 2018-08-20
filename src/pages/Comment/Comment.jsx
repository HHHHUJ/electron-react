import React, { Component } from "react";
// import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";
const {dialog} = require('electron').remote
  console.log(dialog)
// @connect(
//     (state)=>({...state})
// )
export default class Comment extends Component {
  componentWillMount() {
    // console.log(this.props)
  }
  render() {
    const { title } = this.props;
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
        <div id="holder">Drag your file here</div>
      </div>
    );
  }
  componentDidMount() {
    document.addEventListener("drop", function(e) {
      e.preventDefault();
      e.stopPropagation();

      for (let f of e.dataTransfer.files) {
        console.log("File(s) you dragged here: ", f.path);
      }
    });
    document.addEventListener("dragover", function(e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
}
