import { Descriptions } from "antd";

const ContactInfo = () => {
  return (
    <div className="w-96 my-10 flex">
      <Descriptions title="Our Information" column={1} className=" w-96">
        <Descriptions.Item label="Phone">9808080825</Descriptions.Item>
        <Descriptions.Item label="Address">
          Baneshowr,9 kathmandu
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ContactInfo;
