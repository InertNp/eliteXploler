import { Image } from "antd";
import LoginForm from "../components/Login/LoginForm";

export const Login = () => {
  return (
    <div
      className={`w-full h-full
    flex justify-center 
     items-center mt-20
      md:my-5 md:mt-2   `}
    >
      <Image
        preview={false}
        src={`https://source.unsplash.com/1920x1080`}
        height={600}
        className=" object-cover hidden lg:block mx-5 "
      />
      <LoginForm />
    </div>
  );
};
