import Footer from "../components/footer";
 
import Navbar from "../components/navbar";
import ContactForm from "../components/contact";
import { useTranslation } from "react-i18next";

 

const Contact = () => {
  const { t } = useTranslation("common");
  return (
    <>
       
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;