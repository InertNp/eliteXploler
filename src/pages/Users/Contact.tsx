import ContactForm from "../../components/Contact/ContactForm";
import ContactInfo from "../../components/Contact/ContactInfo";

const Contact = () => {
  return (
    <div className="flex md:flex-row flex-col mx-20 justify-between">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;
