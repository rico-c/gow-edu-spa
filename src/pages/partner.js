import Footer from "../components/footer";
 
import Navbar from "../components/navbar";
import PartnerForm from "../components/partner";
import { useTranslation } from "react-i18next";

 

const Partner = () => {
  const { t } = useTranslation("common");
  return (
    <>
       
      <Navbar />
      <PartnerForm />
      <Footer />
    </>
  );
};

export default Partner;
