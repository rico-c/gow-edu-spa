import Footer from "../components/footer";
 
import Navbar from "../components/navbar";
import { useTranslation } from "react-i18next";

 

const MasterClass = () => {
  const { t } = useTranslation("common");
  return (
    <>
       
      <Navbar />
      work in progress
      <Footer />
    </>
  );
};

export default MasterClass;