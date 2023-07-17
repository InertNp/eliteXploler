import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { login } from "../../api/Login";

const LoginForm = () => {
  function handleLogin(e: any) {
    login(e);
  }

  return (
    <Form
      name="form"
      className="flex flex-col justify-end  w-96 mx-10 "
      layout={"vertical"}
      requiredMark={"optional"}
      onFinish={handleLogin}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
          { type: "email", message: "Please enter valid email" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 3, message: "Must be more than 3 character" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item className="w-full flex  justify-start ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Link to={"/forgotpassword"} className="px-10">
          Forgot Password?
        </Link>
      </Form.Item>
      <Link to={"/register"} className="">
        Don't have an Account? Register
      </Link>
    </Form>
  );
};

export default LoginForm;
