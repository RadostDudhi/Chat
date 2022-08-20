import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Button, Block } from "../../../components";
import { Link } from 'react-router-dom';


const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    };

    return (
          <div className="auth__inner">
            <div className="auth__top">
                    <h2>Authentication</h2>
                    <p>Enter your login to sign in</p>
            </div>
            <Block>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="login"
                    hasFeedback validateStatus="success"
                    rules={[{ required: true, message: 'Please input your Login!' }]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Login" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" shape="round" className="login-form-button button">
                        Sign in
                    </Button>
                    <Link className="auth__register-link" to="/register">Register now!</Link>
                  </Form.Item>
                </Form>
            </Block>
          </div>
    );
};


export default LoginForm;