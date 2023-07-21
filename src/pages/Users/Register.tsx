import { Image } from "antd";
import RegisterForm from "../../components/Register/RegisterForm";

const Register = () => {
  return (
    <div
      className={`w-full h-full
     flex justify-center 
      items-center mt-20
       md:my-5 md:mt-0   `}
    >
      <Image
        preview={false}
        src={`https://source.unsplash.com/1920x1080`}
        height={600}
        width={600}
        className=" object-cover hidden lg:block mr-20 "
      />
      <RegisterForm />
    </div>
  );
};

export default Register;
