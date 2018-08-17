import React from "react";
import {NavLink,Link} from "react-router-dom"

class Layout extends React.Component {
  render() {
    const style = {};
    return (
      <div className={style}>
        <ul>
          <li>
            <NavLink to="/">首页</NavLink>
          </li>
          <li>
            <Link to="/comment">评论</Link>
          </li>
          <li>
            <Link to="/self">个人</Link>
          </li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Layout;
