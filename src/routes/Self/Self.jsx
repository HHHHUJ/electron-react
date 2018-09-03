import React,{Component} from 'react';
import {compose} from 'redux';
import { Link } from "react-router-dom";
import withTitle from '@/components/withTitle.jsx'
import loading from '@/components/loading.jsx'
import copy from '@/components/copy'

class Self extends Component {
  componentDidMount() {
    this.test(1,2)
  }
  test(a,b) {
    console.log([].slice.call(arguments))
    // const args = Array.from(arguments)
    // console.log(args.slice(1))
  }
  render() {
    return (
      <div>
        <h1>3333</h1>
        <span>this is self</span>
        
        <Link to="/point"> go to point</Link>
      </div>
    );
  }
}

export default compose(withTitle('这是一个标题'),copy('h1'))(Self)