import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

@connect(state => ({ ...state }))
export default class Self extends Component {
  render() {
    return (
      <div>
        <Link to="comment">go to comment</Link>
      </div>
    );
  }
}
