import Navbar from "../../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingSection} from '../../components/headingSection'
import {StudyForm} from "../../components/studyform";

const Advise = () => {
  const {t} = useTranslation("common");

  return (
    <>
      <Navbar />
      <div>
        <div className="w-full flex justify-center pb-5">
          <img src="/img/Course advice_shutterstock_2033930096.png" alt="university" className="w-full md:max-w-screen-xl block rounded-lg" />
        </div>
        <div className="flex justify-center">
          <HeadingSection img={'/img/icon_Live Masterclass.png'} header={t('course-advise')} desc={t('course-advise-desc')} />
        </div>
        <div className="flex justify-center">
          <div className="md:max-w-screen-sm"><StudyForm /></div>

        </div>
      </div>
    </>
  );
};

export default Advise;
