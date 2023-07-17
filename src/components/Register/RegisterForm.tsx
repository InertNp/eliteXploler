import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api/Signup";
import { useForm } from "antd/es/form/Form";

const RegisterForm = () => {
  const [form] = useForm();
  const nvi = useNavigate();
  function handleLogin(e: any) {
    if (e.password === e.cpassword) {
      signup(e);
      form.resetFields();
      nvi("/login");
    } else {
      message.error("Passwords Doesn't Match!!");
    }
  }
  return (
    <Form
      form={form}
      name="form"
      layout={"vertical"}
      className="flex flex-col justify-end  w-96 mx-10 "
      requiredMark={"optional"}
      onFinish={handleLogin}
    >
      <Form.Item
        label="Full Name"
        name="name"
        rules={[
          { required: true, message: "Please input your Full Name" },
          { min: 3, message: "Must be more than 3 character" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your Email" },
          { type: "email", message: "Enter Valid Email" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mobile Number"
        name="number"
        rules={[
          { required: true, message: "Please input your Mobile Number!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 5, message: "Must be more than 3 character" },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="cpassword"
        rules={[{ required: true, message: "Please Confirm your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item className="w-full flex  justify-start ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Link to={"/login"} className="">
        Already have an Account? Sign in
      </Link>
    </Form>
  );
};

export default RegisterForm;
