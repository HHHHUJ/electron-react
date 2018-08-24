import React, { Component } from "react";
import ReactDom from "react-dom";
import { message } from "antd";
import gotem from "gotem";

export default targetName => Com => {
  return class extends Component {
    componentDidMount() {
      const ctx = this;
      const dom = ReactDom.findDOMNode(ctx);
      const nodes = {
        trigger: dom,
        // targetName为DOM选择器，复制组件将会复制它的值
        target: dom.querySelector(targetName)
      };
      gotem(nodes.trigger, nodes.target, {
        success: function() {
          message.success("复制成功");
        },
        error: function() {
          message.error("复制失败，请手动输入");
        }
      });
    }
    render() {
      return <Com {...this.props} />;
    }
  };
};
