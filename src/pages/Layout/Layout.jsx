import React from "react";
import { Link ,NavLink} from "react-router-dom";
import { Menu, Icon, Switch } from "antd";

class Layout extends React.Component {
  state = {
    theme: "dark",
    current: "1"
  };
  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div>
        <Switch
          checked={this.state.theme === "dark"}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
            <Menu.Item key="1">
              <Icon type="mail" />
              <span><Link to={'home'} style={{color:'#ffffff'}}>HOME</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="appstore" />
                <span><Link to="/comment" style={{color:'#ffffff'}}>COMMENT</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="setting" />
                <span><Link to="/self" style={{color:'#ffffff'}}>SELF</Link></span>
            </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default Layout;
