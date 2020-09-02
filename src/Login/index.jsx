import React, { Component } from "react";
import { Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      way: true,
    };
  }

  componentDidMount() {}

  handleCode = () => {
    this.setState({
      way: false,
    })
  }

  handlePsd = () => {
    this.setState({
      way: true,
    })
  }

  render() {
    return (
      <>
        <div className="bg">
          <img src={require("./images/bg.jpg")} />
        </div>
        <div className="login">
          <img src={require("./images/LOGO.png")} />
          {/* 密码/验证码 */}
          {this.state.way == true ? (
            <>
              <div className="input">
                <input
                  type="text"
                  placeholder="账号"
                />
                <br />
                <input type="password" placeholder="密码" />
              </div>
              <div className="code">
                <a onClick={this.handleCode}>验证码登录</a>
                <a>忘记密码</a>
              </div>
            </>
          ) : (
            <>
              <div className="input">
                <input
                  type="text"
                  placeholder="账号"
                />
                <br />
                <input type="code" placeholder="验证码" />
              </div>
              <div className="psd">
                <a onClick={this.handlePsd}>密码登录</a>
              </div>
            </>
          )}

          <div className="other">
            <Divider plain style={{ color: "#fff" }}>
              其他登录方式
            </Divider>
            <img src={require("./images/wechat.png")} />
          </div>
          <div className="btn">登录</div>
        </div>
      </>
    );
  }
}

export default Login;
