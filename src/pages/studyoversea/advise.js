import Footer from "../../components/footer";
 
import Navbar from "../../components/navbar";
import {useTranslation} from "react-i18next";
import {HeadingSection } from '../../components/headingSection'

const Advise = () => {
  const {t} = useTranslation("common");

  return (
    <>
       
      <Navbar />
      <div>
        <div className="w-full flex justify-center pb-5">
          <img src="/img/course_advice.jpg" alt="university" className="w-full md:max-w-screen-xl block rounded-lg"/>
        </div>
        <div className="flex justify-center">
          <HeadingSection img={'/img/icon_Live Masterclass.png'} header={t('course-advise')} desc={t('course-advise-desc')} />
        </div>
        <div className="flex justify-center py-10">
          wip
        </div>
      </div>
    </>
  );
};

export default Advise;
