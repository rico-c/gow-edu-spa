import Footer from "../components/footer";

import Navbar from "../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingSection} from "../components/headingSection";
import {StudyForm} from "../components/studyform";

const PhdReady = () => {
  const {t} = useTranslation("common");
  return (
    <>

      <Navbar />
      <div >
        <div>
          <div className="w-full flex justify-center">
            <img src="/img/IMG_6762.png" alt="university" className="w-full md:max-w-screen-xl block rounded-lg" />
          </div>
          <div className="flex justify-center">
            <HeadingSection img={'/icon/icon_phD preparation@3x.png'} header={'Phd Preparation'} desc={t('oversea-desc')} />
          </div>
          <div className="flex justify-center">
            <div className="md:max-w-screen-sm"><StudyForm /></div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhdReady;
