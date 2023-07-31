import Footer from "../../components/footer";
 
import Navbar from "../../components/navbar";
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";

const PhdPre = () => {
  const {t} = useTranslation("university");


  return (
    <>
       
      <Navbar />
      <div>
        <div>
          <img src="/img/phd_preparation.jpg" alt="university" className="w-full"/>
        </div>
        <div className="flex justify-center py-10">
          wip
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhdPre;
