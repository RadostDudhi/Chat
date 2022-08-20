import React from "react";
import { Form, Input } from 'antd';
import { Button, Block } from "../../../components";
import { Link } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';


const RegisterForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    };
    const success = false;
    return (
          <div className="auth__inner">
            <div className="auth__top">
                    <h2>Registration</h2>
                    <p>To enter the chat, you need to register</p>
            </div>
            <Block>
              {!success ? (
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                >
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please input your E-mail!' }]}
                >
                  <Input placeholder="E-mail" />
                </Form.Item>
                <Form.Item
                  name="login"
                  rules={[{ required: true, message: 'Please input your Login!' }]}
                >
                  <Input placeholder="Login" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input
                    type="password"
                    placeholder="Repeat Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" shape="round" className="login-form-button button">
                    Register
                  </Button>
                  <Link className="auth__register-link" to="/login">Sign in</Link>
                </Form.Item>
                </Form>
              ) : (
                <div className="auth__success-block">
                  <div className="auth__info-icon">
                  <ExclamationCircleOutlined />
                  </div>
                  <h3>Verify your account</h3>
                  <p>An email has been sent to your email address with a link to verify your account</p>
                </div>
              )
              }     
            </Block>
          </div>
    );
};


export default RegisterForm;